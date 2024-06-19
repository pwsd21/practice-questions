import React from "react";
import { useCounter } from "./Context";

const Counter = () => {
  const { state, dispatch } = useCounter();
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default Counter;
