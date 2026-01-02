import React, { useState, FormEvent } from "react";
import { register } from "../api";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent)  {
    e.preventDefault();
    try {
      const res = await register(username, email, password);
      if (res.ok) {
        setMessage("✅ Registered successfully!");
      } else {
        const error = await res.text();
        setMessage(`❌ ${error}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Network error occurred.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
