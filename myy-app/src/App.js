import logo from './logo.svg';
import './App.css';
import TodoApp from './mini-projects/todo/TodoApp';
import TodoProject2 from './mini-projects/TODO2/TodoProject2';
import { useState } from 'react';
import UsersApp from './mini-projects/users/UsersApp';

function App() {
  return (
    <div className="App">
      <h1>React TS Admin Dashboard</h1>
      {/* <TodoApp/> */}
      {/* <TodoProject2/> */}
      <UsersApp/>
    </div>
  );
}

export default App;
