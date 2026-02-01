import { useMemo, useState } from "react";

export default function UseMemoTest()
{
    const [count, setCount] = useState(0);

    const double = count *2;

    const [text, setText] = useState("");

    const result = useMemo(()=>{
    const result = slowCalculation(count);
    },[count])

    return(
        <>
            <p>{double}</p>
            <input onChange={e=>setText(e.target.value)}/>
            <p>{result}</p>
            <button onClick={()=>setCount(count +1)}>+</button>
        </>
    )
}

function slowCalculation(num) {
  console.log("calculating...");
  for (let i = 0; i < 1_000_000_000; i++) {}
  return num * 2;
}
