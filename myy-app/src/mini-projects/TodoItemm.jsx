export default function TodoItemm({todo, onDelete})
{
    console.log("Rendered:",todo.text)
    return(
        <>
        {/* <p>TodoItem</p> */}
            <div>{todo.text}</div>
            <button onClick={onDelete}>Delete</button>
        </>
    )
}