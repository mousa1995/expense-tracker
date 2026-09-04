import type { Expense } from "../types/Expense";
import { ExpenseItem } from "./ExpenseItem";

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (e: number) => void;
}

export const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  return (
    <>
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => {
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
          })}
        </ul>
      ) : (
        <div>No Expenses yet</div>
      )}
    </>
  );
};
