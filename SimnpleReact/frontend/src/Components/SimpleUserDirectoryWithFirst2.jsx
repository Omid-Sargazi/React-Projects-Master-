import { useState } from "react"

export default function SimpleUserDirectoryWithFirst2()
{

    const [search, setSearch] = useState("");
    return(
        <>
            <div>
      <h1>User Directory</h1>

      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search users..." />
      {console.log(search)}

      <ul>
        <li>User name</li>
      </ul>

      <div>
        <button>Prev</button>
        <span>Page 1</span>
        <button>Next</button>
      </div>

      <p>Loading...</p>
      <p>Error happened</p>
    </div>
        </>
    )
}