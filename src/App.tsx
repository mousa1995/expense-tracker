import "./App.css";
import { ExpenseList } from "./components/ExpenseList";
import { expenses } from "./data/expenses";

function App() {
  return (
    <>
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <main>
        <section>
          <h2>Expenses</h2>
          <ExpenseList expenses={expenses} />
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
