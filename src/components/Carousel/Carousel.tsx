import { useState } from "react";
import { SlideButton } from "./SlideButton";
import { Thumbnails } from "./Thumbnails";

const images = [
  "/images/image-product-1.webp",
  "/images/image-product-2.webp",
  "/images/image-product-3.webp",
  "/images/image-product-4.webp",
];

interface CarouselProps {
  mainImageCallback?: () => void;
}

export const Carousel = ({ mainImageCallback }: CarouselProps) => {
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
        <button
          className="block w-full"
          onClick={(e) => {
            if (!mainImageCallback) return;
            e.stopPropagation();
            mainImageCallback();
          }}
        >
          <img
            src={images[activeImage]}
            className="w-full aspect-square md:rounded-2xl"
            key={`product-image-${activeImage}`}
            alt="Fall Limited Edition Sneakers"
            width={500}
            height={500}
          />
        </button>
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
