import React from "react";

const MouseTracker = ({ render }) => {
  const handleMouseMove = (event) => {
    render(event);
  };

  return <div onMouseMove={handleMouseMove}>Track mouse position</div>;
};

const App = () => {
  return (
    <MouseTracker
      render={(event) => (
        <div>
          Mouse position: {event.clientX}, {event.clientY}
        </div>
      )}
    />
  );
};

export default App;
