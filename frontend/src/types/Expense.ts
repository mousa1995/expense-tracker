import type { ExpenseCategory } from "./ExpenseCategory";

export interface Expense {
  id: number;
  amount: number;
  person: string;
  category: ExpenseCategory;
}
