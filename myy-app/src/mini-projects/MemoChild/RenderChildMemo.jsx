import React, { useCallback, useState } from "react"

export default function RenderChildMemo()
{
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState("");

    const handleClick = useCallback(()=>{
        console.log("Current count:", count);
    },[count]);

    const handleClickWrong = useCallback(()=>{
        console.log("Current count:", count);
    },[])

     console.log("🔁 Parent Render, count:", count);
    return(
    <>
    <button onClick={()=>setCount(c=>c+1)}>Incr Count</button>

    <input  value={otherState} onChange={(e)=>setOtherState(e.target.value)} placeholder="change other State"/>

    <Child onClick={handleClick} data={count}/>
    </>
    )
}


const Child = React.memo(({onClick, data})=>{
    console.log("👶 Child Render with data:", data);
    return <button onClick={onClick}>Count:{data}</button>
})