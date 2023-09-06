import { useEffect, useState } from "react";

import ExpenseDetails from "../components/ExpenseDetails";

const HomePage = () => {
  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch("http://localhost:8080/expenses");
      const json = await response.json();

      if (response.ok) {
        setExpenses(json);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="home">
      <button className="btn btn-warning">Add Expense</button>
      <div className="expenses">
        {expenses &&
          expenses.map((expense) => (
            <ExpenseDetails key={expense.id} expense={expense} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
