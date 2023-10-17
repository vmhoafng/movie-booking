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
  md?: boolean;
  lg?: boolean;
}
function Button({
  children,
  type,
  size,
  fullWidth,
  highlight,
  secondary,
  onClick,
  disabled,
  rounded,
  uppercase,
  borderWhite,
  sm,
  md,
  lg,
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
      text-lg
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
        sm && "px-5",
        md && "px-10",
        lg && "px-[66px]"
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
