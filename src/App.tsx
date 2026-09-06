import { useEffect, useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { expenses as initialExpenses } from "./data/expenses";
import type { Expense } from "./types/Expense";
import { idGenerator } from "./utils/idGenerator";
import type { ExpenseCategory } from "./types/ExpenseCategory";
import { totalCalculator } from "./utils/totalCalculator";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const expenseMaker = (formData: {
    person: string;
    amount: string;
    category: ExpenseCategory | "";
  }) => {
    const expenseID = idGenerator(expenses);
    if (formData.category === "") {
      formData.category = "other";
    }
    if (formData.amount !== "" && formData.person !== "") {
      setExpenses([
        ...expenses,
        {
          person: formData.person,
          amount: Number(formData.amount),
          category: formData.category,
          id: expenseID,
        } as Expense,
      ]);
    }
  };

  const deleteHandler = (id: number) => {
    const expenseWithDeletedItem = expenses.filter((expense) => {
      return expense.id !== id;
    });
    setExpenses([...expenseWithDeletedItem]);
  };

  useEffect(() => {
    try {
      const data = localStorage.getItem("expenses");
      if (data === null) {
        setExpenses([...initialExpenses]);
        localStorage.setItem("expenses", JSON.stringify(initialExpenses));
        return;
      }
      const parsedExpenses = JSON.parse(data as string);

      if (Array.isArray(parsedExpenses) && parsedExpenses.length > 0) {
        setExpenses([...parsedExpenses]);
        return;
      }

      //edge case => parsedExpense == "[]"
      if (Array.isArray(parsedExpenses) && parsedExpenses.length === 0) {
        setExpenses([...initialExpenses]);
        return;
      }
      console.log("Invalid data");
      return;
    } catch {
      console.error("invalid JSON");
    }
  }, []);

  return (
    <>
      <header>
        <h1
          onClick={() => {
            console.log(expenses);
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
