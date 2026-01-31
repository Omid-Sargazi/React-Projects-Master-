import { useState, useEffect } from "react";

export default function SimpleClockWithFirst()
{
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    console.log("render");

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
    console.log("effect");
        },1000)
    
        return ()=>{console.log("clean"); clearInterval(interval)};
    },[])
    // const time = new Date().toLocaleTimeString();
    return(
        <>
        <h1>Live Clock</h1>
        <p>12:00:00</p>
        <p>{time}</p>
        </>
    )
}