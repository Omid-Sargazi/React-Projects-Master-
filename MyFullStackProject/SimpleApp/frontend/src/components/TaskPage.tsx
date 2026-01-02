import React, { useEffect, useState, ChangeEvent } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // ✅ Grid جدید
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Checkbox,
  Snackbar,
  Alert,
  Stack,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
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
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      if (res.ok) {
        const data = await res.json();
        setTasks(data);
      } else {
        setSnackbar({ open: true, message: "Failed to load tasks", severity: "error" });
      }
    } catch (err) {
      setSnackbar({ open: true, message: "Network error", severity: "error" });
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async () => {
    if (!newTitle.trim()) return;
    const res = await createTask(newTitle);
    if (res.ok) {
      setSnackbar({ open: true, message: "Task added successfully!", severity: "success" });
      setNewTitle("");
      loadTasks();
    } else {
      setSnackbar({ open: true, message: "Failed to add task", severity: "error" });
    }
  };

  const handleToggle = async (task: TaskItem) => {
    const res = await updateTask(task.id, task.title, !task.isDone);
    if (res.ok) {
      loadTasks();
    }
  };

  const handleDelete = async (id: number) => {
    const res = await deleteTask(id);
    if (res.ok) {
      setSnackbar({ open: true, message: "Task deleted!", severity: "success" });
      loadTasks();
    }
  };

  return (
    <>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        My Tasks
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          value={newTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
        />
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ bgcolor: "#4a69bd" }}
          onClick={handleCreate}
        >
          Add
        </Button>
      </Stack>

      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid xs={12} sm={6} key={task.id}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                boxShadow: 2,
                backgroundColor: task.isDone ? "#d4edda" : "white",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Checkbox
                    checked={task.isDone}
                    onChange={() => handleToggle(task)}
                    color="success"
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      textDecoration: task.isDone ? "line-through" : "none",
                      color: task.isDone ? "#555" : "#2c3e50",
                    }}
                  >
                    {task.title}
                  </Typography>
                </Stack>
              </CardContent>

              <IconButton color="error" onClick={() => handleDelete(task.id)}>
                <Delete />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </>
  );
}
