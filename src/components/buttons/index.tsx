import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  fullRounded?: boolean;
  extra?: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, children, fullRounded, extra } = props;

  return (
    <button
      className={`text-white text-sm sm:text-base bg-primary flex items-center justify-center gap-3 font-semibold hover:bg-primary-dark active:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300 ${
        fullRounded
          ? "rounded-full w-14 h-14 sm:w-20 sm:h-20"
          : "rounded-lg py-3 px-5 sm:py-4 sm:pl-7 sm:pr-8"
      } ${extra}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
