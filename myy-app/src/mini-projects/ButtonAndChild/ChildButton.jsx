import React, { useState } from "react"

export default function ParentButton()
{
    const [count, setCount] = useState(0);

    const Increase = ()=>{
        setCount(c=>c+1);
    }
    return(
        <>
        <h2>Parent</h2>
        <div>{count}</div>
        <button onClick={Increase}>+</button>
        <ChildButton />
        </>
    )
}


const ChildButton =  React.memo(()=>{
    

    console.log("render child");
    return(<>

    </>)
}) 
 