import { useState } from "react";
import axios from "axios";

function MockInterview() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);

  async function getQuestion() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/interview-question"
      );

      setQuestion(response.data.question);
      setResult(null);
      setAnswer("");
    } catch (error) {
      console.log(error);
      alert("Unable to fetch interview question.");
    }
  }

  async function submitAnswer() {
    if (answer === "") {
      alert("Please enter your answer.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/evaluate-answer",
        {
          answer: answer,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.log(error);
      alert("Unable to evaluate answer.");
    }
  }

  return (
    <div className="resume-page">

      <h1>🎤 AI Mock Interview</h1>

      <button onClick={getQuestion}>
        Start Interview
      </button>

      {question && (
        <div className="result-card">

          <h2>Interview Question</h2>

          <p>{question}</p>

          <textarea
            rows="6"
            placeholder="Type your answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <br />
          <br />

          <button onClick={submitAnswer}>
            Submit Answer
          </button>

        </div>
      )}

      {result && (
        <div className="result-card">

          <h2>Evaluation Result</h2>

          <p>
            <strong>Score:</strong> {result.score}/10
          </p>

          <p>
            <strong>Feedback:</strong> {result.feedback}
          </p>

        </div>
      )}

    </div>
  );
}

export default MockInterview;