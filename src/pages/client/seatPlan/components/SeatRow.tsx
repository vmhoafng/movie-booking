import React from "react";
import Seat from "./Seat";
import { ISeatRow } from "../type";

const SeatRow = (row: ISeatRow) => {
   return (
      <div className="w-full flex flex-row min-w-[600px] justify-between p-0 lg:text-sm">
         <div className="text-white">{row.row}</div>
         <div className="grid grid-cols-15 gap-[2px] p-0">
            {row.seats.map((seat) => {
               return <Seat seat={seat} key={seat.seat_id as any}></Seat>;
            })}
         </div>
         <div className="text-white">{row.row}</div>
      </div>
   );
};

export default SeatRow;
