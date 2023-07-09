interface ThumbnailsProps {
  activeImage: number;
  images: string[];
  clickCallback: (index: number) => void;
}

export const Thumbnails = ({
  images,
  activeImage,
  clickCallback,
}: ThumbnailsProps) => {
  return (
    <ul className="hidden md:flex justify-between gap-8 my-8 animate-fade-up">
      {images.map((image, index) => (
        <li
          key={`thumbnail-${index}`}
          className={`cursor-pointer rounded-xl border-2 border-transparent overflow-hidden transition-colors ${
            activeImage === index ? "border-orange-normal" : ""
          }`}
        >
          <img
            src={image}
            className={`aspect-square w-full transition-opacity hover:opacity-50 ${
              activeImage === index ? "opacity-50" : ""
            }`}
            alt="Fall Limited Edition Sneakers"
            width={100}
            height={100}
            onClick={() => clickCallback(index)}
          />
        </li>
      ))}
    </ul>
  );
};
