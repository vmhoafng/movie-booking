import { Switch } from "@headlessui/react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SwitchButtonProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  disabled?: boolean;
  error: FieldErrors;
  enabled: boolean;
  setEnabled: () => void;
}

function SwitchButton({
  enabled,
  setEnabled,
  register,
  id,
  disabled,
  error,
}: SwitchButtonProps) {
  console.log(error);

  return (
    <Switch
      disabled={disabled}
      {...register(id)}
      checked={!!enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-lightPrimary" : "bg-white/70"
      } relative inline-flex h-[25px] w-[50px] items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-[26px]" : "translate-x-[3px]"
        } inline-block h-5 w-5 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}
export default SwitchButton;
