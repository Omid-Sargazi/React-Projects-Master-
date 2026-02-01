import { useState } from "react"

export default function SimpleUserSearchPlayground()
{

    const [search, setSearch] = useState("");
    return(
        <>
             <div>
      <h1>User Search</h1>

      <div>
        
        <SearchControls value={search} onChange={setSearch} onReset={()=>setSearch("")}/>
        {console.log(search)}
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

function SearchControls({value,onChange,onReset})
{
    return(
        <>
            <div>
                <input value={value} onChange={e=>onChange(e.target.value)} placeholder="Search users..."/>

                <button onClick={onReset}>Reset</button>
            </div>
        </>
    )
}