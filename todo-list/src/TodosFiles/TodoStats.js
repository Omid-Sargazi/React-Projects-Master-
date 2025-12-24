// 📁 src/components/TodoStats.jsx
import React from 'react';

function TodoStats({ todos }) {

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;
  
  return (
    <div className="stats-container">
      <h2>📊 آمار کارها</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{totalTodos}</span>
          <span className="stat-label">کل کارها</span>
        </div>
        <div className="stat-card completed">
          <span className="stat-number">{completedTodos}</span>
          <span className="stat-label">انجام شده</span>
        </div>
        <div className="stat-card pending">
          <span className="stat-number">{pendingTodos}</span>
          <span className="stat-label">مانده</span>
        </div>
      </div>
    </div>
  );
}

export default TodoStats;