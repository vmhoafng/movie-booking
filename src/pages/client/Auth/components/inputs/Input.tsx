import React from "react";
import {clsx} from "clsx";
interface InputProps {
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder,
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
  return (
    <div className={"flex flex-col items-start gap-3"}>
      <label htmlFor={id} className="text-white/70 uppercase leading-8">
        {label}
        {required && <span className="text-red-500">*</span>}
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
            h-9
            min-w-[200px]
            w-full
            border-0
            border-b
            pb-1
            shadow-sm
            bg-transparent
            outline-0
            text-white
            border-borderPrimary
            placeholder:text-borderPrimary
            selection:bg-highlight
            selection:text-primary
          `,
          // errors[id] && "focus:ring-rose-500",
          disabled && "opacity-50 cursor-default"
        )}
      />
    </div>
  );
};
export default Input;
