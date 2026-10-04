<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expense;

class ExpenseController extends Controller
{
    public function index () {
        $expenses =  Expense::query()->get();

        return response()->json([
            "success" => true,
            "message" => "list of all expenses.",
            "data" => $expenses,
        ], 200);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            "amount" => "required|numeric",
            "person" => "required|string",
            "category" => "required|string",
        ]);

        $expense = Expense::create($validated);

        return response()->json([
            "success" => true,
            "message" => "Expense created successfully",
            "data" => $expense,
        ], 201);
    }

    public function show($expense) {
     
    $thisExpense = Expense::find($expense);
    
    return response()->json([
        "success" => true,
        "message" => "expense with id $expense",
        "data" => $thisExpense,
    ], 200);
    }
}
