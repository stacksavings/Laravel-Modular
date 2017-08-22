<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stacksavings\Spreadsheet;

class MansionController extends Controller
{
    public function index()
    {
        $sheet = new Spreadsheet();
        $data = $sheet->read(config('spreadsheets.worksheet'))->get();
        
        return view('templates.mansion.index', ['data' => $data]); 
    }
}
