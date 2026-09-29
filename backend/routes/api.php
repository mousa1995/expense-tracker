<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return 'api is working !';
});

Route::get("/expenses", function(){
    return response()->json([]);
});

Route::post("/expenses", function(){
    return response()->json([]);
});

Route::get("/expenses/{expense}", function($expense){
    return response()->json([
        'id' => $expense,
    ]);
});

Route::put("/expense/{expense}", function($expense){
    return response()->json([
        'id' => $expense,
    ]);
});

Route::delete("/expenses/{expense}", function($expense){
    return response()->noContent();
});