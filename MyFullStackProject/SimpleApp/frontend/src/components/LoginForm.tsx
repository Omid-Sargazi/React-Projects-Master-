import React, { useState, FormEvent } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import { login as loginApi } from "../api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  try {
    const { response, data } = await loginApi(username, password);

    if (response.ok && data.token) {
      login(data.token); // ✅ Context update
      setSnackbar({
        open: true,
        message: "✅ Logged in successfully! Redirecting...",
        severity: "success",
      });
      setTimeout(() => navigate("/tasks"), 2000);
    } else {
      const msg = data?.message || "Invalid credentials";
      setSnackbar({ open: true, message: msg, severity: "error" });
    }
  } catch (err) {
    console.error("Login error:", err);
    setSnackbar({ open: true, message: "Network error", severity: "error" });
  }
};


  return (
    <Card sx={{ maxWidth: 400, mx: "auto", mt: 4, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" sx={{ bgcolor: "#4a69bd" }}>
              Login
            </Button>
          </Stack>
        </form>
      </CardContent>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Card>
  );
}
