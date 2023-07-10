import { useContext } from "react";
import { carouselContext } from "../../context/CarouselContext";
import { SlideButton } from "./SlideButton";
import { Thumbnails } from "./Thumbnails";

interface CarouselProps {
  alwaysShowArrows: boolean;
  mainImageCallback?: () => void;
}

export const Carousel = ({
  mainImageCallback,
  alwaysShowArrows,
}: CarouselProps) => {
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
        <SlideButton
          direction="left"
          clickCallback={selectPreviousImage}
          alwaysShow={alwaysShowArrows}
        />
        <SlideButton
          direction="right"
          clickCallback={selectNextImage}
          alwaysShow={alwaysShowArrows}
        />
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
