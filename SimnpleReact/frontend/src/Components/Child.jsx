import { useState } from "react";
import React from "react";
 function Child({name,onClick})
{
    console.log(`🟡 Child ${name} render`);

    return(
        <>
            <button onClick={onClick}>Child{name}</button>
        </>
    )
}

export default React.memo(Child);
