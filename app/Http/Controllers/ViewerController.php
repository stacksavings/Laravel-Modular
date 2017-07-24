<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewerController extends Controller
{
    public function panorama()
    {
    	# This can be a read data from the spreadsheet
    	$dummyData = "/images/alma.jpg";

    	$data = [
    		'panorama1' => [
    			'image' => "/images/alma.jpg",
    			'wrapper' => 'panorama',
    			'id' => 'first'
    		],
    		'panorama2' => [
    			'image' => "/images/cerro.jpg",
    			'wrapper' => 'panorama',
    			'id' => 'second'
    		]
    	];

    	# Pass the data to the viewer template: ['image' => $dummyData]
    	return view('templates.viewer', ['data' => $data]);
    }
}
