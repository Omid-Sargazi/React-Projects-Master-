import { useState } from "react"
import TodoItem from "./todo/TodoItem";
import TodoItemm from "./TodoItemm";

export default function TodoUseMemo()
{
    const [todos, setTodos] = useState(
        [
            { id: 1, text: "Learn React" },
            { id: 2, text: "Learn Performance" },
            { id: 3, text: "Master Hooks" },
        ]
    );

   

    const deleteTodo = (id)=>{
        setTodos(prev=>prev.filter(t=>t.id !== id));
    }
    return(
        <>
            <div style={{padding:20}}>
                <h2>Todo List</h2>
                {todos.map(todo=>(
                    <TodoItemm
                        id={todo.id}
                        todo={todo}
                        onDelete={()=>deleteTodo(todo.id)}
                    />
                ))}

            </div>
        </>
    )
}