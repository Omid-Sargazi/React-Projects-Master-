import React, { useState, FormEvent } from "react";
import { login } from "../api";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const res = await login(username, password);
      if (res.ok) {
        setMessage("✅ Logged in successfully!");
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
