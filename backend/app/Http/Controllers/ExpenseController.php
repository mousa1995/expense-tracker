<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    public function index () {
        return response()->json([]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            "amount" => "required|numeric",
            "person" => "required|string",
            "category" => "required|string",
        ]);

        return response()->json([
            "success" => true,
            "message" => "Expence created succesfully",
            "data" => $validated,
        ], 201);
    }
}
