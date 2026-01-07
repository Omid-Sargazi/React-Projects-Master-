import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#4a69bd" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Simple Task Manager
          </Typography>

          <div>
            {!token ? (
              <>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/tasks">
                  Tasks
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
}
