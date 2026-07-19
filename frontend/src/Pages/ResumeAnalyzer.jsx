import { useState } from "react";
import axios from "axios";

function ResumeAnalyzer() {
  const [resume, setResume] = useState(null);
  const [result, setResult] = useState(null);

  function handleFileChange(event) {
    setResume(event.target.files[0]);
  }

  async function handleAnalyze() {

    if (!resume) {
      alert("Please select a resume first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", resume);

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        formData
      );

      setResult(response.data);

    } catch (error) {
      console.log(error);
      alert("Unable to connect to FastAPI.");
    }
  }

  return (
    <div className="resume-page">

      <h1>📄 Resume Analyzer</h1>

      <p>Upload your resume and get AI-powered feedback.</p>

      <div className="upload-card">

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        <br /><br />

        <button onClick={handleAnalyze}>
          Analyze Resume
        </button>

        {result && (

          <div className="result-card">

            <h2>📊 Resume Analysis</h2>

            <hr />

            <p>
              <strong>📄 File Name:</strong> {result.filename}
            </p>

            <p>
              <strong>🤖 Status:</strong> {result.message}
            </p>

            <p>
              <strong>⭐ ATS Score:</strong> {result.ats_score}/100
            </p>

            <progress
              value={result.ats_score}
              max="100"
              style={{ width: "100%", height: "20px" }}
            />

            <h3>💡 Suggestions</h3>

            <ul>
              {result.suggestions.map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>

          </div>

        )}

      </div>

    </div>
  );
}

export default ResumeAnalyzer;