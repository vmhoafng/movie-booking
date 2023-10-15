import React from "react";
import clsx from "clsx";
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  size?: "large" | "medium" | "small";
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
  sm?: boolean;
}
function Button({
  children,
  type,
  size,
  fullWidth,
  highlight,
  onClick,
  disabled,
  rounded,
  uppercase,
  borderWhite,
  sm,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        `
      flex
      justify-center
      px-5
      xl:px-10
      py-2
      mx-auto
      font-semibold
      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-offset-2
      select-none
      text-white
      text-lg
      shadow-xl
      shadow-black/25
      cursor-pointer
      hover:opacity-90
      transition-all
      duration-200
      font-inter
      `,
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-default",
        highlight
          ? "bg-highlight"
          : "bg-gradient-to-r from-gradientStart from-10% via-gradientMid via-50% to-gradientStop to-100%",
        rounded ? "rounded" : "rounded-full",
        uppercase && "uppercase",
        borderWhite ? "border-[2px]" : "border-0",
        sm && "px-5"
      )}
    >
      <span
        className="
          [text-shadow:1px_1px_2px_var(--tw-shadow-color)]
          shadow-black/50
          "
      >
        {children}
      </span>
    </button>
  );
}

export default Button;
