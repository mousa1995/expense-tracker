import { useEffect, useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import IsLoading from "./components/IsLoading";
import type { Expense } from "./types/Expense";
import type { ExpenseCategory } from "./types/ExpenseCategory";
import { totalCalculator } from "./utils/totalCalculator";
import {
  createExpense,
  deleteExpense,
  getExpenses,
  updateExpense,
} from "./services/expenseAPI";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [isEditing, setIsEditing] = useState<Expense | null>(null);

  const startEdit = (expense: Expense) => {
    setIsEditing(expense);
  };

  const expenseMaker = async (formData: {
    person: string;
    amount: string;
    category: ExpenseCategory | "";
  }) => {
    setError(null);
    setIsLoading(true);
    try {
      if (formData.category === "") {
        formData.category = "other";
      }
      if (
        formData.amount !== "" &&
        formData.person !== "" &&
        +formData.amount > 0
      ) {
        if (isEditing === null) {
          //1. insert data to db
          await createExpense(formData);
        } else {
          //1.1 if we have isEditing we are editing not creating !
          await updateExpense({ id: isEditing.id, ...formData });
          setIsEditing(null);
        }

        //2. get all expenses from db
        const expenses = await getExpenses();

        //3. set new expenses to state
        setExpenses(expenses.data);
      } else {
        throw new Error("please make sure person and amount are valid");
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
        setError(e.message);
      } else {
        setError("unknown error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const deleteHandler = async (id: number) => {
    setError(null);
    setIsLoading(true);
    try {
      await deleteExpense(id);
      const expenses = await getExpenses();
      setExpenses(expenses.data);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
        setError(e.message);
      } else {
        setError("unknown error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // 1. get expenses from db and set all expenses inside state
    const loadExpenses = async () => {
      setError(null);
      try {
        setIsLoading(true);
        const expenses = await getExpenses();
        setExpenses(expenses.data);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e);
          setError(e.message);
        } else {
          setError("unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    };
    loadExpenses();
  }, []);
  return (
    <>
      {isLoading && <IsLoading />}
      <header>
        <h1
          onClick={() => {
            // test
            console.log(isEditing);
          }}
        >
          Expense Tracker
        </h1>
        {error && <h3>{error}</h3>}
      </header>
      <main>
        <section>
          <h2>Expenses</h2>
          <ExpenseList
            onDelete={deleteHandler}
            expenses={expenses}
            isEditing={startEdit}
          />
          {isEditing && (
            <div>
              <p>Editing: {isEditing.person}</p>
              <button onClick={() => setIsEditing(null)}>Cancel</button>
            </div>
          )}
          <ExpenseForm
            key={isEditing ? isEditing.id : "new"}
            onSubmit={(e: {
              person: string;
              amount: string;
              category: ExpenseCategory | "";
            }) => expenseMaker(e)}
            isLoading={isLoading}
            editingExpense={isEditing}
          />
        </section>
        <section>
          <h2>Total</h2>
          <p>
            {totalCalculator(expenses) > 0 ? (
              <span>
                Total expense from all expenses : {totalCalculator(expenses)}$
              </span>
            ) : (
              "No Expenses yet."
            )}
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
