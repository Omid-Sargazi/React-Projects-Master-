import { useState, React, memo } from "react";

function ChildCounter({increase, decrease,state})
{
    

    console.log("Child Render");
    return(<>
        <h1>Child</h1>
        {state}
        {/* <div>{state}</div> */}
         {/* <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button> */}
    </>)
}

export default memo(ChildCounter);