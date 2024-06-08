import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ width: "100%", backgroundColor: "#e0e0df", borderRadius: "5px" }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#76c7c0",
          height: "30px",
          borderRadius: "5px",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
