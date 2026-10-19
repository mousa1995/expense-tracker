export const getExpenses = async () => {
  // GET PART!
  try {
    const URL = "http://127.0.0.1:8000/api/expenses";
    // 1. fetch data from url and get a promise
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("expenses did not fetch correctly.");
    }
    // if code reaches here the response is ok!
    return await response.json();
  } catch (e) {
    throw e;
  }
};

//POST PART!
export const createExpense = async ({
  person,
  amount,
  category,
}: {
  person: string;
  amount: string;
  category: string;
}) => {
  const URL = "http://127.0.0.1:8000/api/expenses";
  const data = JSON.stringify({ person, amount, category });

  try {
    const response = await fetch(URL, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      if (response.status === 422) {
        const data = await response.json();
        throw new Error(JSON.stringify(data));
      } else {
        throw new Error("post from createExpense failed !");
      }
    }

    return await response.json();
  } catch (e) {
    throw e;
  }
};

//DELETE PART
export const deleteExpense = async (id: number) => {
  try {
    //1. fetch a delete using id we have
    const URL = `http://127.0.0.1:8000/api/expenses/${id}`;
    const response = await fetch(URL, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`deletion of expense with id:${id} failed.`);
    }
  } catch (e) {
    throw e;
  }
};

// PUT PART

export const updateExpense = async ({
  person,
  amount,
  category,
  id,
}: {
  person: string;
  amount: string;
  category: string;
  id: number;
}) => {
  try {
    const URL = `http://127.0.0.1:8000/api/expenses/${id}`;
    const response = await fetch(URL, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({ person, amount, category }),
    });
    if (!response.ok) {
      if (response.status === 422) {
        const data = await response.json();
        throw new Error(JSON.stringify(data));
      } else {
        throw new Error(`editing of expense with id:${id} failed`);
      }
    }
  } catch (e) {
    throw e;
  }
};
