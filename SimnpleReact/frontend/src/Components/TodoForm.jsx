import validateTodo from "../utils/validation";

export default function TodoForm()
{
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);


    const submit = (e)=>{
        e.preventDefault();

        const validationError = validateTodo(value);

        if(validationError)
        {
            setError(validationError);
            return;
        }

        onAdd(value);
        setValue("");
        setError(null);
    }

    return(
        <>
        <form onSubmit={submit}>
            <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Add a todo"/>
        </form>

        <button>Add</button>

        {error&& <p style={{color:"red"}}>{error}</p>}
        </>
    )
}