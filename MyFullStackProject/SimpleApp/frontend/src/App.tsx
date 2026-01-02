import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import TaskPage from "./components/TaskPage";
import Layout from "./components/Layout";
import { Typography } from "@mui/material";

function Home() {
  return <Typography variant="h5">Welcome to Simple Task Manager</Typography>;
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
