<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ViewerController extends Controller
{
    public function panorama()
    {
    	return view('templates.viewer');
    }
}
