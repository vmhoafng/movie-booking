import React, { useState } from "react";
import { clsx } from "clsx";
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
}
const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder,
}) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col items-start gap-3">
      <label
        htmlFor={id}
        className="text-white/70 uppercase leading-8 font-[15px]"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // {...register(id, { required })}
        className={clsx(
          `
            form-input
            px-0
            block
            h-9
            w-full
            border-0
            border-b
            pb-1
            shadow-sm
            bg-transparent
            outline-0
            ring-0
            text-white
            border-borderPrimary
            placeholder:text-borderPrimary
            selection:bg-highlight
            autofill:bg-transparent
          `,
          // errors[id] && "focus:ring-rose-500",
          disabled && "opacity-50 cursor-default"
        )}
      />
    </div>
  );
};
export default Input;
