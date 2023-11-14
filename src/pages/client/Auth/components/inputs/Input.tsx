import React from "react";
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
   min?: string;
   max?: string;
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
   min,
   max,
}) => {
   return (
      <div id="auth" className="flex flex-col items-start gap-1">
         <label
            htmlFor={id}
            className="text-white/70 uppercase leading-8 text-[15px]"
         >
            {label}
            {required && (
               <span className="text-red-500 text-sm lowercase">
                  *{errors[id]?.message?.toString()}
               </span>
            )}
         </label>
         <input
            id={id}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete="off"
            {...register(id)}
            // onChange={(e) => setValue(e.target.value)}
            className={clsx(
               `
               block
               h-9
               w-full
               px-0
               pb-1
               shadow-sm
               bg-transparent
               outline-0
               focus:ring-0
               text-white
               border-0
               border-b
               selection:bg-borderColor
               placeholder:text-borderColor
               focus:ring-borderColor
               focus:border-borderColor
               `,
               errors[id]?.message ? "border-rose-500" : "border-borderColor",
               disabled && "opacity-50 cursor-default"
            )}
         />
      </div>
   );
};
export default Input;
