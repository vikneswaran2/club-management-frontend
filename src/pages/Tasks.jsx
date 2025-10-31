import React, { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { title: "Prepare slides", event: "Orientation", assignee: "Coordinator", status: "open" },
    { title: "Bring saplings", event: "Tree Planting", assignee: "Member One", status: "open" },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    event: "",
    assignee: "",
    status: "open",
  });

  const handleAdd = () => {
    if (!newTask.title || !newTask.event || !newTask.assignee)
      return alert("Fill all fields!");
    setTasks([...tasks, newTask]);
    setNewTask({ title: "", event: "", assignee: "", status: "open" });
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>🧾 Tasks</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          className="input-field"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          className="input-field"
          placeholder="Event"
          value={newTask.event}
          onChange={(e) => setNewTask({ ...newTask, event: e.target.value })}
        />
        <input
          className="input-field"
          placeholder="Assignee"
          value={newTask.assignee}
          onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Event</th>
            <th>Assignee</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, i) => (
            <tr key={i}>
              <td>{t.title}</td>
              <td>{t.event}</td>
              <td>{t.assignee}</td>
              <td>{t.status}</td>
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
