import React from "react";

interface BookingTitleProps {
  children: React.ReactNode;
}

function BookingTitle({ children }: BookingTitleProps) {
  return (
    <h3 className="text-white/90 uppercase font-semibold leading-6">
      <span
        className="
        [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)]
        shadow-black/50
"
      >
        {children}
      </span>
    </h3>
  );
}

export default BookingTitle;
