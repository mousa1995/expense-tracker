import type { ExpenseCategory } from "../types/ExpenseCategory";

interface ExpenseItemProps {
  person: string;
  amount: number;
  category: ExpenseCategory;
}

export const ExpenseItem = (props: ExpenseItemProps) => {
  return (
    <>
      <li>
        <p>Name : {props.person}</p>
        <p>Expense: ${props.amount}</p>
        <p>Category: {props.category}</p>
      </li>
    </>
  );
};
