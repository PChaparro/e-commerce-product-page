interface ButtonProps {
  label: string;
  onClick?: () => void;
  iconPath?: string;
  iconAlt?: string;
}

export const Button = ({ label, onClick, iconPath, iconAlt }: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center w-full gap-4 p-4 font-semibold text-white rounded-lg shadow-xl bg-orange-normal shadow-orange-pale"
      onClick={onClick}
    >
      {iconPath && <img src={iconPath} alt={iconAlt} width={22} height={20} />}
      {label}
    </button>
  );
};
