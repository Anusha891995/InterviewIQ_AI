import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    console.log("Login button clicked");

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

    setError("");

    try {
      console.log("Sending request...");
      const response = await axios.post(
        "http://127.0.0.1:8000/login",
        {
          name: "",
          email: email,
          password: password,
        }
      );
      console.log("Response:", response.data);

      if (response.data.message === "Login Successful") {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        alert("Login Successful!");
        console.log("Navigating to dashboard...");

        navigate("/dashboard");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setError("Unable to connect to the server.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>Login to continue your InterviewIQ AI journey.</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>

        </form>

        <p>
          Don't have an account?
          <Link to="/signup"> Signup</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;