import { useState } from "react"

export default function LoginCounter()
{
    const [count, setCount] = useState(0);
    return(
        <>
        <h2>Count LoginCounter</h2>
        <h3>Login Attemp: {count}</h3>
        <button onClick={()=>setCount(count+1)}>+</button>
        </>
    )
}