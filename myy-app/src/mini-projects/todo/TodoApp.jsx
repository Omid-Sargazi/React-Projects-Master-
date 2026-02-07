export default function TodoApp()
{
    return(
        <>
        <div className="todo-app">
             <h2>Todo Mini Project</h2>

        <div>
        <input type="text" placeholder="Add new task" />
        <button>Add</button>
        </div>
        <ul>
        <li>
          <input type="checkbox" />
          Learn React
          <button>Delete</button>
        </li>
      </ul>
        </div>
        </>
    )
}