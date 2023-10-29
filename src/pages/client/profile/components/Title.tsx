import clsx from "clsx";
import React from "react";

interface BookingTitleProps {
  children: React.ReactNode;
  highlight?: boolean;
}

function BookingTitle({ children, highlight }: BookingTitleProps) {
  return (
    <h3
      className={clsx(
        `font-bold text-sm md:leading-6 uppercase`,
        highlight ? "text-highlight" : "text-white/90 "
      )}
    >
      {children}
    </h3>
  );
}

export default BookingTitle;
