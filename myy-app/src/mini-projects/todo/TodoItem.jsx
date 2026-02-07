export default function TodoItem({ todo, onToggle, onDelete, children }) {
  return (
    <li style={{ marginBottom: "8px" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          marginLeft: "8px"
        }}
      >
        {children}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
}
