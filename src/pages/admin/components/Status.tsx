import clsx from "clsx";
import React from "react";
const variants = {
  active: "bg-highlight/20 text-highlight",
  warning: "bg-warning/20 text-warning",
  disabled: "bg-error/20 text-error",
};
interface StatusProps {
  children: string;
  status: "active" | "warning" | "disabled";
}

function Status({ children, status }: StatusProps) {
  return (
    <div
      className={clsx(
        "px-2 py-1 text-xs font-bold w-fit rounded",
        variants[status]
      )}
    >
      {children}
    </div>
  );
}

export default Status;
