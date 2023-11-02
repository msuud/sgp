import React, { useState } from "react";
import "./pack.css";

function RecommendationForm({ setBudget }) {
  const [userBudget, setUserBudget] = useState("");

  const handleRecommendation = () => {
    const parsedBudget = parseFloat(userBudget);
    if (!isNaN(parsedBudget)) {
      setBudget(parsedBudget);
    }
  };

  return (
    <div className="budget-form">
      <label htmlFor="budget">Enter Your Budget (Rs):</label>
      <input
        type="number"
        id="budget"
        placeholder="3000-6000"
        value={userBudget}
        onChange={(e) => setUserBudget(e.target.value)}
      />
      <button onClick={handleRecommendation}>Recommend</button>
    </div>
  );
}

export default RecommendationForm;
