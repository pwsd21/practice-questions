import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function LoginComponent() {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return <button onClick={handleLogin}>Login</button>;
}

function DisplayComponent() {
  const { isAuthenticated } = useContext(AuthContext);

  return <p>{isAuthenticated ? "Logged In" : "Logged Out"}</p>;
}

function App() {
  return (
    <AuthProvider>
      <LoginComponent />
      <DisplayComponent />
    </AuthProvider>
  );
}
