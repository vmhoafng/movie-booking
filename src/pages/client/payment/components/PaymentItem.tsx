import clsx from "clsx";
import React from "react";
import "../css/Payment.css";
interface PaymentItemProps {
  label: string;
  disabled?: boolean;
  borderWhite?: boolean;
  col?: boolean;
  value?: string;
}
function PaymentItem({
  label,
  disabled,
  borderWhite,
  col,
  value,
}: PaymentItemProps) {
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
        className={clsx(
          "text-white/90 text-[15px] font-bold leading-6",
          !col && "min-w-[200px]"
        )}
      >
        <span
          className="
                [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)]
                shadow-black/50
        "
        >
          {label}
          {!col && ":"}
        </span>
      </label>
      <div className="w-full relative">
        <div
          className={clsx(
            `
          w-full
          max-w-[210px]
          rounded
          border
          px-[15px]
          shadow-sm
          bg-white/10
          text-white/90
          border-borderColor
          selection:bg-highlight
          selection:text-primary
          overflow-x-scroll
          overflow-y-hidden
          container-snap
        `,
            borderWhite && "border-white/50 focus:border-white/50",
            disabled && "opacity-50 cursor-default",
            col ? "h-10 leading-10" : "h-[35px] leading-[35px]"
          )}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

export default PaymentItem;
