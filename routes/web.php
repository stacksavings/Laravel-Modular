<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect(env('DEFAULT_LAYOUT') . '/index');
});

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
// Route::get('/test', 'ReadSheetController@test');
// Route::get('/content', 'ReadSheetController@content');
// Route::get('/panorama', 'ViewerController@panorama');
// Route::get('/form', 'ViewerController@form');

Route::get('/layout', 'LayoutController@layout');

Route::get('auth/facebook', 'Auth\LoginController@redirectToProvider');
Route::get('auth/facebook/callback', 'Auth\LoginController@handleProviderCallback');

require __DIR__ . '/' . env('DEFAULT_LAYOUT') . '.php';