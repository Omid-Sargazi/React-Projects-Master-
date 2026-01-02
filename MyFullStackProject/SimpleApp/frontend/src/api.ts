const API_BASE = "http://localhost:5247/api";

// --- Register ---
export async function register(
  username: string,
  email: string,
  password: string
): Promise<Response> {
  const response = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
    credentials: "include", // برای نگهداری کوکی session
  });
  return response;
}

// --- Login ---
export async function login(
  username: string,
  password: string
): Promise<Response> {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });
  return response;
}

// --- Get All Tasks ---
export async function getTasks(): Promise<Response> {
  const response = await fetch(`${API_BASE}/tasks`, {
    credentials: "include",
  });
  return response;
}

// --- Create Task ---
export async function createTask(title: string): Promise<Response> {
  const response = await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, isDone: false }),
    credentials: "include",
  });
  return response;
}

// --- Update Task ---
export async function updateTask(
  id: number,
  title: string,
  isDone: boolean
): Promise<Response> {
  const response = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, isDone }),
    credentials: "include",
  });
  return response;
}

// --- Delete Task ---
export async function deleteTask(id: number): Promise<Response> {
  const response = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  return response;
}
