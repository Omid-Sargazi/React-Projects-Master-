import TodoItem from "./TodoItem";

export default function TodoList()
{
    return(
        <>
        <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
        </>
    )
}