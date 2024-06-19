import { useEffect, useRef } from "react";

// Custom hook `useDebounce` to debounce a callback function
const useDebounce = (callback, delay) => {
  // Create a ref to hold the timer ID
  let timerRef = useRef(null);

  // Debounce function `myDebounce` that executes the callback after a delay
  const myDebounce = (...args) => {
    // If there is an existing timer, clear it
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set a new timer to execute the callback after the specified delay
    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  // Clean-up function using useEffect to clear the timer on unmount or delay change
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay]); // Re-run if the delay changes

  // Return the debounced function `myDebounce`
  return myDebounce;
};

export default useDebounce;

// USAGE
// const debouncedSearch = useDebounce(handleSearch, 1000)

// GENERAL LOGIC
// const myDebounce = (cb, d) => {
//     let timer;
//     return function(...args) {
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             cb(...args);
//         }, d);
//     }
// }
