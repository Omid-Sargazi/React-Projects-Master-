import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm";
import TaskPage from "./components/TaskPage";
import "./index.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/tasks">Tasks</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
