import React from "react";

import TodoItem from "./TodoItem";

function TodoList({todos})
{
    if (todos.length === 0) {
    return (
      <div className="empty-state">
        🎉 هیچ کاری ثبت نشده است!
      </div>
    );
  }

  return(
     <div className="todo-list">
      <h2>📋 لیست کارها</h2>
      <div className="list-container">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}


export default TodoList;