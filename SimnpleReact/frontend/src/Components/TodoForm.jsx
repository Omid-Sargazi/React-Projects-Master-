import { useState } from "react";
import validateTodo from "../utils/validation";

export default function TodoForm({onAdd })
{
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);
    


    const submit = (e)=>{
        e.preventDefault();
        console.log("FORM SUBMITTED");

        const validationError = validateTodo(value);
        if(validationError)
        {
            setError(validationError);
            return;
        }

        onAdd(value);
        console.log("onAdd:", onAdd);
        setValue("");
        setError(null);
    }

    return(
        <>
        <form onSubmit={submit}>
            <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Add a todo"/>
        <button type="submit">Add</button>
        </form>


        {error&& <p style={{color:"red"}}>{error}</p>}
        </>
    )
}