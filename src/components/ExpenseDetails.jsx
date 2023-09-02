const ExpenseDetails = ({ expense }) => {
  return (
    <div className="expense-details">
      <h4>{expense.title}</h4>

      <h7>{expense.category}</h7>

      <strong>
        <p>£{expense.amount}</p>
      </strong>
      <p>{expense.date}</p>
    </div>
  );
};

export default ExpenseDetails;
