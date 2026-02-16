import { useState } from "react"

export default function Counter2()
{
    function dec()
    {
        setCount(c=>c-1);
    }

    function inc()
    {
        setCount(c=>c+1)
    }
    const [count, setCount] = useState(0);
    return(
        <>
            <div>
                <h2>Count:{count}</h2>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </div>
        </>
    )
}