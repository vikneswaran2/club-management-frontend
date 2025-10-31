import React, { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@club.org");
  const [notify, setNotify] = useState(true);

  return (
    <div className="container">
      <h2>⚙️ Settings / Profile</h2>
      <label>Name</label>
      <input
        className="input-field"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={notify}
            onChange={() => setNotify(!notify)}
          />
          Receive Email Notifications
        </label>
      </div>
      <button>Save Changes</button>
    </div>
  );
}
