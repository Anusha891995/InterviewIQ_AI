import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>InterviewIQ AI</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/mock-interview">Mock Interview</Link>
        <Link to="/coding">Coding Arena</Link>
        <Link to="/career-coach">Career Coach</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/notifications">Notifications</Link>
      </div>
    </nav>
  );
}

export default Navbar;