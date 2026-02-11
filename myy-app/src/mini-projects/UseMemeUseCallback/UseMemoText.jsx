import React, { useCallback, useMemo, useState } from "react"
import Preview from "./Preview";

export default function UseMemoText()
{
    console.log("Parent rendered");
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    const style = useMemo(()=>{
        return {color:"green"}
    },[]);

    const increase =()=>{
        setCount(c=>c+1);
    };

    const changeText = (e)=>{
        setText(e.target.value);
    }
    return(
        <>
                <h1>Parent</h1>
                <h2>Counter: {count}</h2>
                <button onClick={increase}>+</button>

                <br/>
                <br/>
                <br/>


                <input placeholder="Type something"
                    value={text}
                    onChange={e=>changeText(e)}
                />
                <Preview text={text} style={style}/>
        </>
    )
}

