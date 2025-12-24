import logo from './logo.svg';
import './App.css';

import React,{useState,useEffect} from 'react';

import TodoStats from './TodosFiles/TodoStats';
import TodoList from './TodosFiles/TodoList';
import TodoItem from './TodosFiles/TodoItem';

function App() {
  const [todos,setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  useEffect(()=>{
    fetchTodos();
  },[]);


  const fetchTodos = async ()=>{
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/todos");
      const data = await response.json();
      setTodos(data);


    } catch (error) {
      setError('خطا در دریافت اطلاعات');
    }
    finally
    {
      setLoading(false);
    }
  }

  if (loading) return <div className="loading">در حال بارگذاری...</div>;
  if (error) return <div className="error">{error}</div>;


  return (
   <div className="app">
      <h1>📝 برنامه مدیریت کارها</h1>
      <div className="container">
        {/* 🎯 بخش‌های مختلف */}
        <TodoStats todos={todos} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
