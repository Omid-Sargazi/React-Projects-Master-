import { useEffect, useRef, useState } from "react"

export default function UseRefConcept()
{
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const inputRef = useRef(count);

    const increase = ()=>{
        setCount(c=>c+1);
    }
    useEffect(()=>{
        if(inputRef.current)
        {
            inputRef.current.focus();
        }
    },[count])

    // inputRef.current.focus();
    return(
        <>
            <p>UseRefs</p>

            <button onClick={increase}>+</button>
            <p>{count}</p>
            <p>CountRef: {countRef.current}</p>
            <input ref={inputRef}/>



        </>
    )
}