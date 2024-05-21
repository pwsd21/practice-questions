import React, { useState } from "react";
import "./Slider.css"; // Import CSS for styling

const Slider = ({ min, max, step, onChange }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <span className="slider-value">{value}</span>
    </div>
  );
};

export default Slider;

//Usage
// import React, { useState } from 'react';
// import Slider from './Slider';

// const App = () => {
//   const [sliderValue, setSliderValue] = useState(50);

//   const handleSliderChange = (newValue) => {
//     setSliderValue(newValue);
//   };

//   return (
//     <div>
//       <h1>Slider Example</h1>
//       <Slider min={0} max={100} step={1} value={sliderValue} onChange={handleSliderChange} />
//       <p>Value: {sliderValue}</p>
//     </div>
//   );
// };

// export default App;
