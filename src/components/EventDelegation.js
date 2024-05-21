import React from "react";

const name = ["pawan", "jatin", "Gautam"];

const EventDelegation = () => {
  const handleClick = (e) => {
    if (e.target.tagName === "LI") {
      console.log(e.target.textContent);
    }
  };
  return (
    <div className="main" onClick={handleClick}>
      <h1>Ram Ram Bhai</h1>
      <ul>
        {name.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventDelegation;
