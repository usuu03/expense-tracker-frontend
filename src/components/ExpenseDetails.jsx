const ExpenseDetails = ({ expense, onDelete }) => {
  const handleDeleteClick = async () => {
    try {
      // Make an HTTP DELETE request to delete the expense
      const response = await fetch(
        `http://localhost:8080/expenses/${expense.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // If the delete request is successful, call the onDelete function
        onDelete(expense.id);
        console.log("Expense deleted successfully");
      } else {
        // Handle the error if the delete request fails
        console.error("Failed to delete expense");
      }
    } catch (error) {
      console.error("An error occurred while deleting expense", error);
    }
  };
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

      <button onClick={handleDeleteClick} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default ExpenseDetails;
