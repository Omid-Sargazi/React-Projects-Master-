"use client"
import { useMemo, useState } from "react"


export default function UserSearch({users}:{users:any[]})
{
    const [search, setSearch] = useState("");

    const filteredUsers = useMemo(()=>{
        return users.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()));
    },[users,search]);

    return(
        <div>
            <input placeholder="Search users..." value={search} onChange={e=>setSearch(e.target.value)}/>

            <ul>
                {filteredUsers.map(user=>(<li key={user.id}>{user.name}</li>))}
            </ul>
        </div>
    )
}