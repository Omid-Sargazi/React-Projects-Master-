import { useState } from "react";
export default function SimpleSearchWithFirst()
{
    const [search, setSearch] = useState("");

    const [users] = useState(["Omid","Saeed","Vahid","Saleh","Samyar","Zini"])

    const filteredUsers = users.filter(user=>user.toLocaleLowerCase().includes(search.toLocaleLowerCase()));


    return (
    <div>
      <h1>User Search</h1>

      <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search user..." />
      {filteredUsers.length===0 && (<p>No users Found.</p>)}

      <ul>
        {filteredUsers.map((user,index)=>(<li key={index}>{user}</li>))}
        {/* {users.map((user,index)=><li key={index}>{user}</li>)} */}
      </ul>

      <p> searching for.....{search}</p>
    </div>
  );
}