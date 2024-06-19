import { useState, useRef, useEffect as useNativeEffect } from "react";

function useEffect(effect, deps) {
  const hasMounted = useRef(false); // Ref to track component mount state
  const prevDeps = useRef(deps); // Ref to store previous dependencies

  useNativeEffect(() => {
    if (hasMounted.current) {
      // Check if dependencies have changed
      if (!deps || !prevDeps.current.every((dep, i) => dep === deps[i])) {
        effect(); // Call the effect function if dependencies have changed
        prevDeps.current = deps; // Update previous dependencies
      }
    } else {
      // On initial mount, run the effect
      hasMounted.current = true; // Mark component as mounted
      effect(); // Call the effect function on initial mount
    }
  });

  // Cleanup function to reset hasMounted on unmount
  useNativeEffect(() => {
    return () => {
      hasMounted.current = false; // Reset hasMounted on component unmount
    };
  }, []);
}

export default useEffect;
