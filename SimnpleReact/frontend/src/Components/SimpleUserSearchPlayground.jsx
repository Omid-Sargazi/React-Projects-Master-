import { useEffect, useMemo, useState,React, useRef } from "react"

export default function SimpleUserSearchPlayground()
{

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const inputRef = useRef(null);

    const filteredUsers = useMemo(() => {
  return users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
}, [users, search]);


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
            console.log(data);
        })
        .catch((err)=>{
            if(err.name !=="AbortError")
            {
                setError("Failed to load users");
                setLoading(false);
            }
        })

        return ()=>{
            controller.abort();
        }
    },[])

    return(
        <>
             <div>
      <h1>User Search</h1>

      <div>
        
        <SearchControls  value={search} onChange={setSearch} onReset={()=>{setSearch(""); inputRef.current.focus()}} inputRef={inputRef}/>
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

function SearchControls({value,onChange,onReset, inputRef})
{
    return(
        <>
            <div>
                <input ref={inputRef} value={value} onChange={e=>onChange(e.target.value)} placeholder="Search users..."/>

                <button onClick={onReset}>Reset</button>
            </div>
        </>
    )
}