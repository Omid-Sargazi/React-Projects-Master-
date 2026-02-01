import { useState } from "react"
export default function SimpleTodoFetchWithFirst()
{
    const [filter, setFilter] = useState("all");
    return(
        <>
        <div>
        <h1>Todos</h1>

        <select value={filter} onChange={e=>setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not_completed">Not Completed</option>
        </select>

        <ul>
            <li>Todo example</li>
        </ul>
        </div>
        </>
    )
}