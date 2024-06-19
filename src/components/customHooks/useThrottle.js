import { useRef, useCallback } from "react";

// Custom hook `useThrottle` to throttle a callback function
const useThrottle = (callback, delay) => {
  // Ref to store the timestamp of the last function call
  const lastCallRef = useRef(0);
  // Ref to store the timer ID
  const timerRef = useRef(null);

  // Throttled callback function `throttledCallback`
  const throttledCallback = useCallback(
    (...args) => {
      const now = Date.now();

      // If there was a previous call and the current time is within the throttle delay
      if (lastCallRef.current && now < lastCallRef.current + delay) {
        // Clear the previous timer
        clearTimeout(timerRef.current);
        // Set a new timer to execute the callback after the remaining throttle delay
        timerRef.current = setTimeout(() => {
          // Update the last call timestamp
          lastCallRef.current = Date.now();
          // Execute the callback
          callback(...args);
        }, lastCallRef.current + delay - now);
      } else {
        // If not throttled, update the last call timestamp and execute the callback immediately
        lastCallRef.current = now;
        callback(...args);
      }
    },
    [callback, delay]
  );

  // Return the throttled callback function
  return throttledCallback;
};

export default useThrottle;

// const myThrottle = (cb, delay) => {
//     let lastCall = 0;
//     let timer;

//     return function (...args) {
//         const now = Date.now();

//         if (lastCall && now < lastCall + delay) {
//             clearTimeout(timer);
//             timer = setTimeout(() => {
//                 lastCall = now;
//                 cb(...args);
//             }, delay);
//         } else {
//             lastCall = now;
//             cb(...args);
//         }
//     };
// };

// export default myThrottle;
