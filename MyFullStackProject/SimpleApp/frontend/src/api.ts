const API_BASE = "http://localhost:5247/api";

// 🔹 گرفتن token از localStorage
function getToken() {
  return localStorage.getItem("token");
}

export async function register(username: string, email: string, password: string) {
  const response = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return response;
}

export async function login(username: string, password: string) {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  let data: any = null;
  try {
    data = await response.json();
  } catch {
    // اگر سرور body نداد، parse نکن
    data = {};
  }

  if (response.ok && data.token) {
    localStorage.setItem("token", data.token);
  }

  return { response, data };
}

export async function logout() {
  localStorage.removeItem("token"); // ✅ حذف JWT از مرورگر
}

export async function getTasks() {
  const token = getToken();
  const response = await fetch(`${API_BASE}/tasks`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // ✅ ارسال JWT در Header
    },
  });
  return response;
}

export async function createTask(title: string) {
  const token = getToken();
  const response = await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, isDone: false }),
  });
  return response;
}

export async function updateTask(id: number, title: string, isDone: boolean) {
  const token = getToken();
  const response = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, isDone }),
  });
  return response;
}

export async function deleteTask(id: number) {
  const token = getToken();
  const response = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
