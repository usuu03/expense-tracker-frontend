import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  const onDelete = (expenseId) => {
    // Create a new array of expenses without the one to be deleted
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== expenseId
    );

    // Update the expenses state with the new array
    setExpenses(updatedExpenses);
  };

  return (
    <div className="home">
      {/* <button className="btn btn-warning">Add Expense</button> */}
      <Link to="/add-expense" className="btn btn-warning">
        Add Expense
      </Link>
      <div className="expenses">
        {expenses &&
          expenses.map((expense) => (
            <ExpenseDetails
              key={expense.id}
              expense={expense}
              onDelete={() => onDelete(expense.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
