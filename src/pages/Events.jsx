import React, { useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([
    { title: "Orientation", date: "2025-12-01", tasks: 1, self: "Yes" },
    { title: "Tree Planting", date: "2025-11-20", tasks: 1, self: "No" },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    tasks: 0,
    self: "No",
  });

  const handleAdd = () => {
    if (!newEvent.title || !newEvent.date) return alert("Fill event details!");
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", tasks: 0, self: "No" });
  };

  const handleDelete = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>🎉 Events</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          className="input-field"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          className="input-field"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <select
          className="input-field"
          value={newEvent.self}
          onChange={(e) => setNewEvent({ ...newEvent, self: e.target.value })}
        >
          <option value="Yes">Self Attendance: Yes</option>
          <option value="No">Self Attendance: No</option>
        </select>
        <button onClick={handleAdd}>Add Event</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Tasks</th>
            <th>Self-Attendance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => (
            <tr key={i}>
              <td>{e.title}</td>
              <td>{e.date}</td>
              <td>{e.tasks}</td>
              <td>{e.self}</td>
              <td>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
