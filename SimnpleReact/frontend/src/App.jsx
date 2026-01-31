import React from "react";
import "./App.css";

import TestHook1 from "./Components/TestHook1";
import LoginCounter from "./Components/LoginCounter";
import Dashboard from "./Components/Dashboard";
import UseRefHook from "./Components/UseRefHook";



function App() {
  return (
   <>
   <TestHook1/>
   <LoginCounter/>
   <Dashboard/>
   <UseRefHook/>
   </>
   
  );
}

export default App;
