interface SlideButtonProps {
  direction: "left" | "right";
  alwaysShow: boolean;
  clickCallback: () => void;
}

const directionPositionStyles = {
  left: "left-5 md:-left-8 animate-fade-right",
  right: "right-5 md:-right-8 animate-fade-left",
};

const directionIconsPath = {
  left: "/icons/icon-previous.svg",
  right: "/icons/icon-next.svg",
};

export const SlideButton = ({
  direction,
  alwaysShow,
  clickCallback,
}: SlideButtonProps) => {
  return (
    <button
      className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-full aspect-square grid w-10 md:w-16 place-content-center shadow ${
        directionPositionStyles[direction]
      } ${alwaysShow ? "" : "md:hidden"}`}
      onClick={(e) => {
        e.stopPropagation();
        clickCallback();
      }}
    >
      <img
        src={`${directionIconsPath[direction]}`}
        className="md:w-3"
        alt="Previous"
        width={10}
        height={10}
      />
    </button>
  );
};
