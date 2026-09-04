import type { ExpenseCategory } from "../types/ExpenseCategory";

interface ExpenseItemProps {
  person: string;
  amount: number;
  category: ExpenseCategory;
  onDelete: (e: number) => void;
  id: number;
}

export const ExpenseItem = (props: ExpenseItemProps) => {
  return (
    <>
      <li>
        <p>Name : {props.person}</p>
        <p>Expense: ${props.amount}</p>
        <p>Category: {props.category}</p>
        <button
          onClick={() => props.onDelete(props.id)}
          style={{ color: "red" }}
        >
          Delete
        </button>
      </li>
    </>
  );
};
