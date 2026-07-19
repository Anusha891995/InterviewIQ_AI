import { useState } from "react";
import axios from "axios";

function CodingArena() {
  const [language, setLanguage] = useState("Python");
  const [question, setQuestion] = useState(null);
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);

  async function getQuestion() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/coding-question"
      );

      setQuestion(response.data);
      setCode("");
      setResult(null);

    } catch (error) {
      console.log(error);
      alert("Unable to fetch coding question.");
    }
  }

  async function submitCode() {

    if (code.trim() === "") {
      alert("Please write some code.");
      return;
    }

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/submit-code",
        {
          code: code,
        }
      );

      setResult(response.data);

    } catch (error) {
      console.log(error);
      alert("Unable to submit code.");
    }
  }

  return (
    <div className="coding-page">

      <h1>💻 Coding Arena</h1>

      <button onClick={getQuestion}>
        Get Coding Question
      </button>

      <br /><br />

      {question && (
        <div className="output-card">

          <h2>{question.title}</h2>

          <p>{question.description}</p>

        </div>
      )}

      <br />

      <label>Select Language</label>

      <br /><br />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option>Python</option>
        <option>Java</option>
        <option>C++</option>
      </select>

      <br /><br />

      <textarea
        rows="12"
        cols="80"
        placeholder="Write your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br /><br />

      <button onClick={submitCode}>
        Submit Code
      </button>

      {result && (
        <div className="output-card">

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

export default CodingArena;