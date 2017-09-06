<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stacksavings\Spreadsheet;

class MansionController extends Controller
{
    public function index()
    {
        $sheet = new Spreadsheet();
        $data = $sheet->read('index')->get();
        $common = $sheet->read('common')->get();

        return view('templates.mansion.index', ['data' => $data, 'common' => $common]); 
    }

    public function services()
    {
        $sheet = new Spreadsheet();
        $common = $sheet->read('common')->get();

    	return view('templates.mansion.services', ['common' => $common]);
    }

    public function about()
    {
        $sheet = new Spreadsheet();
        $common = $sheet->read('common')->get();

    	return view('templates.mansion.about', ['common' => $common]);
    }

    public function gallery()
    {
        $sheet = new Spreadsheet();
        $common = $sheet->read('common')->get();

    	return view('templates.mansion.gallery', ['common' => $common]);
    }

    public function mail()
    {
        $sheet = new Spreadsheet();
        $common = $sheet->read('common')->get();
        
    	return view('templates.mansion.mail', ['common' => $common]);
    }
}
