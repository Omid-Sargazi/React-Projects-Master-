import { useState } from "react"

export default function SimpleUserDirectoryWithFirst()
{

    const [search, setSearch] = useState("");


    return(
        <>
            <h1>User Directory</h1>
            <input placeholder="Search users..." value={search} onChange={(e)=>e.target.value}/>

            <ul>
                <li></li>
            </ul>

            <div>
                <button>Prev</button>
                <span>Page </span>
                <button>Next</button>
            </div>

            <p>Loading....</p>
            <p>Error happened</p>
        </>
    )
}