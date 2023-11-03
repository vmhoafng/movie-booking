import api from "../../../app/services/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../../app/components/Title";
import BookingTitle from "../payment/components/BookingTitle";
import BookingSubtitle from "../payment/components/BookingSubtitle";
import SeatRow from "./components/SeatRow";
import Button from "../../../app/components/button/Button";
import Ticket from "./components/Ticket";

function SeatPlan() {
   const { showtimeId } = useParams();
   const [seats, setSeats] = useState();
   const [seatRow, setSeatRow] = useState([]);

   const getSeatPlan = async (showtimeId) => {
      try {
         let res = await api.showtime.getSeatsByShowtime(showtimeId);
         console.log(res.data);
         setSeats([...res.data.room.seats]);
      } catch (error) {
         console.log(error);
      }
   };

   function splitArrayIntoChunks(arr, chunkSize) {
      const chunkedArray = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         chunkedArray.push(arr.slice(i, i + chunkSize));
      }
      return chunkedArray;
   }

   useEffect(() => {
      getSeatPlan(showtimeId);
   }, [showtimeId]);

   useEffect(() => {
      let temp = splitArrayIntoChunks(seats || [], 15);
      setSeatRow(temp);
   }, [seats]);

   // console.log(seatRow);

   return (
      <div className="w-full h-fit flex flex-col gap-5 sm:py-6 sm:pb-10 xl:flex-row xl:gap-14 xl:py-12 2xl:gap-20 ">
         <div className="flex flex-col sm:gap-5 xl:gap-6 flex-1 h-[510px] ">
            <Title active>Chọn ghế</Title>
            <div className="flex flex-col justify-center sm:bg-[#0A1E5ECC] sm:border-borderColor sm:border-2 sm:py-8 sm:px-3 md:px-5 md:gap-4 lg:px-14 lg:gap-4 xl:bg-transparent xl:px-0 xl:gap-6 xl:border-none xl:py-5 2xl:px-5">
               <div className="w-full flex flex-col gap-[2px] sm:overflow-x-scroll md:overflow-hidden pb-2">
                  {seatRow?.map((row) => {
                     return <SeatRow row={row} key={row.row}></SeatRow>;
                  })}
               </div>
               <div className="flex flex-col gap-1 items-center font-inter mt-2">
                  <span className="uppercase text-sm text-white/70">
                     screen
                  </span>
                  <div className="w-[600px] lg:w-[500px] md:w-[450px] sm:w-[300px] h-1 bg-borderColor"></div>
                  <div className="w-[400px] lg:w-[333px] md:w-[300px] sm:w-[200px] h-[2px] bg-borderColor"></div>
               </div>
               <div className="flex gap-4 justify-center items-center font-inter">
                  <div className="flex justify-center items-center gap-3">
                     <div className="w-4 h-4 rounded-sm bg-gradientStart"></div>
                     <span className="text-white/90 text-sm">Ghế đã bán</span>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                     <div className="w-4 h-4 rounded-sm bg-highlight"></div>
                     <span className="text-white/90 text-sm">
                        Ghế đang chọn
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <Ticket></Ticket>
      </div>
   );
}

export default SeatPlan;
