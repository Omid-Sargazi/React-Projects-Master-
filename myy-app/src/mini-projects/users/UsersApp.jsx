import { useEffect, useMemo, useState } from "react";
import UserCard from "./UserCard";

export default function UsersApp() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=10")
        .then(res=>res.json())
        .then(data=>{
            setUsers(data.results);
            setLoading(false);
        })
    },[]);

    const filteredUsers = useMemo(() => {
    return users.filter(user =>
      `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [users, search]);

  




  return (
    <div>
      <h2>Users Mini Project</h2>

      <input
        placeholder="Search user..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div>
          {filteredUsers.map(user => (
            <UserCard key={user.login.uuid} user={user}>
              <p>Email: {user.email}</p>
            </UserCard>
          ))}
        </div>
      )}
    </div>
  );
}
