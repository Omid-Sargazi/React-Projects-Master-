import { useState } from "react";

export default function RenderTest()
{
    const [count, setCount] = useState(0);

    console.log("Render Parent...")

    return(
        <>
            <h1>Render Test</h1>
            <p>{count}</p>

            <button onClick={()=>setCount(c=>c+1)}>+</button>
            <Child/>
        </>
    )
}


function Child()
{
    console.log("Render Child....")
    return(
        <>
            <div>Child</div>
        </>
    )
}