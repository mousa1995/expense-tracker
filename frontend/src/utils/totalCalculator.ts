import type { Expense } from "../types/Expense";

export const totalCalculator = (expenses: Expense[]): number => {
  const total = expenses.map((expense) => expense.amount);
  return total.reduce((a, b) => a + b, 0);
};
