import { useState } from "react";

export default function SimpleTodoWithFirst()
{

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e)=>{
         e.preventDefault();

         if(inputValue.trim()==="")
         {
            return;
         }

         setTodos([...todos,inputValue]);
         setInputValue("");


    }
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
            <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}