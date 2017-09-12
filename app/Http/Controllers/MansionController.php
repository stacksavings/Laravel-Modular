<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stacksavings\Spreadsheet;

class MansionController extends Controller
{
    public function page($page)
    {
        $page = htmlentities($page);
        $sheet = new Spreadsheet();

        $data = $sheet->read($page)->get();
        
        $common = $sheet->read('common')->get();

        return view('layouts.mansion', ['data' => $data, 'common' => $common]); 
    }
}
