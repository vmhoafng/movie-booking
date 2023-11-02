import clsx from "clsx";
import React from "react";

interface StatusProps {
  status: "active" | "warning" | "disabled";
  children: string;
}

function Status({ status, children }: StatusProps) {
  return (
    <div
      className={clsx(
        "px-2 py-1 text-xs font-bold w-fit rounded",
        status === "active" && "bg-highlight/20 text-highlight",
        status === "warning" && "bg-warning/20 text-warning",
        status === "disabled" && "bg-error/20 text-error"
      )}
    >
      {children}
    </div>
  );
}

export default Status;
