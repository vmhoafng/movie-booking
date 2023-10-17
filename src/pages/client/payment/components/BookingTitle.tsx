import React from "react";

interface BookingTitleProps {
  children: React.ReactNode;
}

function BookingTitle({ children }: BookingTitleProps) {
  return (
    <h3 className="text-white/90 uppercase font-semibold leading-6">
      {children}
    </h3>
  );
}

export default BookingTitle;
