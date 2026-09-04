import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { expenses as initialExpenses } from "./data/expenses";
import type { Expense } from "./types/Expense";
import { idGenerator } from "./utils/idGenerator";
import type { ExpenseCategory } from "./types/ExpenseCategory";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([...initialExpenses]);

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

  return (
    <>
      <header>
        <h1 onClick={() => console.log(expenses)}>Expense Tracker</h1>
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
          <p>$0</p>
        </section>
        <section>
          <p>No Expenses yet.</p>
        </section>
      </main>
    </>
  );
}

export default App;
