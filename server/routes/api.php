<?php

use App\Http\Controllers\Auth\AuthobjectController;
use App\Http\Controllers\Auth\LilguyController;
use App\Http\Controllers\TestobjectController;
use Illuminate\Support\Facades\Route;

// Testobject
Route::get('/testobject', [TestobjectController::class, 'index']);
Route::get('/testobject/{id}', [TestobjectController::class, 'show']);
Route::post('/testobject/create', [TestobjectController::class, 'store']);
Route::put('/testobject/update', [TestobjectController::class, 'update']);
Route::delete('/testobject/destroy', [TestobjectController::class, 'destroy']);

// Auth
Route::middleware('auth:sanctum')->group(function () {
    // Authobject
    Route::get('/authobject', [AuthobjectController::class, 'index']);
    Route::get('/authobject/{id}', [AuthobjectController::class, 'show']);
    Route::post('/authobject/create', [AuthobjectController::class, 'store']);
    Route::put('/authobject/update', [AuthobjectController::class, 'update']);
    Route::delete('/authobject/destroy', [AuthobjectController::class, 'destroy']);

    // Lilguy
    Route::get('/lilguy', [LilguyController::class, 'index']);
    Route::get('/lilguy/{id}', [LilguyController::class, 'show']);
    Route::post('/lilguy/create', [LilguyController::class, 'store']);
    Route::put('/lilguy/update/{id}', [LilguyController::class, 'update']);
    Route::delete('/lilguy/destroy/{id}', [LilguyController::class, 'destroy']);
});

