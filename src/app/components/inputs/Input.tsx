import React, { CSSProperties } from "react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder?: string;
  borderWhite?: boolean;
  col?: boolean;
}
const Input = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder,
  borderWhite,
  col,
}: InputProps) => {
  return (
    <div
      className={clsx(
        `flex gap-2 w-full`,
        col ? "flex-col items-start gap-1" : "items-center justify-between"
      )}
    >
      <label
        htmlFor={id}
        className="text-white/90 text-[15px] font-bold leading-6 min-w-[200px]"
      >
        <span
          className="
                  [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)]
                  shadow-black/50
          "
        >
          {label}
          {!col && ":"}
        </span>
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        // {...register(id, { required })}
        className={clsx(
          `
            form-input
            block
            h-[35px]
            min-w-[200px]
            w-full
            rounded
            border
            px-[15px]
            shadow-sm
            bg-white/10
            outline-0
            text-white/90
            border-borderColor
            placeholder:text-white/40
            selection:bg-highlight
            selection:text-primary
            autofill:bg-highlight
            autofill:text-primary
            focus:border-borderColor
          `,
          // errors[id] && "focus:ring-rose-500",
          borderWhite && "border-white/50 focus:border-white/50",
          disabled && "opacity-50 cursor-default",
          !col && "max-w-lg"
        )}
      />
    </div>
  );
};
export default Input;
