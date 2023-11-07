import React from "react";

const Rating = () => {
   return (
      <div className="w-full flex justify-center items-start py-3 border border-borderColor bg-bgPrimaryBar rounded">
         <div className="mx-4 rounded-full overflow-hidden">
            <img
               src="./assets/images/poster.png"
               alt=""
               className="w-[52px] h-[52px]"
            />
         </div>
         <div className="min-h-[52px] flex-1 flex flex-col items-start gap-3 pr-4 text-sm">
            <div className="w-full flex items-center">
               <div className="flex justify-start items-center mr-3">
                  <h3 className="text-white/90">Nguyễn Thành Đạt</h3>
                  <span className="text-lightPrimary pl-4">9/10</span>
                  <img
                     src="./assets/icons/star.svg"
                     alt=""
                     className="pl-1 pb-[2px]"
                  />
               </div>
               <h3 className="text-white/90 pl-3 border-l border-white/20">
                  The Nun II
               </h3>
            </div>
            <p className="w-full text-white/60 text-left">
               Phim hay ngoài sức tưởng tượng.
            </p>
         </div>
         <div className="h-[52px] flex flex-col justify-between items-center px-4 border-l border-borderColor text-sm">
            <div className="hover:opacity-100 opacity-95 transition-all duration-100 cursor-pointer">
               <span className="text-highlight hover:underline">Duyệt</span>
            </div>
            <div className="hover:opacity-100 opacity-90 transition-all duration-100 cursor-pointer">
               <span className="text-red-600 hover:underline">Xóa</span>
            </div>
         </div>
      </div>
   );
};

export default Rating;
