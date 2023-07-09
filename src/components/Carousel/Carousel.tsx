import { useState } from "react";
import { SlideButton } from "./SlideButton";
import { Thumbnails } from "./Thumbnails";

const images = [
  "/images/image-product-1.webp",
  "/images/image-product-2.webp",
  "/images/image-product-3.webp",
  "/images/image-product-4.webp",
];

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
          src={images[activeImage]}
          className="aspect-square w-full md:rounded-2xl"
          key={`product-image-${activeImage}`}
          alt="Fall Limited Edition Sneakers"
          width={500}
          height={500}
        />
        <SlideButton direction="left" clickCallback={selectPreviousImage} />
        <SlideButton direction="right" clickCallback={selectNextImage} />
      </div>
      {/* Thumbnails */}
      <Thumbnails
        images={images}
        activeImage={activeImage}
        clickCallback={setActiveImage}
      />
    </div>
  );
};
