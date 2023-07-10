/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

type CarouselState = {
  images: string[];
  activeImage: number;
  setActiveImage: (index: number) => void;
  selectNextImage: () => void;
  selectPreviousImage: () => void;
};

const initialState = {
  images: [],
  activeImage: 0,
  setActiveImage: (_index: number) => {},
  selectNextImage: () => {},
  selectPreviousImage: () => {},
};

export const carouselContext = createContext<CarouselState>(initialState);

interface CarouselContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

// Context logic

// Note: In this case it's ok to hardcode the images, but in a real scenario
// you would probably want to pass them as props to the provider or store them
// in an state.
const images = [
  "/images/image-product-1.webp",
  "/images/image-product-2.webp",
  "/images/image-product-3.webp",
  "/images/image-product-4.webp",
];

export const CarouselContextProvider = ({
  children,
}: CarouselContextProviderProps) => {
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
    <carouselContext.Provider
      value={{
        images,
        activeImage,
        setActiveImage,
        selectPreviousImage,
        selectNextImage,
      }}
    >
      {children}
    </carouselContext.Provider>
  );
};
