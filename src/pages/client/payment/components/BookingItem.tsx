import React from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";

function BookingItem() {
  return (
    <div className="bg-bgPrimaryLayer flex flex-col items-center w-80 px-5 h-64">
      <Title>Booking sumary</Title>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="flex py-[10px] justify-between">
        <div className="flex flex-col w-[148px]">
          <SubTitle>The NUN</SubTitle>
          <div className="text-white/60 text-sm leading-6">Phụ đề</div>
        </div>
        <div className="text-white text-sm font-semibold leading-6 text-right">
          <span
            className="
                  [text-shadow:1px_1px_2px_var(--tw-shadow-color)]
                  shadow-black/50
          "
          >
            An Dương Vương | RAP 1 15:30 | CN 17/09
          </span>
        </div>
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex flex-col py-[10px]">
        <div className="flex items-center justify-between">
          <SubTitle>Ghế (2)</SubTitle>
          <div className="text-white/60 text-sm font-semibold leading-6 text-right">
            <span
              className="
                  [text-shadow:1px_1px_2px_var(--tw-shadow-color)]
                  shadow-black/50
          "
            >
              H1, H2
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <SubTitle>Giá vé</SubTitle>
          <div className="text-white/60 text-sm font-semibold leading-6 text-right">
            <span
              className="
                  [text-shadow:1px_1px_2px_var(--tw-shadow-color)]
                  shadow-black/50
          "
            >
              135.000 VND
            </span>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full py-[10px]">
        <div className="flex items-center justify-between">
          <SubTitle>Tổng</SubTitle>
          <div className="text-highlight text-sm font-semibold leading-6 text-right">
            <span
              className="
                  [text-shadow:1px_1px_2px_var(--tw-shadow-color)]
                  shadow-black/50
          "
            >
              270.000 VND
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingItem;
