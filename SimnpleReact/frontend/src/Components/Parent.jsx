import { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent()
{
    console.log("Prent Render");

    const [count, setCount] = useState(0);

    // const incre = ()=>{
    //     setCount(c=>c+1);
    // };

    const increment  = useCallback(()=>{
        setCount(c=>c+1);
    },[])

    return(
        <>
            <h2>Count: {count}</h2>

            <button onClick={increment}>+</button>
            <Child name="A" onClick={increment}/>
            <Child name="B" onClick={increment}/>
            <Child name="C" onClick={increment}/>
            <Child name="D" onClick={increment}/>
        </>
    )
}

