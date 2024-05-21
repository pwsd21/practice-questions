import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  let timerRef = useRef(null);

  const myDebounce = (...args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay]);
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
