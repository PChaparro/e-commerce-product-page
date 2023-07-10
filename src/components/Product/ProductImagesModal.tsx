import { Carousel } from "../Carousel/Carousel";

interface ProductImagesModalProps {
  toggleModalVisibility: () => void;
}

export const ProductImagesModal = ({
  toggleModalVisibility,
}: ProductImagesModalProps) => {
  return (
    <div
      className="fixed top-0 left-0 z-20 grid w-full h-screen bg-black/75 place-content-center animate-fade"
      onClick={toggleModalVisibility}
    >
      <div className="max-w-xl">
        <button className="block mb-6 ml-auto" onClick={toggleModalVisibility}>
          <img
            src="icons/icon-close-light.svg"
            alt="Close menu icon"
            width={24}
            height={24}
          />
        </button>
        <Carousel />
      </div>
    </div>
  );
};
