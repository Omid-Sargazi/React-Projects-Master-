import React from "react";

export default function UseRefHook()
{
    const inputRef = React.useRef();

    return(
        <>
        <button onClick={()=>inputRef.current.focus()}>Focus</button>

        <input ref={inputRef}/>
        </>
    )
}