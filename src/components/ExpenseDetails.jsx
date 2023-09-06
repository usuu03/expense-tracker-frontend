const ExpenseDetails = ({ expense }) => {
  return (
    <div className="expense-details">
      <div className="heading">
        <h4>
          {expense.title} - {expense.category}
        </h4>
      </div>

      <strong>
        <h6>£{expense.amount}</h6>
      </strong>
      <p>{expense.date}</p>
    </div>
  );
};

export default ExpenseDetails;
