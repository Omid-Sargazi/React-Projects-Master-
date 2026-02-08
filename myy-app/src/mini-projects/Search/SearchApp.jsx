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

  const filteredUsers = useMemo(()=>{
    return  USERS.filter(user =>
    user.toLowerCase().includes(search.toLowerCase())
  );
  },[search])

  console.log("rendering....")

  return (
    <div>
      <h2>Search Users</h2>

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}