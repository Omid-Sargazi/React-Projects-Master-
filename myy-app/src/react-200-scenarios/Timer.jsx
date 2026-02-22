import { useEffect, useState } from "react"

export default function Timer()
{
    const [seconds, setSeconds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds(prev=>prev+1);
        },1000);

        return ()=>clearInterval(interval);
    },[])
    return(
        <>
            <h3>Seconds: {seconds}</h3>;
        </>
    )
}