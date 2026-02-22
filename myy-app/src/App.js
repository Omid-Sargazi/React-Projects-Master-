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
import RenderCounter from './mini-projects/RenderCounter/RenderCounter';
import AccurateTimer from './mini-projects/AccurateTimer/AccurateTimer';
import RenderChildMmeo from './mini-projects/MemoChild/RenderChildMmeo';
import UseMemoText from './mini-projects/UseMemeUseCallback/UseMemoText';
import TodoUseMemo from './mini-projects/TodoUseMemo';
import UseRefConcept from './mini-projects/UseRefConcept/UseRefConcept';
import UseRefInput from './mini-projects/UseRefConcept/UseRefInput';
import StopwatchRef from './mini-projects/UseRefConcept/StopwatchRef';
import TodoList from './mini-projects/TodoList/TodoList';
import ValidateElements from './mini-projects/ValidateItems/ValidateElements';
import ProductManager from './mini-projects/ProductManager/ProductManager';
import ProductForm from './mini-projects/ProductManager/ProductForm';
import Counter2 from './mini-projects/Counter2/Counter2';
import ThemeToggle from './mini-projects/ToggleDarkMode/ThemeToggle';
import PasswordToggle from './mini-projects/ToggleDarkMode/PasswordToggle';
import Clock from './mini-projects/ToggleDarkMode/Clock';
import Todo2 from './mini-projects/TodoProject/Todo2';
import UserList from './mini-projects/MiniAdminPanel/context/hooks/components/UI/Users/UserList';
import WelcomeMessage from './react-200-scenarios/WelcomeMessage';
import Timer from './react-200-scenarios/Timer';


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
      {/* <RenderTest/> */}
      {/* <RenderCounter/> */}
      {/* <AccurateTimer/> */}
      {/* <RenderChildMmeo/> */}
      {/* <UseMemoText/> */}
      {/* <TodoUseMemo/> */}
      {/* <UseRefConcept/> */}

      {/* <UseRefInput/>
       */}
       {/* <StopwatchRef/> */}
       {/* <TodoList/> */}
       {/* <ValidateElements/> */}
       {/* <ProductManager/> */}
       {/* <ProductForm/> */}
       {/* <Counter2/> */}
       {/* <ThemeToggle/> */}
       {/* <PasswordToggle/> */}

       {/* <Clock/> */}
       {/* <Todo2/> */}
       {/* <UserList/> */}
       {/* <WelcomeMessage/> */}
       <Timer/>

    </div>
  );
}

export default App;
