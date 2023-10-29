import { Switch } from "@headlessui/react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { useController } from "react-hook-form";
interface SwitchButtonProps {
  disabled?: boolean;
  value: boolean;
  onChange: () => void;
}

function SwitchButton({ value, onChange, disabled }: SwitchButtonProps) {
  return (
    <Switch
      disabled={disabled}
      checked={value}
      onChange={onChange}
      className={clsx(
        `relative inline-flex h-[25px] w-[50px] items-center rounded-full`,
        value ? "bg-lightPrimary" : "bg-white/70",
        disabled && "opacity-80"
      )}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          value ? "translate-x-[26px]" : "translate-x-[3px]"
        } inline-block h-5 w-5 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}
export default SwitchButton;
