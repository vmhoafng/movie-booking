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
   placeholder: string;
   borderWhite?: boolean;
   col: boolean;
   sx: CSSProperties;
   variant: "default" | "primary";
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
            `flex`,
            col ? "flex-col items-start gap-1" : "items-center justify-between"
         )}
      >
         <label
            htmlFor={id}
            className="text-white font-semibold leading-6 min-w-fit"
         >
            {label}
            {!col && ":"}
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
            h-10
            min-w-[200px]
            w-full
            rounded
            border
            px-4
            shadow-sm
            bg-white/10
            outline-0
            text-white
            border-borderPrimary
            placeholder:text-white/40
            selection:bg-highlight
            selection:text-primary
            autofill:bg-highlight
            autofill:text-primary
          `,
               // errors[id] && "focus:ring-rose-500",
               borderWhite && "border-white/50",
               disabled && "opacity-50 cursor-default",
               !col && "max-w-lg"
            )}
         />
      </div>
   );
};
export default Input;
