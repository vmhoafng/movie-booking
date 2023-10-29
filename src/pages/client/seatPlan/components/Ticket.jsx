import React from "react";
import BookingTitle from "../../payment/components/BookingTitle";
import BookingSubtitle from "../../payment/components/BookingSubtitle";
import Button from "../../../../app/components/button/Button";

const Ticket = () => {
   return (
      <div className="bg-[#0A1E5ECC] flex flex-col items-center sm:text-sm sm:pb-4 sm:px-4 md:px-8 lg:px-12  xl:w-[240px] xl:py-2 xl:px-[30px] 2xl:w-[300px] 2xl:px-9 font-inter border-2 xl:border border-borderColor">
         <h2 className="py-4 uppercase text-white/90 font-bold">
            Booking sumary
         </h2>
         <div className="w-full border-t border-dashed border-borderColor" />
         <div className="w-full flex sm:py-3 lg:py-4 justify-between">
            <div className="flex flex-col w-[148px]">
               <BookingTitle>The NUN</BookingTitle>
               <BookingSubtitle>Phụ đề</BookingSubtitle>
            </div>

            <div className="xl:hidden flex flex-col items-end">
               <BookingTitle>An Dương Vương | RẠP 1</BookingTitle>
               <BookingTitle>15:30 | CN 17/09</BookingTitle>
            </div>
         </div>
         <div className="w-full border-t border-dashed border-borderColor" />
         <div className="w-full flex xl:flex-col xl:justify-normal sm:justify-between text-white gap-[15px] sm:py-3 lg:py-4 font-semibold leading-6">
            <div className="xl:flex flex-col hidden">
               <BookingTitle>Rạp</BookingTitle>
               <BookingSubtitle>An Dương Vương | RAP 1</BookingSubtitle>
            </div>
            <div className="xl:flex flex-col hidden ">
               <BookingTitle>Suất chiếu</BookingTitle>
               <BookingSubtitle>15:30 | CN 17/09</BookingSubtitle>
            </div>
            <div className="flex flex-col">
               <BookingTitle>Ghế (2)</BookingTitle>
               <BookingSubtitle>H1, H2</BookingSubtitle>
            </div>
            <div className="flex flex-col items-end xl:hidden">
               <BookingTitle>Giá vé</BookingTitle>
               <BookingSubtitle>135.000 VND</BookingSubtitle>
            </div>
         </div>
         <div className="w-full relative border-t border-dashed border-borderColor">
            <div className="w-[34px] h-[34px] sm:hidden xl:block border-r border-borderColor absolute rounded-full gradient-to-r top-[-18px] -left-12 2xl:-left-[54px]"></div>
            <div className="w-[34px] h-[34px] sm:hidden xl:block border-l border-borderColor absolute rounded-full gradient-to-l top-[-18px] left-[calc(100%+14px)] 2xl:left-[calc(100%+20px)]"></div>
         </div>
         <div className="w-full hidden xl:flex flex-col xl:py-4 ">
            <div className="flex flex-col">
               <BookingTitle>Giá vé</BookingTitle>
               <BookingSubtitle>135.000 VND</BookingSubtitle>
            </div>
         </div>
         <div className="w-full border-t border-dashed border-borderColor" />
         <div className="w-full sm:py-3 lg:py-4">
            <div className="flex items-center justify-between">
               <BookingTitle>Tổng</BookingTitle>
               <BookingSubtitle highlight>270.000 VND</BookingSubtitle>
            </div>
         </div>
         <div className="w-full my-4 hidden xl:block">
            <Button fullWidth>Thanh toán</Button>
         </div>

         <div className="lg:mt-1 xl:hidden">
            <Button large>Thanh toán</Button>
         </div>
      </div>
   );
};

export default Ticket;
