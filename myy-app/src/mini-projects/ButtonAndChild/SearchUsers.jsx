import { useMemo, useState } from "react"
import expensiveFilter, { users } from "./users";

export default function SearchUsers()
{
    const [search,setSearch] = useState("");
    const [count, setCount] = useState(0);

    const filteredUsers = useMemo(()=>{
        return expensiveFilter(users, search);
    },[search]) 
    return(
        <>
            <h2>Counter:{count}</h2>

            <button onClick={()=>setCount(c=>c+1)}>+</button>

            <input
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Results: {filteredUsers.length}</p>
        </>
    )
}