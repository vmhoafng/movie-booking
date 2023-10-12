import React from "react";
import clsx from "clsx";
function Button({ children, type, fullWidth, highlight, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        `
      flex
      justify-center
      rounded-full
      px-10
      py-2
      text-lg
      font-semibold
      focus-visible:outline
      focus-visible:outline-2
      focus-visible:outline-offset-2
      select-none
      text-white
      shadow-md
      shadow-black/25
      border-0
      cursor-pointer
      hover:opacity-90
      transition-all
      duration-200
      `,
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-default",
        highlight
          ? "bg-highlight"
          : "bg-gradient-to-r from-gradientStart from-10% via-gradientMid via-50% to-gradientStop to-100%"
      )}
    >
      <span
        className="
          [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)]
          shadow-black/50
          "
      >
        {children}
      </span>
    </button>
  );
}

export default Button;
