import { useEffect, useRef, useState } from "react";

export default function AccurateTimer()
{
    const [time, setTime] = useState(0);
    const intervalRef  = useRef(null);
    const isRunningRef = useRef(false);

    const startTimer = ()=>{
        if(isRunningRef.current) return;

        isRunningRef.current = true;

        intervalRef.current = setInterval(()=>{
            setTime(prev=>prev+1);
        },1000)
       
    }

    const stopTimer = ()=>{
        if(intervalRef.current)
        {
           clearInterval(intervalRef.current)
        intervalRef.current=null;
       isRunningRef.current = false;
        }
    }

    const resetTimer = ()=>{
        stopTimer();
        setTime(0)
    }

    useEffect(()=>{
        return()=>{
            if(intervalRef.current)
            {
                clearInterval(intervalRef.current)
            }
        }
    },[])

    return(
        <>
             <h2>زمان: {time} ثانیه</h2>
             <button onClick={startTimer}>شروع</button>
            <button onClick={stopTimer}>توقف</button>
            <button onClick={resetTimer}>ریست</button>
        </>
    )
}