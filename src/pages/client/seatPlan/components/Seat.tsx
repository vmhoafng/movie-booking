import React from "react";
import clsx from "clsx";
import { ISeatType } from "../type";

const Seat = ({ seat }: { seat: ISeatType }) => {
   return (
      <div
         className={clsx(
            "flex justify-center items-center h-8 w-8 border-2 border-bgPrimary rounded-lg text-center hover:bg-highlight cursor-pointer transition-colors duration-150",
            seat?.status ? "bg-borderColor" : "bg-gradientStart hover:none",
            seat?.is_reserved && "bg-highlight"
         )}
      >
         <span className="text-sm">{seat?.row_index as any}</span>
      </div>
   );
};

export default Seat;
