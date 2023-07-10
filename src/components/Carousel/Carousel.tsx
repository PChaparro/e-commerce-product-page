import { useContext } from "react";
import { carouselContext } from "../../context/CarouselContext";
import { SlideButton } from "./SlideButton";
import { Thumbnails } from "./Thumbnails";

interface CarouselProps {
  mainImageCallback?: () => void;
}

export const Carousel = ({ mainImageCallback }: CarouselProps) => {
  const {
    images,
    activeImage,
    selectPreviousImage,
    selectNextImage,
    setActiveImage,
  } = useContext(carouselContext);

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
