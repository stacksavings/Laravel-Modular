<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewerController extends Controller
{
    public function panorama()
    {
    	# Examples

    	# empty width and height 
    	// $data = [
    	// 	'panorama' => [
    	// 		'image' => "/images/alma.jpg",
    	// 		'id' => 'first',
    	// 		'width' => '',
    	// 		'height' => ''
    	// 	],
    	// 	'n...' => [
    	// 		'image' => "/images/cerro.jpg",
    	// 		'id' => 'second',
     	//   	'width' => '',
    	// 		'height' => ''
    	// 	]
    	// ];

    	# without width and height 
    	// $data = [
    	// 	'panorama' => [
    	// 		'image' => "/images/alma.jpg",
    	// 		'id' => 'first'
    	// 	]
    	// ];

    	# empty height
    	// $data = [
    	// 	'panorama' => [
    	// 		'image' => "/images/alma.jpg",
    	// 		'id' => 'first',
    	// 		'width' => '600px',
    	// 		'height' => ''
    	// 	]
    	// ];

    	# empty width 
    	// $data = [
    	// 	'panorama' => [
    	// 		'image' => "/images/alma.jpg",
    	// 		'id' => 'first',
     	//   	'width' => '',
    	// 		'height' => '400px'
    	// 	]
    	// ];

    	# This can be a read data from the spreadsheet
    	$data = [
    		'panorama1' => [
    			'image' => "/images/alma.jpg",
    			'id' => 'first',
    			'width' => '600px',
    			'height' => ''
    		],
    		'panorama2' => [
    			'image' => "/images/cerro.jpg",
    			'id' => 'second',
       			'width' => '',
    			'height' => '400px'
    		]
    	];

    	# Pass the data to the viewer template: ['data' => $data[panoramaX]]
    	return view('templates.viewer', ['data' => $data]);
    }
}
