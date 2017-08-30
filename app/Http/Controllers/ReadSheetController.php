<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stacksavings\Spreadsheet;

class ReadSheetController extends Controller
{
    public function test()
    {
        $sheet = new Spreadsheet();
        $data = $sheet->read('header')->get(); 
        $ar = ['hola'];

        $data = array_merge($data, $ar);
		dd($data);	
    }
}
