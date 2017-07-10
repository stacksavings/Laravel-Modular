<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Layout title
    |--------------------------------------------------------------------------
    */
	'title' => 'My Layout',

    /*
    |--------------------------------------------------------------------------
    | Layout custom css
    |--------------------------------------------------------------------------
    */
	'css' => '/css/layout.css',

    /*
    |--------------------------------------------------------------------------
    | Layout custom JavaScript
    |--------------------------------------------------------------------------
    */
	'js' => 'js/layout.js',

    /*
    |--------------------------------------------------------------------------
    | Includes
    |--------------------------------------------------------------------------
    |
    | Partials to be included in layouts
    | Base Path partials: /resources/views/
    |
    */
	'inc' => [
		'header' => 'partials.header',
		'footer' => 'partials.footer'
	],

    /*
    |--------------------------------------------------------------------------
    | Widgets
    |--------------------------------------------------------------------------
    |
    | Widgets will be used in layout
    | Base Path Tpl: /resources/views/
    | Base Path JS - CSS: /public
    |
    */
	'widgets' => [

		'calendar' => [
			'tpl' => 'widgets.calendar',
			'js' => '/js/calendar.js',
			'css' => '/css/calendar.css'
		],

		'lastpost' => [
			'tpl' => 'widgets.lastpost',
			'js' => '/js/lastpost.js',
			'css' => '/css/lastpost.css'
		]
	]
];