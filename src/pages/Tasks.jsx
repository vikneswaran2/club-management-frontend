import React, { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask } from "../api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    event: "",
    assignee: "",
    status: "open",
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const data = await getTasks();
      setTasks(data.tasks || []);
    } catch {
      alert("Failed to load tasks");
    }
  }

  async function handleAdd() {
    if (!newTask.title || !newTask.event || !newTask.assignee) {
      alert("Fill all fields!");
      return;
    }
    try {
      await addTask(newTask);
      setNewTask({ title: "", event: "", assignee: "", status: "open" });
      fetchTasks();
    } catch {
      alert("Failed to add task");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch {
      alert("Failed to delete task");
    }
  }

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
            <th>Title</th><th>Event</th><th>Assignee</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id || t.title}>
              <td>{t.title}</td>
              <td>{t.event}</td>
              <td>{t.assignee}</td>
              <td>{t.status}</td>
              <td>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
