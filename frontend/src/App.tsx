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
} from "./services/expenseAPI";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

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
        //1. insert data to db
        await createExpense(formData);

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
            console.log("test");
          }}
        >
          Expense Tracker
        </h1>
        {error && <h3>{error}</h3>}
      </header>
      <main>
        <section>
          <h2>Expenses</h2>
          <ExpenseList onDelete={deleteHandler} expenses={expenses} />
          <ExpenseForm
            onSubmit={(e: {
              person: string;
              amount: string;
              category: ExpenseCategory | "";
            }) => expenseMaker(e)}
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
