import { useEffect, useState, useMemo } from "react"

export default function SimpleUserDirectoryWithFirst2()
{

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [search, setSearch] = useState("");

    const [page, setPage] = useState(1);

    const pageSize=3;

   

    const filteredUsers = useMemo(()=>{
        return users.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()),[users,search]);
    });

     const paginatedUsers = useMemo(()=>{
        const start = (page -1)*pageSize;
        return  filteredUsers.slice(start, start+pageSize);
    },[filteredUsers,page]);


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
        <button disabled={page ===1} onClick={()=>setPage(p=>p-1)}>Prev</button>
        <span>Page {page}</span>
        <button
    disabled={page * pageSize >= filteredUsers.length}
    onClick={() => setPage(p => p + 1)}
  >
    Next
  </button>
      </div>

      <p>Loading...</p>
      <p>Error happened</p>
    </div>
        </>
    )
}