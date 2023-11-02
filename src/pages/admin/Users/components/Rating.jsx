import React from "react";

const Rating = () => {
   return (
      <div className="w-full flex justify-center items-center py-2 border border-borderColor rounded">
         <div className="mx-4">
            <img
               src="./assets/images/poster.png"
               alt=""
               className="w-[60px] h-[60px]"
            />
         </div>
         <div className="flex-1 flex flex-col justify-center items-center text-sm">
            <div className="w-full flex justify-center items-center">
               <div className="w-full flex justify-center items-center">
                  <h3 className="text-white/90">Nguyễn Thành Đạt</h3>
                  <span className="text-lightPrimary">9/10</span>
                  <img src="./assets/icons/star.svg" alt="" />
               </div>
               <h3 className="text-white/90 pl-3 border-l border-white/10">
                  The Nun II
               </h3>
            </div>
            <div className="w-full flex justify-center items-center">
               <p className="text-white/60">
                  Phim hay ngoài sức tưởng tượng. Tuyệt vời. Recommend mọi người
                  nên xem!
               </p>
            </div>
            <div className="flex flex-col justify-center items-center pl-3 border-l border-borderColor text-sm">
               <div className="hover:border-b hover:border-highlight transition-all duration-150">
                  <span className="text-highlight">Duyệt</span>
               </div>
               <div className="hover:border-b hover:border-rose-800 transition-all duration-150">
                  <span className="text-rose-800">Xóa</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Rating;
