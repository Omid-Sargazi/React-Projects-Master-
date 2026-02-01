import React from "react";
import "./App.css";

import TestHook1 from "./Components/TestHook1";
import LoginCounter from "./Components/LoginCounter";
import Dashboard from "./Components/Dashboard";
import UseRefHook from "./Components/UseRefHook";
import Stopwatch from "./Components/Stopwatch";
import UseRefTest from "./Components/UseRefTest";
import Parent from "./Components/Parent";
import useTodos from "./hooks/useTodos";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import SimpleTodo from "./Components/SimpleTodo";
import SimpleTodoWithFirst from "./Components/SimpleTodoWithFirst";
import SimpleSearchWithFirst from "./Components/SimpleSearchWithFirst";
import SimpleClockWithFirst from "./Components/SimpleClockWithFirst";
import SimpleFetchWithFirst from "./Components/SimpleFetchWithFirst";
import SimpleTodoFetchWithFirst from "./Components/SimpleTodoFetchWithFirst";
import SimpleProductFilterWithFirst from "./Components/SimpleProductFilterWithFirst";
import SimpleUserDirectoryWithFirst from "./Components/SimpleUserDirectoryWithFirst";



function App() {
  const { todos, addTodos, toggleTodo, removeTodo } = useTodos();
  return (
   <>
   {/* <TestHook1/>
   <LoginCounter/>
   <Dashboard/>
   <UseRefHook/>

   <Stopwatch/>

   <UseRefTest/> */}

   {/* <h1>==================</h1>
   <Parent/> */}


   {/* <h1>Todo App</h1>
      <TodoForm onAdd={addTodos} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onRemove={removeTodo}
      /> */}

      {/* <SimpleTodo/> */}

      {/* <SimpleTodoWithFirst/> */}

      {/* <SimpleSearchWithFirst/> */}
      {/* <SimpleClockWithFirst/> */}

      {/* <SimpleFetchWithFirst/> */}

      {/* <SimpleTodoFetchWithFirst/> */}

      {/* <SimpleProductFilterWithFirst/> */}
      <SimpleUserDirectoryWithFirst/>
   </>
   
  );
}

export default App;
