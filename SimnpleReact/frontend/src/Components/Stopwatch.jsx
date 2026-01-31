import React from "react";

export default function Stopwatch()
{
    const [time, setTime] = React.useState(0);
    const intervalRef = React.useRef(null);

    const start = ()=>{
        intervalRef.current = setInterval(()=>{
            setTime(t=>t+1);
        },1000)
    };


    const stop = ()=>clearInterval(intervalRef.current);

    return(
        <>
        <p>
            {time}
        </p>
        <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
        </>
    )
}