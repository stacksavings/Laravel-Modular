<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stacksavings\Spreadsheet;

class MansionController extends Controller
{
    private $data = [
        'panorama1' => [
            'image' => "/images/alma.jpg",
            'id' => 'first',
            'width' => '100%',
            'height' => ''
        ],
        'panorama2' => [
            'image' => "/images/cerro.jpg",
            'id' => 'second',
            'width' => '100%',
            'height' => '400px'
        ]
    ];

    public function index()
    {
        $sheet = new Spreadsheet();
        $data = $sheet->read(config('spreadsheets.worksheet'))->get();

        $this->data['panorama1']['image'] = $data['panorama_1'];
        $this->data['panorama2']['image'] = $data['panorama_2'];
        
        return view('templates.mansion.index', ['data' => $this->data]); 
    }
}
