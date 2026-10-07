export const getExpenses = async () => {
    // GET PART! 
    try {
        const URL = "http://127.0.0.1:8000/api/expenses";
        // 1. fetch data from url and get a promise
        const response = await fetch(URL);

        if(!(response.ok)) {
            throw new Error("expenses did not fetch correctly.");
        }
        // if code reaches here the response is ok!
        return (response).json();

    }catch(e) {
        console.error(e);
    }
}

