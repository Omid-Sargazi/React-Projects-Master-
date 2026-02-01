import { useEffect, useState, useMemo } from "react"

export default function SimpleUserDirectoryWithFirst()
{

    const [search, setSearch] = useState("");
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const filteredUsers = useMemo(()=>{
        return users.filter(user=> user.name.toLowerCase().include(search))
    },[users, search])

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
                <button>Prev</button>
                <span>Page </span>
                <button>Next</button>
            </div>

            <p>Loading....</p>
            <p>Error happened</p>
        </>
    )
}