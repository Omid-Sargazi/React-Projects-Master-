import React from "react";

function TodoItem({ todo }) {
  const { id, title, completed, priority } = todo;

  // 🎯 تعیین کلاس بر اساس اولویت
  const getPriorityClass = () => {
    switch(priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''} ${getPriorityClass()}`}>
      <div className="todo-content">
        <input 
          type="checkbox" 
          checked={completed}
          readOnly
          className="todo-checkbox"
        />
        <span className="todo-title">{title}</span>
      </div>
      
      <div className="todo-actions">
        <span className="priority-badge">{priority}</span>
      </div>
    </div>
  );
}

export default TodoItem;