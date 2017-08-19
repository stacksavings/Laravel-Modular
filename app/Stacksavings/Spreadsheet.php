<?php

namespace App\Stacksavings;

use Google_Client;
use Google_Service_Sheets;
use Google\Spreadsheet\SpreadsheetService;
use Google\Spreadsheet\ServiceRequestFactory;
use Google\Spreadsheet\DefaultServiceRequest;

class Spreadsheet
{
    /**
     * The Spreadsheet Service.
     *
     * @var SpreadsheetService
     */
	private $client;

    /**
     * Data read from spreadsheet.
     *
     * @var array
     */
	private $data = [];

    /**
     * The construct method.
     *
     * @param  void
     * @return void
     */
	public function __construct()
	{
		$this->client = $this->buildClient();
	}

    /**
     * Set $data property.
     *
     * @param  array
     * @return void
     */
    private function setData($data = null)
    {
    	$this->data = $this->parseData($data);
    }

    /**
     * Get $data property.
     *
     * @param  void
     * @return array
     */
    public function get()
    {
    	return $this->data;
    }

    /**
     * Get a Google Client for Spreadsheets.
     *
     * @param  void
     * @return \Google\Spreadsheet\SpreadsheetService;
     */
    private function buildClient()
    {
		putenv('GOOGLE_APPLICATION_CREDENTIALS=' . config('spreadsheets.client_secret'));
		
		$client = new Google_Client;
		$client->useApplicationDefaultCredentials();
		 
		$client->setApplicationName(config('spreadsheets.name'));
		$client->setScopes([
			'https://www.googleapis.com/auth/drive',
			'https://spreadsheets.google.com/feeds'
		]);
		 
		if ($client->isAccessTokenExpired()) {
		    $client->refreshTokenWithAssertion();
		}

		$accessToken = $client->fetchAccessTokenWithAssertion()["access_token"];

		ServiceRequestFactory::setInstance(
		    new DefaultServiceRequest($accessToken)
		);

		return new SpreadsheetService();
    }

    /**
     * Get worksheed content in a spreadsheat.
     *
     * @param  void
     * @return array $representative | null
     */
    public function read($namesheet = '')
    {
		if (empty($namesheet)) {
			abort('404', 'The worksheet is empty.');
		}

		$spreadsheet = $this->client->getSpreadsheetFeed()
		   ->getByTitle(config('spreadsheets.spreadsheet'));
		
		$worksheetFeed = $spreadsheet->getWorksheetFeed();
		$worksheet = $worksheetFeed->getByTitle($namesheet);
		$listFeed = $worksheet->getListFeed();

		foreach ($listFeed->getEntries() as $entry) {
		   $representative[] = $entry->getValues();
		}

		$this->setData($representative);

		return $this;
    }

    /**
     * Parse data for rendering.
     *
     * @param  void
     * @return array $result | null
     */
    private function parseData(array $data = null)
    {
        $result = [];
        $id = 0;
    	
    	if (empty($data)) {
    		return $result;
    	}

        foreach ($data as $rows => $row) {
    		if (empty($row['type'])) {
    			$result[$row['fieldname']] = $row['text'];
    		} else {
    			if (!empty($row['id'])) {
    				if ($row['id'] != $id) {
    					$id = $row['id'];
    					$result[$row['type']][$row['id']][$row['fieldname']] = $row['text'];
    				} else {
    					$result[$row['type']][$row['id']][$row['fieldname']] = $row['text'];	
    				}
    			}
    		}
        }

        return $result;
    }
}