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
            `leading-6 `,
            highlight
               ? "text-highlight font-semibold text-base xl:text-sm"
               : "text-white/60 font-medium md:text-sm"
         )}
      >
         {children}
      </div>
   );
}

export default BookingSubtitle;
