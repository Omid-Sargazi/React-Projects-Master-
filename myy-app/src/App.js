import logo from './logo.svg';
import './App.css';
import TodoApp from './mini-projects/todo/TodoApp';
import TodoProject2 from './mini-projects/TODO2/TodoProject2';
import { useState } from 'react';
import UsersApp from './mini-projects/users/UsersApp';
import CounterApp from './mini-projects/Counter/CounterApp';
import ProductCartApp from './mini-projects/Product/ProductCartApp';
import SearchApp from './mini-projects/Search/SearchApp';
import RenderTest from './mini-projects/Rendering/RenderTest';

function App() {
  return (
    <div className="App">
      <h1>React TS Admin Dashboard</h1>
      {/* <TodoApp/> */}
      {/* <TodoProject2/> */}
      {/* <UsersApp/> */}
      {/* <CounterApp/> */}
      {/* <ProductCartApp/> */}

      {/* <SearchApp/> */}
      <RenderTest/>
    </div>
  );
}

export default App;
