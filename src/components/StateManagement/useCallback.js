// In this example, we have a simple counter that increments and decrements a value.
//We use useCallback to memoize the increment and decrement functions.
// It returns a memoized version of the callback function that only changes if one of the dependencies has changed.

import React, { useState, useCallback } from "react";

const Counter = React.memo(({ onIncrement, onDecrement }) => {
  console.log("Counter re-rendered");
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Counter onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}

export default App;
