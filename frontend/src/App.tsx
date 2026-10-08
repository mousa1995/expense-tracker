import { useEffect, useState } from "react";
import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import type { Expense } from "./types/Expense";
import { idGenerator } from "./utils/idGenerator";
import type { ExpenseCategory } from "./types/ExpenseCategory";
import { totalCalculator } from "./utils/totalCalculator";
import { createExpense, getExpenses } from "./services/expenseAPI";

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
            createExpense({
              amount: "3000",
              person: "mousa",
              category: "food",
            });
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
