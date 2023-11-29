import React, { useMemo } from "react";
import Seat from "./Seat";
import { ISeatRow } from "../type";
import { useRedux } from "@/app/hooks";

const SeatRow = ({ row }: { row: ISeatRow }) => {
   const { appSelector } = useRedux();
   const selected_seats = appSelector((state) => state.payment.selected_seats);

   const renderSeat = useMemo(
      () =>
         row?.seats.map((seat) => {
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
         }),
      [row, selected_seats]
   );

   console.log("render seat row " + row.row);

   return (
      <div className="w-full flex flex-row min-w-[590px] justify-between p-0 lg:text-sm">
         <div className="text-white">{row?.row}</div>
         <div className="grid grid-cols-15 gap-[2px] p-0">{renderSeat}</div>
         <div className="text-white">{row?.row}</div>
      </div>
   );
};

export default SeatRow;
