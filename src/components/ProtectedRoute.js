import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  // Perform authentication logic here
  // For demonstration purposes, assume isAuthenticated is determined by checking if a token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

// USAGE

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component

// Example components for routes
const HomePage = () => <h2>Home Page</h2>;
const LoginPage = () => <h2>Login Page</h2>;
const DashboardPage = () => <h2>Dashboard Page - Protected Content</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Route index element={<DashboardPage />} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

