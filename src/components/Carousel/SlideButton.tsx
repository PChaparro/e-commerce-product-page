interface SlideButtonProps {
  direction: "left" | "right";
  clickCallback: () => void;
}

const directionPositionStyles = {
  left: "left-5",
  right: "right-5",
};

const directionIconsPath = {
  left: "/icons/icon-previous.svg",
  right: "/icons/icon-next.svg",
};

export const SlideButton = ({ direction, clickCallback }: SlideButtonProps) => {
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-full aspect-square grid w-10 place-content-center shadow md:hidden ${directionPositionStyles[direction]}`}
      onClick={clickCallback}
    >
      <img
        src={`${directionIconsPath[direction]}`}
        alt="Previous"
        width={10}
        height={10}
      />
    </button>
  );
};
