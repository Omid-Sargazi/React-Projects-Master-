import { useEffect, useState } from "react"

export default function SimpleUserDirectoryWithFirst2()
{

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [search, setSearch] = useState("");
    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);
        setError(null);

        fetch("https://jsonplaceholder.typicode.com/users",{
            signal:controller.signal
        })
        .then(res=>res.json())
        .then(data=>{
            setUsers(data);
            setLoading(false);

            console.log(data)
        })
        .catch((err)=>{
            if(err.name !== "AbortError")
            {
                setError("Failed to load users");
                setLoading(false);
            }
        });
        return ()=>{
            controller.abort();
        }
    },[])
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