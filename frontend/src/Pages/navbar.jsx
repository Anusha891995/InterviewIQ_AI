import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    alert("Logged Out Successfully");
    navigate("/login");
  }

  return (
    <nav className="navbar">

      <h2>InterviewIQ AI</h2>

      <div>

        <Link to="/">Home</Link>{" | "}

        <Link to="/dashboard">Dashboard</Link>{" | "}

        <Link to="/resume">Resume Analyzer</Link>{" | "}

        <Link to="/mock-interview">Mock Interview</Link>{" | "}

        <Link to="/coding">Coding Arena</Link>{" | "}

        <Link to="/career-coach">Career Coach</Link>{" | "}

        <Link to="/profile">Profile</Link>{" | "}

        <Link to="/notifications">Notifications</Link>{" | "}

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;