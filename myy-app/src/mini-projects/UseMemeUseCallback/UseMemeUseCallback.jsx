import React, { useCallback, useState } from "react"

export default function UseMemeUseCallback()
{
    const [count, setCount] = useState(0);

    const increase = useCallback(()=>{
        setCount(c=>c+1)
    },[count]); 
    console.log("render parent")
    return(
        <>
            <h1>Parent</h1>
            <button onClick={increase}>+</button>
            <p>{count}</p>
            <Child increase={increase}/>
        </>
    )
}

const Child = React.memo(({increase})=>
{
    console.log("render child")
    return(
        <>
            <p>Child</p>
            <button onClick={increase}>+Child</button>
        </>
    )
})