import React, { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api";

export default function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  async function loadTasks() {
    const res = await getTasks();
    if (res.ok) {
      const data = await res.json();
      setTasks(data);
    } else {
      setTasks([]);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleCreate() {
    const res = await createTask(newTitle);
    if (res.ok) {
      setNewTitle("");
      loadTasks();
    }
  }

  async function handleToggle(task) {
    await updateTask(task.id, task.title, !task.isDone);
    loadTasks();
  }

  async function handleDelete(id) {
    await deleteTask(id);
    loadTasks();
  }

  return (
    <div>
      <h2>My Tasks</h2>
      <input
        type="text"
        placeholder="New Task"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={handleCreate}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <span
              style={{ textDecoration: t.isDone ? "line-through" : "none" }}
            >
              {t.title}
            </span>
            <button onClick={() => handleToggle(t)}>
              {t.isDone ? "Undo" : "Done"}
            </button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}