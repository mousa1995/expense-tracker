<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{   

    #Define mass-assignable fields
    protected $fillable = [
        "person",
        "category",
        "amount",
    ];

    #Configure casts where appropriate
    protected function casts() : array
    {
        return [
            'amount' => 'decimal:2',
        ];
    }

}
