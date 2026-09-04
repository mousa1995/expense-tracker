import { useState } from "react";
import type { Expense } from "../types/Expense";
import { ExpenseItem } from "./ExpenseItem";
import {
  expenseCategories,
  type ExpenseCategory,
} from "../types/ExpenseCategory";
import { totalCalculator } from "../utils/totoalCalculator";

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (e: number) => void;
}

export const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<
    ExpenseCategory | "all"
  >("all");

  let filteredExpenses;

  if (selectedCategory === "all") {
    filteredExpenses = expenses;
  } else {
    filteredExpenses = expenses.filter((expense) => {
      return expense.category === selectedCategory;
    });
  }

  const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value as ExpenseCategory);
  };

  return (
    <>
      <select onChange={categoryHandler} name="filterCategory">
        <option value={"all"}>All</option>
        {expenseCategories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      {selectedCategory.length > 0 ? (
        <ul>
          {filteredExpenses.length === 0 ? (
            <span>No expenses in this category</span>
          ) : (
            filteredExpenses.map((expense) => {
              return (
                <ExpenseItem
                  onDelete={onDelete}
                  id={expense.id}
                  key={expense.id}
                  amount={expense.amount}
                  person={expense.person}
                  category={expense.category}
                />
              );
            })
          )}
        </ul>
      ) : (
        <div>No Expenses yet</div>
      )}
      {filteredExpenses.length === 0 ? (
        ""
      ) : (
        <div>
          Total expense from this category : {totalCalculator(filteredExpenses)}
          $
        </div>
      )}
    </>
  );
};
