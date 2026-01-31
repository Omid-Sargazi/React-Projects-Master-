export default function TodoItem({ todo, onToggle, onRemove })
{
    return(
        <>

        <li>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.title}
      </span>
      <button onClick={() => onRemove(todo.id)}>❌</button>
    </li>
        </>
    )
}