import React from "react";
import clsx from "clsx";
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  rounded?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  highlight?: boolean;
  uppercase?: boolean;
  borderWhite?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}
function Button({
  children,
  type,
  fullWidth,
  highlight,
  secondary,
  onClick,
  disabled,
  rounded,
  uppercase,
  borderWhite,
  small,
  medium,
  large,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        `
      flex
      justify-center
      py-2
      mx-auto
      font-semibold
      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-offset-2
      select-none
      text-white
      shadow-black/25
      cursor-pointer
      hover:opacity-90
      transition-all
      duration-200
      shadow-[2px_2px_8px_0px_rgba(0,0,0,0.25)]
      `,
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-default",
        highlight && "bg-highlight",
        secondary && "bg-borderColor",
        !highlight &&
          !secondary &&
          "bg-gradient-to-r from-gradientStart from-10% via-gradientMid via-50% to-gradientStop to-100%",
        rounded ? "rounded" : "rounded-full",
        uppercase && "uppercase",
        borderWhite ? "border-[2px]" : "border-0",
        small && "px-5",
        medium && "px-10",
        large && "px-[66px]"
      )}
    >
      {children}
    </button>
  );
}

export default Button;
