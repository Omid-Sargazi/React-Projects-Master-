import { useState } from "react";
export default function SimpleTodo()
{
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState(null);


    const addTodo = (e)=>{
        e.preventDefault();

        if (input.trim() === "") {
      setError("Todo cannot be empty");
      return;
    }

    if (input.length < 3) {
      setError("Todo must be at least 3 characters");
      return;
    }

    setTodos([...todos,{
        id:Date.now(),
        title:input,
        completed:false,
    }]);


    setInput("");
    setError(null);
    };

    const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


    return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App (Simple)</h1>

      {/* Form */}
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
        />
        <button>Add</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Todo List */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}