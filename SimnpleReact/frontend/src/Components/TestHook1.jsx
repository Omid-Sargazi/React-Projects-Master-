import React, { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import ThemeContext from "./ThemeContext";




function TestHook1()
{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("component mounted....")
    },[count])
    return(
        <>
        <h1>Test Hook 100</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <ThemeContext.Provider value="dark">
            <Toolbar/>
        </ThemeContext.Provider>
        </>
    )
}


export default TestHook1;