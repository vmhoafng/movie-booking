import React from "react";
import Title from "./Title";
import BookingTitle from "./BookingTitle";
import BookingSubtitle from "./BookingSubtitle";
import "../payment.css";
function BookingDesktopItem() {
  return (
    <div
      className="
          bg-bgPrimaryLayer
          hidden
          lg:flex
          flex-col
          items-center
          w-[250px]
          xl:w-[280px]
          2xl:w-[300px]
          px-[30px]
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
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex flex-col text-white gap-[15px] my-[15px] font-semibold leading-6">
        <div className="flex flex-col">
          <BookingTitle>Rạp</BookingTitle>
          <BookingSubtitle>An Dương Vương | RAP 1</BookingSubtitle>
        </div>
        <div className="flex flex-col">
          <BookingTitle>Suất chiếu</BookingTitle>
          <BookingSubtitle>15:30 | CN 17/09</BookingSubtitle>
        </div>
        <div className="flex flex-col">
          <BookingTitle>Ghế (2)</BookingTitle>
          <BookingSubtitle>H1, H2</BookingSubtitle>
        </div>
      </div>
      <div className="w-full relative border-t border-dashed border-borderColor">
        <div className="w-[34px] h-[34px] absolute rounded-full gradient-to-r top-[-18px] -left-12"></div>
        <div className="w-[34px] h-[34px] absolute rounded-full gradient-to-l top-[-18px] left-[calc(100%+14px)]"></div>
      </div>
      <div className="w-full flex flex-col py-[15px]">
        <div className="flex flex-col">
          <BookingTitle>Giá vé</BookingTitle>
          <BookingSubtitle>135.000 VND</BookingSubtitle>
        </div>
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full py-[15px]">
        <div className="flex items-center justify-between">
          <BookingTitle>Tổng</BookingTitle>
          <BookingSubtitle highlight>270.000 VND</BookingSubtitle>
        </div>
      </div>
    </div>
  );
}

export default BookingDesktopItem;
