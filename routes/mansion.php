<?php

Route::group(['prefix' => 'mansion'], function()
{
    Route::get('index', 'MansionController@index');
    Route::get('services', 'MansionController@services');
    Route::get('about', 'MansionController@about');
    Route::get('gallery', 'MansionController@gallery');
    Route::get('mail', 'MansionController@mail');
});