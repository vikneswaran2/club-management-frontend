import React, { useEffect, useState } from "react";
import { getAnnouncements } from "../api";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const data = await getAnnouncements();
        setAnnouncements(data.announcements || []);
      } catch {
        alert("Failed to load announcements");
      }
    }
    fetchAnnouncements();
  }, []);

  return (
    <div className="container">
      <h2>💬 Announcements</h2>
      {announcements.map((a, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>{a.title}</h3>
          <p>{a.desc}</p>
          <small>{a.date}</small>
        </div>
      ))}
    </div>
  );
}
