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

    public function show(int $expense) {
     
    $thisExpense = Expense::find($expense);

    if(!$thisExpense) {
        return response()->json([
            "success" => false,
            "message" => "Expense with id=$expense not found!",
            "data" => [],
        ], 404);
    }
    
    return response()->json([
        "success" => true,
        "message" => "expense with id $expense",
        "data" => $thisExpense,
    ], 200);
    }

    public function update(Request $request, int $expense) {
        //1. check if $expense exists 
        $thisExpense = Expense::find($expense);

        //2. return invalid (404) if not exists
        if(!$thisExpense) {
            return response()->json([
                "success" => false,
                "message" => "expense not found during update (404)",
                "data" => [],
            ], 404);
        }

        //3. validate && update the expense 
        $validated = $request->validate([
            "amount" => "required|numeric",
            "person" => "required|string",
            "category" => "required|string",
        ]);

        $updatedExpense = $thisExpense->update($validated);

        //4. return correct json
        if(!!$updatedExpense) {
            return response()->json([
            "success" => true,
            "message" => "expense updated successfully!",
            "data" => $thisExpense,
        ],200);
        } 
    }
}
