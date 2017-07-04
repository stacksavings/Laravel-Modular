<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stacksavings\Spreadsheet;

class ReadSheetController extends Controller
{
    public function test()
    {
        $sheet = new Spreadsheet();
        $data = $sheet->read(config('spreadsheets.worksheet'))->get(); 

		dd($data);	
    }

    public function content()
    {
        $sheet = new Spreadsheet();
        $data = $sheet->read(config('spreadsheets.worksheet'))->get(); 

    	return view('templates.content', ['data' => $data]);
    }
}
