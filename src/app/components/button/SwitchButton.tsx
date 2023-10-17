import { Switch } from "@headlessui/react";

interface SwitchButtonProps {
  enabled: boolean;
  setEnabled: () => void;
}

function SwitchButton({ enabled, setEnabled }: SwitchButtonProps) {
  return (
    <Switch
      checked={enabled}
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
