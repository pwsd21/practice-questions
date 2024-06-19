import { useCallback, useEffect, useState } from "react";

const ImageCarousel = ({ images }) => {
  const [active, setActive] = useState(0); // State to keep track of the active image index

  // Handler for previous image
  const handlePrev = () => {
    setActive((active) => (active === 0 ? images.length - 1 : active - 1));
  };

  // Handler for next image, using useCallback to memoize the function
  const loadNextImage = useCallback(() => {
    setActive((active) => (active + 1) % images.length);
  }, [images.length]);

  // Effect to automatically change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      loadNextImage();
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [loadNextImage]); // Dependencies array to ensure the effect runs correctly

  return (
    <div className="flex p-2 justify-center items-center relative">
      {/* Left arrow to go to the previous image */}
      <img
        src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg"
        alt="left arrow"
        className="h-10 -mr-4 cursor-pointer"
        onClick={handlePrev}
      />

      {/* Previous image */}
      <img
        src={images[active === 0 ? images.length - 1 : active - 1]}
        alt="previous"
        className="border border-black opacity-50"
      />

      {/* Current image */}
      <img
        src={images[active]}
        alt="current"
        className="border border-black absolute z-10"
      />

      {/* Next image */}
      <img
        src={images[(active + 1) % images.length]}
        alt="next"
        className="border border-black opacity-50"
      />

      {/* Right arrow to go to the next image */}
      <img
        className="h-10 -ml-4 cursor-pointer"
        src="https://w7.pngwing.com/pngs/348/5/png-transparent-arrow-emoji-computer-icons-right-arrow-angle-triangle-black.png"
        alt="right arrow"
        onClick={loadNextImage}
      />
    </div>
  );
};

export default ImageCarousel;
