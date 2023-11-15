import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Icon, { IconType } from "../icon/Icon";
import { useEffect, useState } from "react";

interface InputProps {
  label: string;
  id: string;
  type?: string;
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
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  const handlePattern = (type: string) => {
    let pattern = "";
    switch (type) {
      case "tel":
        pattern = "^(03|07|08|09|01[2-9])+([0-9]{8})$";
        break;
      case "date":
        pattern = "";
        break;
      default:
        pattern = "";
        break;
    }
    return pattern;
  };

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
          autoComplete="new-password"
          defaultValue={inputValue}
          {...(register && register(id, { required }))}
          className={clsx(
            `
            form-input
            h-[35px]
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
            disabled && "opacity-50 cursor-default"
          )}
        />
        {endIcon && (
          <button className="select-none absolute flex items-center h-full right-[15px] top-0">
            <Icon width={20} height={20} icon={endIcon}/>
          </button>
        )}
      </div>
    </div>
  );
};
export default Input;
