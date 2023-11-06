import React from "react";

function UserProfile() {
   return (
      <div className="flex justify-center items-center gap-[10px]">
         <div className="text-sm">
            <span className="block">Nguyễn Trương Khánh Hoàng</span>
            <span className="block text-right text-white/60">Admin</span>
         </div>
         <div className="h-10 w-10">
            <img
               src="/assets/icons/account-circle.svg"
               alt="user-img"
               className="h-full"
            />
         </div>
      </div>
   );
}

export default UserProfile;
