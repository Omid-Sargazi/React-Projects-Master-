import { useState } from "react";

export default function SimpleTodoWithFirst()
{

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [error,setError] = useState(null);

    const handleSubmit = (e)=>{
         e.preventDefault();

         if(inputValue.trim()==="")
         {
          setError("Todo Can not be empty.")
            return;
         }

         if (inputValue.length < 3) {
          setError("Todo must be at least 3 characters");
          return;
        }

        setError(null);

         setTodos([
        ...todos,
        {
            id: Date.now(),
            title: inputValue,
            completed: false
        }
]);
         setInputValue("");
    }

    const deleteTodo = (id)=>{
        setTodos(todos.filter(todo=>todo.id !== id));
    }

    const toggleTodo = (id)=>{
      setTodos(
        todos.map(todo=>todo.id===id ? {...todo,completed:!todo.completed}:todo)
      );
    };


    return (
    <div>
      <h1>Todo App (Simple)</h1>

      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button>Add</button>
      </form>
         <p>Typed value: {inputValue}</p>
      <ul>
        <li>Example todo</li>
        {todos.map((todo, index)=>(
            <li key={todo.id}>{todo.title}
            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
           <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none"
            }}
          >
            {todo.title}
          </span>
            </li>
        ))}
        {error && <p style={{color:"red"}}>{error}</p>}
      </ul>
    </div>
  );
}