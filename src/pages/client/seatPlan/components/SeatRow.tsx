import React from "react";
import Seat from "./Seat";
import { ISeatRow } from "../type";
import { useRedux } from "@/app/hooks";

const SeatRow = ({ row }: { row: ISeatRow }) => {
   const { appSelector } = useRedux();
   const selected_seats = appSelector((state) => state.payment.selected_seats);


   return (
      <div className="w-full flex flex-row min-w-[590px] justify-between p-0 lg:text-sm">
         <div className="text-white">{row.row}</div>
         <div className="grid grid-cols-15 gap-[2px] p-0">
            {row.seats.map((seat) => {
               return (
                  <Seat
                     is_reserved={
                        selected_seats.find(
                           (selected) => selected.seat_id === seat.seat_id
                        ) !== undefined
                     }
                     seat={seat}
                     key={seat.seat_id as any}
                  ></Seat>
               );
            })}
         </div>
         <div className="text-white">{row.row}</div>
      </div>
   );
};

export default SeatRow;
