import React from "react";
import Seat from "./Seat";

const SeatRow = ({ row }) => {
   return (
      <div className="w-full flex flex-row min-w-[370px] justify-between p-0 lg:text-sm">
         <div className="text-white">{row[0].row}</div>
         <div className="grid grid-cols-15 gap-[2px] p-0">
            {row.map((seat) => {
               return <Seat seat={seat} key={seat.seat_id}></Seat>;
            })}
         </div>
         <div className="text-white">{row[0].row}</div>
      </div>
   );
};

export default SeatRow;
