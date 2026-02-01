import { useState } from "react"

export default function SimpleUserSearchPlayground()
{

    const [search, setSearch] = useState("");
    return(
        <>
             <div>
      <h1>User Search</h1>

      <div>
        <input placeholder="Search users..."  value={search} onChange={e=>setSearch(e.target.value)}/>
        {console.log(search)}
        <button>Reset</button>
      </div>

      <p>Loading...</p>
      <p>Error happened</p>

      <ul>
        <li>User name</li>
      </ul>
    </div>
        </>
    )
}