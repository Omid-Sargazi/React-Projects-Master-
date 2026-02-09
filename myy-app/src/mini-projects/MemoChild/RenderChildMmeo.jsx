import React, { useCallback, useState } from "react";

export default function RenderChildMmeo()
{
    const [count, setCount] = useState(0)

    const handleClick = useCallback(()=>{
        console.log("clicked...");
    },[])

    console.log("🔁 Parent Render");

    
    return(
        <>
            <button onClick={()=>setCount(c=>c+1)}>+</button>
            <p>{count}</p>
            <Child onClick={handleClick} count={count}/>
        </>
    )
}


const  Child = React.memo(({onClick})=>{
    console.log("Child");
     return(
        <>
        <h1 >Child</h1>
        <button onClick={onclick}>Child Button</button>
        </>
    )
})
