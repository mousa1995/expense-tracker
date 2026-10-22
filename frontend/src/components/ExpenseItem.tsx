import type { Expense } from "../types/Expense";
import type { ExpenseCategory } from "../types/ExpenseCategory";

interface ExpenseItemProps {
  person: string;
  amount: number;
  category: ExpenseCategory;
  onDelete: (e: number) => void;
  onEdit: (expense: Expense) => void;
  id: number;
}

export const ExpenseItem = (props: ExpenseItemProps) => {
  return (
    <>
      <li className="expense-item">
        <p>Name : {props.person}</p>
        <p>Expense: ${props.amount}</p>
        <p>Category: {props.category}</p>
        <div className="expense-actions">
          <button onClick={() => props.onDelete(props.id)}>Delete</button>
          <button
            onClick={() =>
              props.onEdit({
                id: props.id,
                person: props.person,
                category: props.category,
                amount: props.amount,
              })
            }
          >
            Edit
          </button>
        </div>
      </li>
    </>
  );
};
