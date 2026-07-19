import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <div className="resume-page">

      <h1>👤 My Profile</h1>

      {user ? (
        <div className="result-card">

          <h2>User Information</h2>

          <p><strong>ID:</strong> {user.id}</p>

          <p><strong>Name:</strong> {user.name}</p>

          <p><strong>Email:</strong> {user.email}</p>

        </div>
      ) : (
        <h2>No user is logged in.</h2>
      )}

    </div>
  );
}

export default Profile;