import { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <div className="dashboard-page">

      <h1>📊 InterviewIQ AI Dashboard</h1>

      <h2>
        Welcome {user ? user.name : "Student"} 👋
      </h2>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>📄 Resume Score</h2>
          <h3>82%</h3>
          <p>Your resume is ATS-friendly.</p>
        </div>

        <div className="dashboard-card">
          <h2>🎤 Mock Interview</h2>
          <h3>9 / 10</h3>
          <p>Excellent communication skills.</p>
        </div>

        <div className="dashboard-card">
          <h2>💻 Coding Problems</h2>
          <h3>15</h3>
          <p>Problems solved successfully.</p>
        </div>

        <div className="dashboard-card">
          <h2>🤖 AI Career Coach</h2>
          <h3>5 Sessions</h3>
          <p>Career guidance completed.</p>
        </div>

        <div className="dashboard-card">
          <h2>📈 Placement Readiness</h2>
          <h3>85%</h3>

          <progress
            value="85"
            max="100"
            style={{ width: "100%", height: "18px" }}
          ></progress>

          <p>You are ready for placements.</p>
        </div>

        <div className="dashboard-card">
          <h2>🏆 Overall Status</h2>
          <h3>Excellent ⭐</h3>
          <p>Keep practicing every day.</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;