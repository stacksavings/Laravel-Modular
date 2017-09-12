<?php

Route::group(['prefix' => 'mansion'], function()
{
    Route::get('{page}', 'MansionController@page');
});