import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMembers, getEvents, getTasks } from "../api";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user") || "guest";

  const [summary, setSummary] = useState({ members: 0, events: 0, tasks: 0, resources: 1 });
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const [membersData, eventsData, tasksData] = await Promise.all([
          getMembers(),
          getEvents(),
          getTasks(),
        ]);
        setSummary({
          members: (membersData.members || []).length,
          events: (eventsData.events || []).length,
          tasks: (tasksData.tasks || []).length,
          resources: 1,
        });
        setUpcomingEvents(eventsData.events || []);
      } catch {
        alert("Failed to load dashboard data");
      }
    }
    fetchSummary();
  }, []);

  return (
    <div className="container" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Welcome, {user}</h2>

      <h3>Quick Navigation</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => navigate("/members")}>👥 Members</button>
        <button onClick={() => navigate("/events")}>🎉 Events</button>
        <button onClick={() => navigate("/tasks")}>📝 Tasks</button>
        <button onClick={() => navigate("/gallery")}>🖼️ Gallery</button>
        <button onClick={() => navigate("/analytics")}>📊 Analytics</button>
        <button onClick={() => navigate("/announcements")}>📢 Announcements</button>
        <button onClick={() => navigate("/settings")}>⚙️ Settings</button>
        <button onClick={() => alert("Logging out...")}>🚪 Logout</button>
      </div>

      <h3>Summary</h3>
      <p>
        Members: {summary.members} • Events: {summary.events} • Tasks: {summary.tasks} • Resources: {summary.resources}
      </p>

      <h3>Upcoming Events</h3>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}>
        <thead style={{ background: "#0078ff", color: "white" }}>
          <tr>
            <th>Title</th><th>Date</th><th>Description</th>
          </tr>
        </thead>
        <tbody>
          {upcomingEvents.map((e) => (
            <tr key={e.id || e.title}>
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
