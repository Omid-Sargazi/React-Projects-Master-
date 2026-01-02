const API_BASE = "https://localhost:5247/api";

export async function register(username, email, password) {
  const response = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
    credentials: "include" // 👈 ضروری برای نگهداری session
  });
  return response;
}

export async function login(username, password) {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include"
  });
  return response;
}

export async function getTasks() {
  const response = await fetch(`${API_BASE}/tasks`, {
    credentials: "include"
  });
  return response;
}

export async function createTask(title) {
  const response = await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, isDone: false }),
    credentials: "include"
  });
  return response;
}

export async function updateTask(id, title, isDone) {
  const response = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, isDone }),
    credentials: "include"
  });
  return response;
}

export async function deleteTask(id) {
  const response = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "DELETE",
    credentials: "include"
  });
  return response;
}