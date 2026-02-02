import { useEffect, useMemo, useState,React, useRef, useCallback } from "react"

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

    const handleSearchChange = useCallback((value) => {
  setSearch(value);
}, []);

const handleReset = useCallback(() => {
  setSearch("");
  inputRef.current.focus();
}, []);

    return(
        <>
             <div>
      <h1>User Search</h1>

      <div>
        
        <SearchControls  value={search} onChange={handleSearchChange} onReset={()=>{setSearch(""); inputRef.current.focus()}} inputRef={inputRef}/>
        {console.log(search)}
      </div>

        {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

    <ul>
    {filteredUsers.map(user => (
        <li key={user.id}>{user.name}</li>
    ))}
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