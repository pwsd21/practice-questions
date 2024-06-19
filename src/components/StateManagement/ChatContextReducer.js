// context/ChatContext.js
import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  user: null,
  password: null
  // Add more state properties as needed
};

const chatReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    // Add more cases as needed for other state updates
    default:
      return state;
  }
};

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export default ChatProvider;

// Provide to the App in index.js
{/* <ChatProvider>
      <App />
    </ChatProvider> */}


// Usage
// ExampleComponent.js
import React from "react";
import { useChat } from "./context/ChatContext";

const ExampleComponent = () => {
  const { state, dispatch } = useChat();

  const handleLogin = () => {
    // Simulate login action
    dispatch({ type: 'SET_USER', payload: { name: 'John Doe', id: 1 } });
  };

  const handleLogout = () => {
    // Simulate logout action
    dispatch({ type: 'SET_USER', payload: null });
  };

  const handlePasswordChange = (newPassword) => {
    // Update password action
    dispatch({ type: 'SET_PASSWORD', payload: newPassword });
  };

  return (
    <div>
      <h2>User: {state.user ? state.user.name : 'None'}</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <input
        type="password"
        value={state.password || ''}
        onChange={(e) => handlePasswordChange(e.target.value)}
        placeholder="Enter Password"
      />
    </div>
  );
};

export default ExampleComponent;
