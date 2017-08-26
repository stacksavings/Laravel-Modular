<?php

Route::group(['prefix' => 'mansion'], function()
{
    Route::get('index', 'MansionController@index');
});