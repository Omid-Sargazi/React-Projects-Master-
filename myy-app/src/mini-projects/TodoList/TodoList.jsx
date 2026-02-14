import { useState } from "react"

export default function TodoList()
{
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([]);

    const addTask = ()=>{
        if(!task.trim()) return;

        setTodos([...todos,{id:Date.now(),text:task}]);
        setTask("");
    }


    const deleteTask = (id)=>{
        setTodos(todos.filter(todo=>todo.id!==id));
    }
    return(
        <>
    <div class="container">
        <h1>Todo List</h1>

        <input value={task}  onChange={(e)=>setTask(e.target.value)}  type="text" placeholder="New task..." />
        <button onClick={addTask}>Add</button>

       <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTask(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
        </>
    )
}