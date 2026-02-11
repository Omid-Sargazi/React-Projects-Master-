import React from "react"

 const Preview =React.memo(function Preview({text})
{
    console.log("Preview rendered");

    return(
        <>
            <h3>Live Preview:</h3>
            <p>{text}</p>
        </>
    )
})

export default Preview;