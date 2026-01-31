import React from "react";

export default function UseRefTest()
{
    const xRef = React.useRef(0);

    const click = ()=>{
        xRef.current = ()=>{
            xRef.current++;
            console.log(xRef.current);
        }

    }
    return <button onClick={click}>Click</button>
}