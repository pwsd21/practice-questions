import { useRef, useCallback } from "react";

const useThrottle = (callback, delay) => {
  const lastCallRef = useRef(0);
  const timerRef = useRef(null);

  const throttledCallback = useCallback(
    (...args) => {
      const now = Date.now();

      if (lastCallRef.current && now < lastCallRef.current + delay) {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          lastCallRef.current = Date.now();
          callback(...args);
        }, lastCallRef.current + delay - now);
      } else {
        lastCallRef.current = now;
        callback(...args);
      }
    },
    [callback, delay]
  );

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
