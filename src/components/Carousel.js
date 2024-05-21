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

//Usage

// import React from 'react';
// import ImageCarousel from './ImageCarousel';

// const App = () => {
//   const images = [
//     'https://example.com/image1.jpg',
//     'https://example.com/image2.jpg',
//     'https://example.com/image3.jpg'
//   ];

//   return (
//     <div>
//       <h1>Image Carousel Example</h1>
//       <ImageCarousel images={images} />
//     </div>
//   );
// };

// export default App;
