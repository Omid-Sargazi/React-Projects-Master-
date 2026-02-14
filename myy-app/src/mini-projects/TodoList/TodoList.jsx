import { useState, useRef, useEffect } from "react"

export default function TodoList()
{
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);
    const deleteRef = useRef(null);

    useEffect(()=>{
        inputRef.current?.focus();

    },[])

    const addTask = ()=>{
        if(!task.trim()) return;

        setTodos([...todos,{id:Date.now(),text:task}]);
        setTask("");
        inputRef.current?.focus();
    }


    const deleteTask = (id)=>{
        setTodos(todos.filter(todo=>todo.id!==id));
    }
    return(
        <>
    <div class="container">
        <h1>Todo List</h1>

        <input ref={inputRef} value={task}  onChange={(e)=>setTask(e.target.value)}  type="text" placeholder="New task..." />
        <button onKeyDown={e=>{
            if(e.key=="Enter")
            {
                inputRef.current.focus();
            }
        }}  onClick={addTask}>Add</button>

       <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onKeyDown={e=>{
                if(e.key==="Enter")
                {
                    // e.preventDefault();
                    deleteRef.current.focus();
                }
            }} ref={deleteRef} onClick={() => deleteTask(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
        </>
    )
}