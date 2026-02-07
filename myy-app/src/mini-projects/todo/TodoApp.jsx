import { useEffect, useState } from "react"
import TodoList from "./TodoList";

export default function TodoApp()
{
    const[todos, setTodos] = useState([]);
    const [newTodo,setNewTodo] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then(res=>res.json())
        .then(data=>{
            setTodos(data);
            setLoading(false);
        });

       
    },[]);

     function addTodo()
        {
            if(!newTodo.trim()) return;

            const todo = {
                id:Date.now(),
                title:newTodo,
                completed:false,
            };


            setTodos(prev=>[todo,...prev]);
            setNewTodo("");


        }

        function toggleTodo(id)
        {
            setTodos(prev=> prev.map(todo=>todo.id===id ? {...todo,completed:!todo.completed}:todo));
        }


        function deleteTodo(id)
        {
            setTodos(prev=>prev.filter(todo=>todo.id !==id));

             return (
    <div className="todo-app">
      <h2>Todo Mini Project</h2>

      <div>
        <input
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      )}
    </div>
  );

        }


     return (
    <div className="todo-app">
      <h2>Todo Mini Project</h2>

      <div>
        <input
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      )}
    </div>
  );
}