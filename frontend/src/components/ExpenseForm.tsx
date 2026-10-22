import React, { useState } from "react";

import {
  expenseCategories,
  type ExpenseCategory,
} from "../types/ExpenseCategory";
import type { Expense } from "../types/Expense";

interface ExpenseFormProps {
  onSubmit: (e: {
    person: string;
    amount: string;
    category: ExpenseCategory | "";
  }) => void;
  isLoading: boolean;
  editingExpense: null | Expense;
}

export const ExpenseForm = ({
  onSubmit,
  isLoading,
  editingExpense,
}: ExpenseFormProps) => {
  const [form, setForm] = useState<{
    person: string;
    amount: string;
    category: ExpenseCategory | "";
  }>({
    person: editingExpense?.person ?? "",
    amount: editingExpense ? String(editingExpense.amount) : "",
    category: editingExpense?.category ?? "",
  });

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(form);
    if (form.amount !== "" && form.person !== "") {
      setForm({ person: "", amount: "", category: "" });
    }
  };

  const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setForm({ ...form, category: "other" });
      return;
    }
    if (
      e.target.value !== "" &&
      expenseCategories.includes(e.target.value as ExpenseCategory)
    ) {
      setForm({ ...form, category: e.target.value as ExpenseCategory });
      return;
    }
    throw new Error("Someting is wrong in categoryHandler");
  };

  return (
    <>
      <form onSubmit={submitHandler} className="expense-form">
        <label className="field">
          Person
          <input
            value={form.person}
            name="person"
            type="text"
            onChange={(e) => {
              setForm({ ...form, person: e.target.value });
            }}
          />
          {form.person === "" ? <span>Please fill person's name </span> : ""}
        </label>
        <label className="field">
          amount
          <input
            value={form.amount}
            name="amount"
            type="number"
            onChange={(e) => {
              setForm({ ...form, amount: e.target.value });
            }}
          />
          {form.amount === "" ? <span>Please fill amount spent </span> : ""}
        </label>
        <label className="field">
          category
          <select
            name="category"
            onChange={categoryHandler}
            value={form.category}
          >
            <option value={""}></option>
            {expenseCategories.map((el) => {
              return (
                <option value={el} key={`${el}`}>
                  {el}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit" disabled={isLoading}>
          {editingExpense ? "Submit Edit" : "Add expense"}
        </button>
      </form>
    </>
  );
};
