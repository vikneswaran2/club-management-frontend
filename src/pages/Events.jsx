import React, { useEffect, useState } from "react";
import { getEvents, addEvent, deleteEvent } from "../api";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    tasks: 0,
    self: "No",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const data = await getEvents();
      setEvents(data.events || []);
    } catch {
      alert("Failed to load events");
    }
  }

  async function handleAdd() {
    if (!newEvent.title || !newEvent.date) {
      alert("Fill event details!");
      return;
    }
    try {
      await addEvent(newEvent);
      setNewEvent({ title: "", date: "", tasks: 0, self: "No" });
      fetchEvents();
    } catch {
      alert("Failed to add event");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteEvent(id);
      fetchEvents();
    } catch {
      alert("Failed to delete event");
    }
  }

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
            <th>Title</th><th>Date</th><th>Tasks</th><th>Self-Attendance</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e) => (
            <tr key={e.id || e.title}>
              <td>{e.title}</td>
              <td>{e.date}</td>
              <td>{e.tasks}</td>
              <td>{e.self}</td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
