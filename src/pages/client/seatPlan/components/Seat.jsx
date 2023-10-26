import React from "react";
import clsx from "clsx";

const Seat = ({ seat }) => {
   return (
      <div
         className={clsx(
            "h-8 w-8 border-2 border-bgPrimary text-bgPrimary",
            seat?.status ? "bg-borderColor" : "bg-gradientStart",
            seat?.isReserved && "bg-highlight"
         )}
      >
         {seat?.seat_id}
      </div>
   );
};

export default Seat;
