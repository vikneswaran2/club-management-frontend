import React, { useState } from "react";

export default function Members() {
  const [members, setMembers] = useState([
    { name: "Administrator", email: "admin@club.org", role: "admin" },
    { name: "Coordinator", email: "coord@club.org", role: "coordinator" },
    { name: "Member One", email: "m1@club.org", role: "member" },
  ]);

  const [newMember, setNewMember] = useState({ name: "", email: "", role: "" });

  const handleAdd = () => {
    if (!newMember.name || !newMember.email || !newMember.role)
      return alert("Fill all fields");
    setMembers([...members, newMember]);
    setNewMember({ name: "", email: "", role: "" });
  };

  const handleDelete = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

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
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i}>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>
                <span
                  style={{
                    color:
                      m.role === "admin"
                        ? "blue"
                        : m.role === "coordinator"
                        ? "green"
                        : "gray",
                    fontWeight: "bold",
                  }}
                >
                  {m.role}
                </span>
              </td>
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
