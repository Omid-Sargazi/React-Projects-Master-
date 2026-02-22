import { useEffect, useState } from "react"

export default function UserList()
{
    
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
   
   useEffect(()=>{
    const fetchUsers = async ()=>{
        try {
            
        } catch (error) {
            
        }
    }
   })
    console.log(users);
    return(
        <>
                <h1>Mini Dashboard</h1>
                <div></div>
        </>
    )
}