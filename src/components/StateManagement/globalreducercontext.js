// 1. Create a Context
import React, { createContext, useReducer, useContext } from "react";

// Create the context
const CounterContext = createContext();

// 2. Create a Reducer Function
const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

// 3. Create a Context Provider Component
function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}
// 4. Use the Context in Your Components

import React from "react";
import ReactDOM from "react-dom";
import { CounterProvider, CounterContext } from "./CounterContext";

function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
