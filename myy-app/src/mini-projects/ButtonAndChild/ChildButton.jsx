import React, { useCallback, useState } from "react"

export default function ParentButton()
{
    const [count, setCount] = useState(0);

    const Increase = useCallback(()=>{
        setCount(c=>c+1);
    },[count]) 
    return(
        <>
        <h2>Parent</h2>
        <div>{count}</div>
        <button onClick={Increase}>+</button>
        <ChildButton props={count}  increase={Increase}/>
        </>
    )
}


const ChildButton =  React.memo(({props,increase})=>{
    

    console.log("render child");
    return(<>
        <p>{props}</p>
        <button onClick={increase}>+Child</button>
    <h3>Child</h3>
    </>)
}) 
 