<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        return view('templates.mansion.index', ['data' => $this->data]); 
    }
}
