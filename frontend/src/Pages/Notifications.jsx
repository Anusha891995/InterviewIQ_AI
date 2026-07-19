function Notifications() {
  const notifications = [
    "✅ Resume analyzed successfully.",
    "🎤 Mock interview completed.",
    "💻 Coding challenge submitted.",
    "🤖 Career advice generated.",
    "🏆 Dashboard updated."
  ];

  return (
    <div className="resume-page">

      <h1>🔔 Notifications</h1>

      {notifications.map((item, index) => (
        <div key={index} className="result-card">
          <p>{item}</p>
        </div>
      ))}

    </div>
  );
}

export default Notifications;