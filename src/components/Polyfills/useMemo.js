import { useRef, useEffect } from "react";

function useMemo(callback, dependencies) {
  const valueRef = useRef();
  const dependenciesRef = useRef();

  // Check if dependencies have changed
  const hasChanged =
    !dependenciesRef.current ||
    !dependencies.every((dep, i) => dep === dependenciesRef.current[i]);

  if (hasChanged) {
    valueRef.current = callback();
    dependenciesRef.current = dependencies;
  }

  return valueRef.current;
}

export default useMemo;
