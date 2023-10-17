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
        `font-semibold leading-6`,
        highlight ? "text-highlight" : "text-white/60"
      )}
    >
      {children}
    </div>
  );
}

export default BookingSubtitle;
