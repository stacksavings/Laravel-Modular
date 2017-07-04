# StackSavings

## Read a spreadsheet

### In Controller

	use App\Stacksavings\Spreadsheet;
    
    $sheet = new Spreadsheet();
    $data = $sheet->read(config('spreadsheets.worksheet'))->get(); 

    # Example 2

    $sheet = new Spreadsheet();
    $data = $sheet->read('worksheetName')->get(); 

### Configuration

	'name' => 'StackSavings',
	'spreadsheet' => 'SheetsLayout-1',
	'worksheet' => 'livre-lead_testimonial', # Optional
	'client_secret' => '../stacksavings-18347e7f1ecf.json'

## Panorama

