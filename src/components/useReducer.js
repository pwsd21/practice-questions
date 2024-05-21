// GlobalStateContext.js
import React, { createContext, useReducer, useContext } from "react";

// Define initial state
const initialState = {
  count: 0,
};

// Create context
const GlobalStateContext = createContext();

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Global state provider component
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to access global state and dispatch
export const useGlobalState = () => useContext(GlobalStateContext);

// Counter.js
// import React from 'react';
// import { useGlobalState } from './GlobalStateContext';

// const Counter = () => {
//   const { state, dispatch } = useGlobalState();

//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;

// App.js
// import React from 'react';
// import Counter from './Counter';
// import { GlobalStateProvider } from './GlobalStateContext';

// const App = () => {
//   return (
//     <GlobalStateProvider>
//       <div>
//         <h1>Global State App</h1>
//         <Counter />
//       </div>
//     </GlobalStateProvider>
//   );
// };

// export default App;
