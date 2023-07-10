<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChannelController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/channel/index', [ ChannelController::class, 'index' ]);
Route::post('/channel/create', [ ChannelController::class, 'createChannel' ]);
Route::post('/channel/update/{id}', [ ChannelController::class, 'updateChannel' ]);
Route::get('/channel/delete/{id}', [ ChannelController::class, 'deleteChannel' ]);

