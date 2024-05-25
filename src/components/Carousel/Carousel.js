import React, { useState } from "react";
import "./ImageCarousel.css"; // Import CSS for styling

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPreviousImage} className="prev-button">
        Previous
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="carousel-image"
      />
      <button onClick={goToNextImage} className="next-button">
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
