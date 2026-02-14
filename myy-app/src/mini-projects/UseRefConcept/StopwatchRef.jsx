import { useState } from "react"

export default function StopwatchRef()
{
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);


    const handleStart = ()=>{
        const id = setInterval(()=>{
            setTime(prev=>prev+1);
        },1000);

        setIntervalId(id);
    }

    const handleStop = ()=>{
        clearInterval(intervalId);
    }

    const handleReset  = ()=>{
        setTime(0);
        clearInterval(intervalId);
    }
    return(
        <>
            <div id="root">
    <div style={{ padding: 20 }}>
      <h2>{time}</h2>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  </div>
        </>
    )
}