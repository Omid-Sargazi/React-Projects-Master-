import { useState } from "react"

export default function Todo2()
{
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = ()=>{
        setTasks([...tasks, task]);
        setTask("");
    }
    return(
        <>
            <div>
                <input value={task} onChange={e=>setTask(e.target.value)}/>

                <button onClick={addTask}>Add</button>

                <ul>
                    {tasks.map((t, index)=>(
                        <li key={index}>{t}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}