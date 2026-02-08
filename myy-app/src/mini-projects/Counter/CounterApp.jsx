import { useCallback, useState } from "react";

export default function CounterApp()
{
    const [count, setCount] = useState(0)

    // function increase()
    // {
    //     setCount(count +1)
    //     // console.log("render")
    // }
    // function decrease()
    // {
    //     setCount(prevCount=>{
    //         if(prevCount<=0)
    //         {
    //             return 0;
    //         }
    //         return prevCount -1;
    //     })
    // }

    const increase = useCallback(()=>{
        setCount(c=>c+1)
    },[count]);

    const decrease = useCallback(()=>{
        setCount(c=>c-1)
    },[count])
        console.log("render")

    return(
        <>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </>
    )
}