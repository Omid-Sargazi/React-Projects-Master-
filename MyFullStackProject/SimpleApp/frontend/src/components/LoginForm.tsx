import React, { useState, FormEvent } from "react";
import { login } from "../api";

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

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


   const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: "success" | "error" }>({
    open: false,
    message: "",
    severity: "success",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const res = await login(username, password);
      if (res.ok) {
        setMessage("✅ Logged in successfully!");
      } else {
        const error = await res.text();
        setMessage(`❌ ${error}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Network error occurred.");
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
