import { useState, useCallback } from "react";
export default function useTodos()
{
    const [todos, setTodos] = useState([]);

    const addTodos = useCallback((title)=>{
        setTodos(prev=>[
            ...prev,
            {id:Date.now,title,completed:false}
        ])
    },[]);

    const toggleTodo = useCallback((id)=>{
        setTodos(prev=> prev.map(t=>t.id===id? {...t, completed:!t.completed}:t))
    },[]);

    const removeTodo = useCallback((id)=>{
        setTodos(prev=>prev.filter(t=>t.id!==id))
    },[]);

    return {todos, addTodos, toggleTodo, removeTodo};

}