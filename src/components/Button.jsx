const Button = ({
  label,
  icon,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-forest-green text-white border-forest-green"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {icon}
    </button>
  );
};

export default Button;
