
import React from "react"
import ThemeContext from "./ThemeContext";

export default function Toolbar()
{

    const theme = React.useContext(ThemeContext);
    console.log(theme,"Theme");
   return(
    <>
     <h1>
        ToolBar Component:{theme}
    </h1>
    </>
   )
}