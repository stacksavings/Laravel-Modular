<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LayoutController extends Controller
{
    private $data = [
    	[
    		'title' => 'My title #1',
    		'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ex aliquam nihil excepturi error, qui architecto iure id provident est repellendus quisquam mollitia, cum? Quaerat fugiat, ea beatae dolore sit.'
    	],
    	[
      		'title' => 'My title #2',
    		'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ex aliquam nihil excepturi error, qui architecto iure id provident est repellendus quisquam mollitia, cum? Quaerat fugiat, ea beatae dolore sit.'
    	]
    ];

    public function layout()
    {
    	return view('layouts.mylayout', ['data' => $this->data]);
    }
}
