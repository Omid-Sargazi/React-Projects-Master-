import { useState } from "react";
type Todo = {
    id:number,
    text:string,
};


export default function Define()
{
    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState<string>("");


    
    const addTodo = ()=>{
        const newTodo : Todo = {
            id:Date.now(),
            text,
        }
        setTodos([...todos,newTodo]);
        setText("");
    }

    return(
        <>
            <input
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />

            <button onClick={addTodo}>Add</button>


            {todos.map(todo=>(
                <p key={todo.id}>{todo.text}</p>
            ))}
        </>
    )
}
