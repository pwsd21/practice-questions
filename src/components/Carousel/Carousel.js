import { useEffect, useState } from "react";

const ImageCarousel = ({ images }) => {
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    console.log("Handle");
    setActive((active) => (active === 0 ? images.length - 1 : active - 1));
  };

  const loadNextImage = () => {
    setActive((active) => (active + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      loadNextImage();
    }, 2000);

    return () => clearInterval(interval);
  }, [loadNextImage]);

  return (
    <div className="flex p-2 justify-center items-center">
      <img
        src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-left-arrow-icon-png-image_956431.jpg"
        alt="left arrow"
        className="h-10 -mr-4"
        onClick={handlePrev}
      />
      <img
        src={images[active === 0 ? images.length - 1 : active - 1]}
        alt="current"
        className="border border-black"
      />
      <img
        src={images[active]}
        alt="current"
        className="border border-black absolute"
      />
      <img
        src={images[(active + 1) % images.length]}
        alt="current"
        className="border border-black "
      />
      <img
        className="h-10 -ml-4"
        src="https://w7.pngwing.com/pngs/348/5/png-transparent-arrow-emoji-computer-icons-right-arrow-angle-triangle-black.png"
        alt="right arrow"
        onClick={loadNextImage}
      />
    </div>
  );
};

export default ImageCarousel;
