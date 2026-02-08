import { useMemo, useState } from "react";

const USERS = [
     "Ali",
  "Reza",
  "Sarah",
  "Mohammad",
  "John",
  "Jane"
]

export default function SearchApp() {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  const filteredUsers = useMemo(()=>{
    console.log("🧮 filtering users...");
    return  USERS.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  );
  },[search])

  console.log("rendering....")

  return (
    <div style={{ background: dark ? "#222" : "#fff" }}>
      <h2>Search Users</h2>

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <button onClick={() => setDark(d => !d)}>
        Toggle Theme
      </button>

      <ul>
        {filteredUsers.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}