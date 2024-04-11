import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../css/Budget.css";

const Budget = () => {
  const { budget, currency, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    const upperLimit = 20000;
    const editedBudget = Number(event.target.value);

    if (editedBudget <= upperLimit && upperLimit >= totalExpenses) {
      setNewBudget(Number(editedBudget));
    } else if (editedBudget <= expenses) {
      alert("Budget exceeds Total Expense");
    } else if (editedBudget > upperLimit) {
      alert("Budget cannot exceeds " + currency + "20,000");
    } else {
      alert("Not sure what happened");
    }
  };

  return (
    <div className="alert alert-secondary input-box">
      Budget: <b>{currency}</b>
      <input
        type="number"
        step="10"
        value={newBudget}
        min="0"
        max="20000"
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
