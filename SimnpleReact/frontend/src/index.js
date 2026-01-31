import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ReactDom from "react-dom";


function render()
{
    ReactDom.render(<App/>, document.getElementById('root'));

}

setInterval(()=>{
    render();
},1000);





// function render()
// {
//     const container = document.getElementById("root");
//     const root = createRoot(container);
//     root.render(<App />); 
// }

// setInterval(render,1000);

