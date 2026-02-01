import { useEffect, useState } from "react"
export default function SimpleTodoFetchWithFirst()
{
    const [filter, setFilter] = useState("all");

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(()=>{
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(data=>{
            let filtered = data;

            if(filtered==="copleted")
            {
                filtered = data.filter(t=>t.completed);
            }

            if (filter === "not_completed") {
            filtered = data.filter(t => !t.completed);
            }

            setTodos(filtered.slice(0,10));
            setLoading(false);
        }).catch(()=>{
            setError("Failed to load todos")
            .setLoading(false);
        })
    },[filter])

    return(
        <>
        <div>
        <h1>Todos</h1>

        <select value={filter} onChange={e=>setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not_completed">Not Completed</option>
        </select>

       {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <ul>
        {todos.map(todo => (
            <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
            </li>
        ))}
        </ul>
        </div>
        </>
    )
}