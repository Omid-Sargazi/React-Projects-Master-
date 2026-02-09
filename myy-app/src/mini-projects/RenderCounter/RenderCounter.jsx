import { useRef, useState } from "react";

export default function RenderCounter()
{
    const renders  = useRef(0);
    const [count, setCount] = useState(0);

    renders .current++;

    return(
        <>
            <p>Count: {count}</p>
            <p>Renders: {renders.current}</p>
            <button onClick={()=>setCount(c=>c+1)}>+</button>
        </>
    )
}