import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const creds = {
    admin: "admin123",
    coord: "coord123",
    member: "member123",
  };

  const handleLogin = () => {
    if (creds[id] === password) {
      sessionStorage.setItem("user", id);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      height: "100vh", background: "linear-gradient(120deg, #0078ff, #00c6ff)"
    }}>
      <div className="container" style={{ maxWidth: "400px", textAlign: "center" }}>
        <h2>Club Login (Demo)</h2>
        <input className="input-field" placeholder="ID (admin / coord / member)" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="password" className="input-field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Sign In</button>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          Demo Credentials: <br />
          admin / coord / member <br />
          Passwords: admin123 / coord123 / member123
        </p>
      </div>
    </div>
  );
}
