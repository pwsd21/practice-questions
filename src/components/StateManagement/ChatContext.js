import { createContext, useContext, useState } from "react";

const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Optional - we can memoize state value to avoid re-renders
  // const value = useMemo(() => ({ user, setUser }), [user]);
  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;

// Wrap App with ChatProvider in index.js

// Usage
// import { ChatState } from "";
// const { user, setUser } = ChatState;
