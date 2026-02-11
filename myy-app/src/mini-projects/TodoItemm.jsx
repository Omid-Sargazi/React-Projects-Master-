import React from "react"

const TodoItemm = React.memo(function TodoItemm({todo, onDelete})
{
    console.log("Rendered:",todo.text)
    return(
        <>
        {/* <p>TodoItem</p> */}
            <div>{todo.text}</div>
            <button onClick={()=>onDelete(todo.id)}>Delete</button>
        </>
    )
});

export default TodoItemm;