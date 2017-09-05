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

    public function services()
    {
    	return view('templates.mansion.services');
    }

    public function about()
    {
    	return view('templates.mansion.about');
    }

    public function gallery()
    {
    	return view('templates.mansion.gallery');
    }

    public function mail()
    {
    	return view('templates.mansion.mail');
    }
}
