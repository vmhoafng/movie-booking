import React from "react";
import Title from "./Title";
import BookingTitle from "./BookingTitle";
import BookingSubtitle from "./BookingSubtitle";

function BookingMobileItem() {
  return (
    <div
      className="
          bg-bgPrimaryLayer
          lg:hidden
          flex
          flex-col
          items-center
          w-[360px]
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
        <div className="flex flex-col w-[148px]">
          <BookingTitle>The NUN</BookingTitle>
          <BookingSubtitle>Phụ đề</BookingSubtitle>
        </div>
        <div className="flex flex-col items-end text-white text-sm font-semibold leading-6">
          <span
            className="
                  [text-shadow:1px_1px_2px_var(--tw-shadow-color)]
                  shadow-black/50
          "
          >
            An Dương Vương | RAP 1
          </span>
          <span
            className="
                  [text-shadow:1px_1px_2px_var(--tw-shadow-color)]
                  shadow-black/50
          "
          >
            15:30 | CN 17/09
          </span>
        </div>
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex flex-col py-[10px]">
        <div className="flex items-center justify-between">
          <BookingTitle>Ghế (2)</BookingTitle>
          <BookingSubtitle>H1, H2</BookingSubtitle>
        </div>
        <div className="flex items-center justify-between">
          <BookingTitle>Giá vé</BookingTitle>
          <BookingSubtitle>135.000 VND</BookingSubtitle>
        </div>
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full py-[10px]">
        <div className="flex items-center justify-between">
          <BookingTitle>Tổng</BookingTitle>
          <BookingSubtitle highlight>270.000 VND</BookingSubtitle>
        </div>
      </div>
    </div>
  );
}

export default BookingMobileItem;
