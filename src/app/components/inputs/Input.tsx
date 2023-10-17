import React from "react";
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
  endIcon?: string;
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
        `flex w-full py-[3px]`,
        col
          ? "flex-col items-start gap-1"
          : "items-center justify-between gap-2"
      )}
    >
      <label
        htmlFor={id}
        className={clsx(
          "text-white/90 text-[15px] font-bold leading-6",
          !col && "min-w-[200px]"
        )}
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
      <div className="w-full">
        <input
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          pattern={
            type === "tel" ? "^(03|07|08|09|01[2-9])+([0-9]{8})$" : undefined
          }
          // {...register(id, { required })}
          className={clsx(
            `
            form-input
            block
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
            col ? "h-10" : "h-[35px]"
          )}
        />
      </div>
    </div>
  );
};
export default Input;
