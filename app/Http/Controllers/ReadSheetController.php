<?php

namespace App\Http\Controllers;

use Google_Client;
use Google_Service_Sheets;
use Illuminate\Http\Request;
use Google\Spreadsheet\SpreadsheetService;
use Google\Spreadsheet\ServiceRequestFactory;
use Google\Spreadsheet\DefaultServiceRequest;

class ReadSheetController extends Controller
{
    /**
     * The Spreadsheet Service.
     *
     * @var SpreadsheetService
     */
	private $client;

    /**
     * The construct method.
     *
     * @param  void
     * @return void
     */
	public function __construct()
	{
		$this->setClient();
	}

    public function test()
    {
		$data = $this->parseData($this->readSheet());

		dd($data);	
    }

    public function content()
    {
    	$data = $this->parseData($this->readSheet());
    	$data = collect($data);

    	return view('templates.content', ['data' => $data]);
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
     * Set $client property.
     *
     * @param  void
     * @return void
     */
    private function setClient()
    {
    	$this->client = $this->buildClient();
    }

    /**
     * Get worksheed content in a spreadsheat.
     *
     * @param  void
     * @return array $representative | null
     */
    private function readSheet()
    {
		$spreadsheet = $this->client->getSpreadsheetFeed()
		   ->getByTitle(config('spreadsheets.spreadsheet'));
		 
		$worksheetFeed = $spreadsheet->getWorksheetFeed();
		$worksheet = $worksheetFeed->getByTitle(config('spreadsheets.worksheet'));
		$listFeed = $worksheet->getListFeed();

		foreach ($listFeed->getEntries() as $entry) {
		   $representative[] = $entry->getValues();
		}

		return empty($representative) ? [] : $representative;
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
