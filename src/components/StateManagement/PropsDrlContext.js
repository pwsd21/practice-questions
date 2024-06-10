import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProfile() {
  const { user } = useContext(UserContext);

  return <p>{user.name}</p>;
}

function NestedComponent() {
  return <UserProfile />;
}

function App() {
  const [user] = useState({ name: "John Doe" });

  return (
    <UserContext.Provider value={{ user }}>
      <NestedComponent />
    </UserContext.Provider>
  );
}
