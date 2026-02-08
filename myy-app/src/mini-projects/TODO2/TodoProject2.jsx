import { useEffect, useState } from "react";

export default function TodoProject2()
{
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(res=>res.json())
    .then(data=>{
        setTodoList(data);
    })
  },[])

  function addTodo()
  {
      if(!todoText.trim()) return;
      console.log("add todo")

    const todo = {
        id:Date.now(),
        title:todoText,
        completed:false,
    };

    setTodoList(prev=>[todo,...prev]);
    setTodoText("")

  }
    return(<>
        <h2>Todo Mini Project</h2>
        <input placeholder="Add new task" value={todoText} onChange={e=>setTodoText(e.target.value)}/>

        <button onClick={addTodo}>Add Task</button>
        <div>{todoText}</div>
        <div>{todoList.map(todo=><ul>
            <li key={todo.id}>{todo.title}</li>
        </ul>)}</div>
    </>)
}