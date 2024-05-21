import { useState, useEffect } from "react";

function useMemo(callback, dependencies) {
  const [value, setValue] = useState(() => callback());

  useEffect(() => {
    setValue(callback());
  }, dependencies);

  return value;
}

export default useMemo;
