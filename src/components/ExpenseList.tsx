import type { Expense } from "../types/Expense";
import { ExpenseItem } from "./ExpenseItem";

interface ExpenseListProps {
  expenses: Expense[];
}

export const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <>
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                amount={expense.amount}
                person={expense.person}
                category={expense.category}
              />
            );
          })}
        </ul>
      ) : (
        <div>No Expenses yet</div>
      )}
    </>
  );
};
