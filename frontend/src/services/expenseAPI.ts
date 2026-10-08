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
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

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
      throw new Error("post from createExpense failed !");
    }

    return response.json();
  } catch (e) {
    console.error(e);
  }
};
