import { useRef, useEffect } from "react";

function useMemo(callback, dependencies) {
  const valueRef = useRef(); // Ref to store the memoized value
  const dependenciesRef = useRef(); // Ref to store the previous dependencies

  // Check if dependencies have changed
  const hasChanged =
    !dependenciesRef.current || // Check if dependenciesRef is empty (initial render)
    !dependencies.every((dep, i) => dep === dependenciesRef.current[i]); // Check if every dependency has changed

  if (hasChanged) {
    valueRef.current = callback(); // Compute the new value using the callback function
    dependenciesRef.current = dependencies; // Update the dependenciesRef to the current dependencies
  }

  return valueRef.current; // Return the memoized value
}

export default useMemo;
