import clsx from "clsx";
import React from "react";

interface BookingSubTitleProps {
  children: React.ReactNode;
}

function BookingSubtitle({ children }: BookingSubTitleProps) {
  return (
    <div className={clsx(`uppercase text-sm leading-6 text-white/60`)}>
      {children}
    </div>
  );
}

export default BookingSubtitle;
