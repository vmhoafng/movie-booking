import React from "react";
import Title from "./Title";
import BookingTitle from "./BookingTitle";
import BookingSubtitle from "./BookingSubtitle";
import { useRedux } from "@/app/hooks";

function BookingMobileItem() {
  const { appSelector, dispatch } = useRedux();
  const {
    format,
    room_name,
    movie_name,
    selected_seats,
    start_date,
    start_time,
    total,
  } = appSelector((state) => state.payment);
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
          <BookingTitle>{movie_name}</BookingTitle>
          <BookingSubtitle>{format}</BookingSubtitle>
        </div>
        <div className="flex flex-col items-end text-white text-sm md:text-[15px]  font-semibold leading-6">
          <span>An Dương Vương | {room_name}</span>
          <span>
            {start_time} | {start_date}
          </span>
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
          <BookingSubtitle>135.000 VND</BookingSubtitle>
        </div>
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full py-[10px]">
        <div className="flex items-center justify-between text-sm md:text-[16px] ">
          <BookingTitle>Tổng</BookingTitle>
          <BookingTitle highlight>{total} VND</BookingTitle>
        </div>
      </div>
    </div>
  );
}

export default BookingMobileItem;
