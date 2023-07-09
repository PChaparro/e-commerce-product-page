import { useState } from "react";
import { SlideButton } from "./SlideButton";

export const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  const selectNextImage = () => {
    const next = activeImage === 3 ? 0 : activeImage + 1;
    setActiveImage(next);
  };

  const selectPreviousImage = () => {
    const previous = activeImage === 0 ? 3 : activeImage - 1;
    setActiveImage(previous);
  };

  return (
    <div>
      {/* Current active image */}
      <div className="relative">
        <img
          src={`/images/image-product-${activeImage + 1}.webp`}
          className="aspect-square w-full animate-fade"
          key={`product-image-${activeImage}`}
          alt="Product 1"
          width={500}
          height={500}
        />
        <SlideButton direction="left" clickCallback={selectPreviousImage} />
        <SlideButton direction="right" clickCallback={selectNextImage} />
      </div>
      {/* Thumbnails */}
    </div>
  );
};
