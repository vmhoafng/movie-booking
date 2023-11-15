import React from "react";
import Title from "./Title";
import BookingTitle from "./BookingTitle";
import BookingSubtitle from "./BookingSubtitle";
import { useRedux } from "@/app/hooks";

function BookingMobileItem() {
   const { appSelector } = useRedux();
   const { ticket, selected_seats } = appSelector((state) => state.payment);
   console.log(ticket, selected_seats);

   return (
      <div
         className="
          bg-[#0A1E5ECC]
          lg:hidden
          flex
          flex-col
          items-center
          w-full
          md:w-[640px]
          px-5
          md:px-10
          h-64
          font-inter
          border
          border-borderColor"
      >
         <Title>Booking sumary</Title>
         <div className="w-full border-t border-dashed border-borderColor" />
         <div className="w-full flex py-[10px] justify-between">
            <div className="flex flex-col w-[148px] text-sm md:text-[15px] ">
               <BookingTitle>{ticket.movie_name}</BookingTitle>
               <BookingSubtitle>{ticket.format}</BookingSubtitle>
            </div>
            <div className="flex flex-col items-end text-white text-sm md:text-[15px]  font-semibold leading-6">
               <span>{ticket.cinema}</span>
               <span>{ticket.showtime}</span>
            </div>
         </div>
         <div className="w-full border-t border-dashed border-borderColor" />
         <div className="w-full flex flex-col py-[10px]">
            <div className="flex items-center justify-between text-sm md:text-[15px] ">
               <BookingTitle>Ghế ({selected_seats.length})</BookingTitle>
               <BookingSubtitle>{selected_seats.join(", ")}</BookingSubtitle>
            </div>
            <div className="flex items-center justify-between text-sm md:text-[15px] ">
               <BookingTitle>Giá vé</BookingTitle>
               <BookingSubtitle>{ticket.ticket_price} VND</BookingSubtitle>
            </div>
         </div>
         <div className="w-full border-t border-dashed border-borderColor" />
         <div className="w-full py-[10px]">
            <div className="flex items-center justify-between text-sm md:text-[16px] ">
               <BookingTitle>Tổng</BookingTitle>
               <BookingTitle highlight>
                  {ticket.ticket_price * selected_seats.length} VND
               </BookingTitle>
            </div>
         </div>
      </div>
   );
}

export default BookingMobileItem;
