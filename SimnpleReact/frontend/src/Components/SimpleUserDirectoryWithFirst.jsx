import { useEffect, useState, useMemo } from "react"

export default function SimpleUserDirectoryWithFirst()
{

    const [search, setSearch] = useState("");
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setpage] = useState(1);
    const pageSize = 3;

    const filteredUsers = useMemo(()=>{
        return users.filter(user=> user.name.toLowerCase().include(search))
    },[users, search]);

    const paginatedUsers = useMemo(()=>{
        const start = (page -1) * pageSize;
        return filteredUsers.slice(start, start+pageSize);
    },[filteredUsers, page]);



    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);
        setError(null);

        fetch("https://jsonplaceholder.typicode.com/users",{
            signal:controller.abort
        })
        .then(res=>res.json())
        .then(data=>{
            setUser(data);
            setLoading(false);
        })

        .catch(err=>{
            if(err.name!=="AbortError")
            {
                setError("Failed to load users")
                setLoading(false);
            }
        });

        return ()=>controller.abort()
    },[])


    return(
        <>
            <h1>User Directory</h1>
            <input placeholder="Search users..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
            {console.log(search)}

            <ul>
                <li></li>
            </ul>

            <div>
                <button disabled={pageSize===1} onClick={()=>setpage(p=>p-1)}>Prev</button>
                <span>Page </span>
                <button disabled={page * pageSize >= filteredUsers.length}
                    onClick={() => setPage(p => p + 1)}>Next</button>
            </div>

            <p>Loading....</p>
            <p>Error happened</p>
        </>
    )
}