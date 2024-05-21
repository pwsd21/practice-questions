import { useState } from "react";

function useEffect(effect, deps) {
  const [prevDeps, setPrevDeps] = useState(null);

  if (!prevDeps || !deps.every((dep, i) => dep === prevDeps[i])) {
    effect();
    setPrevDeps(deps);
  }

  // No cleanup function in this basic polyfill
}

export default useEffect;
