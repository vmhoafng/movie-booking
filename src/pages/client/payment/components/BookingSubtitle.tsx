import clsx from "clsx";
import React from "react";

interface BookingSubTitleProps {
  children: React.ReactNode;
  highlight?: boolean;
}

function BookingSubtitle({ children, highlight }: BookingSubTitleProps) {
  return (
    <div
      className={clsx(
        `text-sm font-semibold leading-6`,
        highlight ? "text-highlight" : "text-white/60"
      )}
    >
      <span
        className="
        [text-shadow:1px_1px_2px_var(--tw-shadow-color)]
        shadow-black/50
"
      >
        {children}
      </span>
    </div>
  );
}

export default BookingSubtitle;
