import { useEffect, useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import type { Expense } from "./types/Expense";
import type { ExpenseCategory } from "./types/ExpenseCategory";
import { totalCalculator } from "./utils/totalCalculator";
import { createExpense, getExpenses } from "./services/expenseAPI";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const expenseMaker = async (formData: {
    person: string;
    amount: string;
    category: ExpenseCategory | "";
  }) => {
    if (formData.category === "") {
      formData.category = "other";
    }
    if (formData.amount !== "" && formData.person !== "") {
      //1. insert data to db
      await createExpense(formData);

      //2. get all expenses from db
      const expenses = await getExpenses();

      //3. set new expenses to state
      setExpenses(expenses.data);
    }
  };

  const deleteHandler = (id: number) => {
    const expenseWithDeletedItem = expenses.filter((expense) => {
      return expense.id !== id;
    });
    setExpenses([...expenseWithDeletedItem]);
  };

  useEffect(() => {
    // 1. get expenses from db and set all expenses inside state
    const loadExpenses = async () => {
      const expenses = await getExpenses();
      setExpenses(expenses.data);
    };
    loadExpenses();
  }, []);
  return (
    <>
      <header>
        <h1
          onClick={() => {
            // test
            console.log("this is for test");
          }}
        >
          Expense Tracker
        </h1>
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
