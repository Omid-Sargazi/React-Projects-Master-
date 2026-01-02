import React, { useEffect, useState, ChangeEvent } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api";

interface TaskItem {
  id: number;
  title: string;
  isDone: boolean;
  userId?: string;
}

export default function TaskPage() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTitle, setNewTitle] = useState("");

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      if (res.ok) {
        const data = await res.json();
        setTasks(data);
      } else {
        setTasks([]);
      }
    } catch (err) {
      console.error("Error loading tasks", err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async () => {
    if (!newTitle.trim()) return;
    const res = await createTask(newTitle);
    if (res.ok) {
      setNewTitle("");
      loadTasks();
    }
  };

  const handleToggle = async (task: TaskItem) => {
    await updateTask(task.id, task.title, !task.isDone);
    loadTasks();
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div>
      <h2>My Tasks</h2>
      <input
        type="text"
        placeholder="New Task"
        value={newTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
      />
      <button onClick={handleCreate}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <span
              style={{
                textDecoration: t.isDone ? "line-through" : "none",
                marginRight: "8px",
              }}
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
