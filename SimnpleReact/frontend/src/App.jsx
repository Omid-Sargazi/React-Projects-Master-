import React from "react";
import "./App.css";

import TestHook1 from "./Components/TestHook1";
import LoginCounter from "./Components/LoginCounter";
import Dashboard from "./Components/Dashboard";
import UseRefHook from "./Components/UseRefHook";
import Stopwatch from "./Components/Stopwatch";



function App() {
  return (
   <>
   <TestHook1/>
   <LoginCounter/>
   <Dashboard/>
   <UseRefHook/>

   <Stopwatch/>
   </>
   
  );
}

export default App;
