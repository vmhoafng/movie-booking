import React from "react";
import clsx from "clsx";

const Seat = ({ seat }) => {
   return (
      <div
         className={clsx(
            "flex justify-center items-center h-8 w-8 border-2 border-bgPrimary rounded-lg text-center hover:bg-highlight cursor-pointer transition-colors duration-150",
            seat?.status ? "bg-borderColor" : "bg-gradientStart hover:none",
            seat?.isReserved && "bg-highlight"
         )}
      >
         <span className="text-sm">{seat?.row_index}</span>
      </div>
   );
};

export default Seat;
