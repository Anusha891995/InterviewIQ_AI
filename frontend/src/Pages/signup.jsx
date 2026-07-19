import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSignup(event) {
    event.preventDefault();

    if (name === "") {
      setError("Please enter your name.");
      return;
    }

    if (email === "") {
      setError("Please enter your email.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (password === "") {
      setError("Please enter your password.");
      return;
    }

    if (confirmPassword === "") {
      setError("Please confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );

      if (response.data.message === "Signup Successful") {
        alert("Signup Successful!");

        navigate("/login");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Unable to connect to the server.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Create Account</h1>

        <p>Join InterviewIQ AI today.</p>

        <form onSubmit={handleSignup}>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            Create Account
          </button>

        </form>

      </div>
    </div>
  );
}

export default Signup;