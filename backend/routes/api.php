<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExpenseController;

Route::get("/expenses", [ExpenseController::class , 'index']);

Route::post("/expenses", [ExpenseController::class , 'store']);

Route::get("/expenses/{expense}" , [ExpenseController::class , 'show']);

Route::put("/expenses/{expense}", function($expense){
    return response()->json([
        'id' => $expense,
    ]);
});

Route::delete("/expenses/{expense}", function($expense){
    return response()->noContent();
});