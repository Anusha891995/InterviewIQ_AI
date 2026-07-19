import "./App.css";
import { Routes, Route } from "react-router-dom";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Navbar from "./components/Navbar";
import CodingArena from "./pages/CodingArena";
import CareerCoach from "./pages/CareerCoach";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import MockInterview from "./pages/MockInterview";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume" element={<ResumeAnalyzer />} />
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/coding" element={<CodingArena />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/career-coach" element={<CareerCoach />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>

    </div>
  );
}

export default App;