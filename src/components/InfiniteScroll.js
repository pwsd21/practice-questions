import React, { useState, useEffect, useCallback } from "react";

const InfiniteScrollList = () => {
  const [count, setCount] = useState(50);

  const elements = [];
  for (let i = 1; i <= count; i++) {
    elements.push(<div key={i}>{i}</div>);
  }

  // infinite scroll logic
  const onScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight - 30
    ) {
      setCount((prevCount) => prevCount + 50);
    }
  }, []);

  useEffect(() => {
    // adding listener
    window.addEventListener("scroll", onScroll);

    // removing listener
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return <section>{elements}</section>;
};

export default InfiniteScrollList;
