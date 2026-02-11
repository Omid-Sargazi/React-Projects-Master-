import React from "react"

 const Preview =React.memo(function Preview({text,style})
{
    console.log("Preview rendered");
   // const style = {color:"red"};

    return(
        <>
        <div style={style}>
             <h3>Live Preview:</h3>
            <p>{text}</p>
        </div>
           
        </>
    )
})

export default Preview;