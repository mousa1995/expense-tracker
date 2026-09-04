import type { Expense } from "../types/Expense";

export const idGenerator = (expenses: Expense[]) => {
  const expenseIDList = expenses.map((expense) => {
    return expense.id;
  });
  const maxID = Math.max(...expenseIDList);

  return maxID + 1;
};
