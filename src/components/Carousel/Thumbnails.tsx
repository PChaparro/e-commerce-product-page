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
    <ul className="justify-between hidden gap-8 my-8 md:flex animate-fade-up">
      {images.map((image, index) => (
        <li
          key={`thumbnail-${index}`}
          className={`cursor-pointer rounded-xl border-2 overflow-hidden transition-colors ${
            activeImage === index
              ? "border-orange-normal"
              : "border-transparent"
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
            onClick={(e) => {
              e.stopPropagation();
              clickCallback(index);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
