import React from "react";
import clsx from "clsx";
interface ButtonProps {
   type?: "button" | "submit" | "reset" | undefined;
   size: "large" | "medium" | "small";
   fullWidth?: boolean;
   children: React.ReactNode;
   onClick?: () => void;
   secondary?: boolean;
   danger?: boolean;
   disabled?: boolean;
   highlight?: boolean;
}
function Button({
   children,
   type,
   size,
   fullWidth,
   highlight,
   onClick,
   disabled,
}: ButtonProps) {
   return (
      <button
         onClick={onClick}
         type={type}
         className={clsx(
            `
            flex
            justify-center
            rounded-full
            mx-auto
            font-bold
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            select-none
            text-base
            text-white
            shadow-md
            shadow-black/30
            border-0
            cursor-pointer
            hover:opacity-90
            hover:shadow-lg
            transition-all
            duration-200
            `,
            fullWidth && "w-full",
            size === "large"
               ? "py-3 px-16"
               : size === "medium"
               ? "py-2 px-11"
               : "px-10 py-2",
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
