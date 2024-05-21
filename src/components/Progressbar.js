import React, { useState, useEffect } from "react";

const ProgressBar = ({ duration, interval }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (interval / duration) * 100;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, interval]);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f0f0f0",
        borderRadius: "4px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "20px",
          backgroundColor: "#007bff",
          borderRadius: "4px",
          transition: `width ${interval / 1000}s linear`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
