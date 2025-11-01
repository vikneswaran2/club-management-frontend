import React, { useEffect, useState } from "react";
import { getMembers, addMember, deleteMember } from "../api";

export default function Members() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    try {
      const data = await getMembers();
      setMembers(data.members || []);
    } catch {
      alert("Failed to load members");
    }
  }

  async function handleAdd() {
    if (!newMember.name || !newMember.email || !newMember.role) {
      alert("Fill all fields");
      return;
    }
    try {
      await addMember(newMember);
      setNewMember({ name: "", email: "", role: "" });
      fetchMembers();
    } catch {
      alert("Failed to add member");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteMember(id);
      fetchMembers();
    } catch {
      alert("Failed to delete member");
    }
  }

  return (
    <div className="container">
      <h2>👥 Members</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          className="input-field"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />
        <input
          className="input-field"
          placeholder="Email"
          value={newMember.email}
          onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
        />
        <select
          className="input-field"
          value={newMember.role}
          onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="coordinator">Coordinator</option>
          <option value="member">Member</option>
        </select>
        <button onClick={handleAdd}>Add Member</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id || m.email}>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td style={{fontWeight: "bold", color:
                m.role === "admin" ? "blue" :
                m.role === "coordinator" ? "green" : "gray"
              }}>{m.role}</td>
              <td>
                <button onClick={() => handleDelete(m.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
