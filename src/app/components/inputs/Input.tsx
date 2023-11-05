import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Icon, { IconType } from "../Icon/Icon";
import { useState } from "react";

interface InputProps {
  label: string;
  id: string;
  type?: "text" | "textarea" | "password" | "tel" | "email" | "date" | any;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  disabled?: boolean;
  placeholder?: string;
  borderWhite?: boolean;
  col?: boolean;
  endIcon?: IconType;
  value?: string;
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
  endIcon,
  value,
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const handlePattern = (type: string) => {
    switch (type) {
      case "tel":
        const pattern = "/^(0[2-9][0-9]{8})$/";
        break;
      case "date":
        break;
      default:
        break;
    }
    return;
  };
  console.log(value);

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
        {label}
        {required && (
          <span className="text-red-500 text-sm lowercase">
            *
            {(() => {
              switch (type) {
                case "email":
                  const regex = "";
                  return `Không đúng định dạng.`;
                case "min":
                  return `Tối thiểu  kí tự.`;
                case "max":
                  return `Tối đa kí tự.`;
                default:
                  return "";
              }
            })()}
          </span>
        )}
        {!col && ":"}
      </label>
      <div className="w-full relative">
        <input
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="off"
          value={value}
          {...(register && register(id, { required }))}
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
            relative
            z-20
          `,
            errors?.[id] && "focus:ring-rose-500",
            borderWhite && "border-white/50 focus:border-white/50",
            disabled && "opacity-50 cursor-default",
            col ? "h-10" : "h-[35px]"
          )}
        />
        {endIcon && (
          <button className="select-none absolute flex items-center h-full right-[15px] top-0">
            <Icon width={20} height={20} icon={endIcon} />
          </button>
        )}
      </div>
    </div>
  );
};
export default Input;
