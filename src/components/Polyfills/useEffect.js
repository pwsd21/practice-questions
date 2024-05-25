import { useState, useRef, useEffect as useNativeEffect } from "react";

function useEffect(effect, deps) {
  const hasMounted = useRef(false);
  const prevDeps = useRef(deps);

  useNativeEffect(() => {
    if (hasMounted.current) {
      // Check if dependencies have changed
      if (!deps || !prevDeps.current.every((dep, i) => dep === deps[i])) {
        effect();
        prevDeps.current = deps;
      }
    } else {
      // On initial mount, run the effect
      hasMounted.current = true;
      effect();
    }
  });

  useNativeEffect(() => {
    return () => {
      hasMounted.current = false;
    };
  }, []);
}

export default useEffect;
