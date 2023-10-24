import clsx from "clsx";
import React from "react";

interface BookingSubTitleProps {
  children: React.ReactNode;
}

function BookingSubtitle({ children }: BookingSubTitleProps) {
  return (
    <div className={clsx(`text-sm md:leading-6 truncate text-white/60`)}>
      {children}
    </div>
  );
}

export default BookingSubtitle;
