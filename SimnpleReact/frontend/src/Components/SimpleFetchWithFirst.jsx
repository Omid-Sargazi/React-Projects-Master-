import { useState, useEffect } from "react";

export default function SimpleFetchWithFirst()
{

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(data=>{
            setUsers(data);
            setLoading(false);
        }).catch(err=>{
            setError("Falid to load users");
            setLoading(false);
        })
    },[])

    if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
    return (
    <div>
      <h1>Users</h1>

      

      <ul>
        {users.map(user=>(<li key={user.id}>{user.title}</li>))}
      </ul>
    </div>
  );
}