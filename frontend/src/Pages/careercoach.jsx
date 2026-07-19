import { useState } from "react";

function CareerCoach() {
  const [goal, setGoal] = useState("");
  const [advice, setAdvice] = useState("");

  function getAdvice() {
    if (goal.trim() === "") {
      alert("Please enter your career goal.");
      return;
    }

    if (goal.toLowerCase().includes("software")) {
      setAdvice(
        "Learn DSA, React, FastAPI, SQL, build projects, and practice interviews."
      );
    } else if (goal.toLowerCase().includes("data")) {
      setAdvice(
        "Learn Python, Pandas, NumPy, Machine Learning, and SQL."
      );
    } else {
      setAdvice(
        "Improve programming skills, communication, and build strong projects."
      );
    }
  }

  return (
    <div className="resume-page">

      <h1>🤖 AI Career Coach</h1>

      <input
        type="text"
        placeholder="Enter your career goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <br /><br />

      <button onClick={getAdvice}>
        Get Career Advice
      </button>

      {advice && (
        <div className="result-card">
          <h2>Career Advice</h2>
          <p>{advice}</p>
        </div>
      )}

    </div>
  );
}

export default CareerCoach;