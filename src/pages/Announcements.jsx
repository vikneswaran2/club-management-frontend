import React from "react";

export default function Announcements() {
  const announcements = [
    { title: "Orientation", desc: "Freshers event next week!", date: "2025-12-01" },
    { title: "Tree Planting", desc: "Meet at 9 AM in front gate", date: "2025-11-20" },
  ];

  return (
    <div className="container">
      <h2>💬 Announcements</h2>
      {announcements.map((a, i) => (
        <div key={i} style={{
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9"
        }}>
          <h3>{a.title}</h3>
          <p>{a.desc}</p>
          <small>{a.date}</small>
        </div>
      ))}
    </div>
  );
}
