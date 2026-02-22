import { useState } from "react"

export default function SearchFilter()
{
    const [search, setSearch] = useState("");
    const users = ["Omid", "Sarah", "Ali", "Mina"];

    const filtered = users.filter(user=>user.toLowerCase().includes(search.toLowerCase()));


    return(
        <>
            <div>
                <input  
                    placeholder="Search..."
                    value={search}
                    onChange={e=>setSearch(e.target.value)}
                />

                <ul>
                   {filtered.map((user, index) => (
                        <li key={index}>{user}</li>
                     ))}
                </ul>
            </div>
        </>
    )
}