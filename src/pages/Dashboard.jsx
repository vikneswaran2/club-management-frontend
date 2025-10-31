import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user") || "guest";
  const summary = { members: 3, events: 2, tasks: 2, resources: 1 };

  const upcomingEvents = [
    { title: "Orientation", date: "2025-12-01", desc: "Freshers orientation" },
    { title: "Tree Planting", date: "2025-11-20", desc: "Plant trees in campus" },
  ];

  return (
    <div className="container" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Welcome, {user}</h2>

      {/* 🔹 Quick Navigation */}
      <h3>Quick Navigation</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button onClick={() => navigate("/members")}>👥 Members</button>
        <button onClick={() => navigate("/events")}>🎉 Events</button>
        <button onClick={() => navigate("/tasks")}>📝 Tasks</button>
        <button onClick={() => navigate("/gallery")}>🖼️ Gallery</button>
        <button onClick={() => navigate("/analytics")}>📊 Analytics</button>
        <button onClick={() => navigate("/announcements")}>📢 Announcements</button>
        <button onClick={() => navigate("/settings")}>⚙️ Settings</button>
        <button onClick={() => alert("Logging out...")}>🚪 Logout</button>
      </div>

      {/* 🔹 Summary Section */}
      <h3>Summary</h3>
      <p>
        Members: {summary.members} • Events: {summary.events} • Tasks:{" "}
        {summary.tasks} • Resources: {summary.resources}
      </p>

      {/* 🔹 Upcoming Events */}
      <h3>Upcoming Events</h3>
      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}
      >
        <thead style={{ background: "#0078ff", color: "white" }}>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {upcomingEvents.map((e, i) => (
            <tr key={i}>
              <td>{e.title}</td>
              <td>{e.date}</td>
              <td>{e.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
