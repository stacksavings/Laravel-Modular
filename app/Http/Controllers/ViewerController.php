<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewerController extends Controller
{
    public function panorama()
    {
    	# This can be a read data from the spreadsheet
    	$dummyData = "/images/alma.jpg";

    	# Pass the data to the viewer template: ['image' => $dummyData]
    	return view('templates.viewer', ['image' => $dummyData]);
    }
}
