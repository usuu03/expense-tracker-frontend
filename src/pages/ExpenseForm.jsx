import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const expense = { title, category, amount };

    const response = await fetch("http://localhost:8080/expenses", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle("");
      setCategory("");
      setAmount("");
      setError(null);
      console.log("New Expense Added");

      // Redirect to the homepage
      navigate("/");
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="expense-title">
          <label htmlFor="">Expense Name</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="expense-category">
          <label htmlFor="">Expense Category</label>
          <select
            name=""
            id=""
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {/* ...options */}
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Clothing">Clothing</option>
            <option value="Housing">Housing & Utilities</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Travel">Travel</option>
            <option value="Food">Taxes</option>
            <option value="Salary">Income - Salary</option>
            <option value="Salary">Income - Other</option>
          </select>
        </div>

        <div className="expense-amount">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
