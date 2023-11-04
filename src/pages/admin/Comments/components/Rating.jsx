import React from "react";

const Rating = () => {
   return (
      <div className="w-full flex justify-start items-center py-2 border border-borderColor bg-bgPrimaryBar rounded">
         <div className="mx-4 rounded-full overflow-hidden">
            <img
               src="./assets/images/poster.png"
               alt=""
               className="w-[60px] h-[60px]"
            />
         </div>
         <div className="h-full flex-1 flex flex-col items-start text-sm">
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
            <div className="w-full flex justify-center items-center">
               <p className="w-full text-white/60 text-left">
                  Phim hay ngoài sức tưởng tượng. Tuyệt vời. Recommend mọi người
                  nên xem!
               </p>
            </div>
         </div>
         <div className="flex flex-col justify-center items-center px-4 border-l border-borderColor text-sm">
            <div className="hover:border-b hover:border-highlight transition-all duration-150">
               <span className="text-highlight">Duyệt</span>
            </div>
            <div className="hover:border-b hover:border-rose-800 transition-all duration-150">
               <span className="text-rose-800">Xóa</span>
            </div>
         </div>
      </div>
   );
};

export default Rating;
