import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { Outlet } from "react-router-dom";
import { useRedux } from "@/app/hooks";

function AdminLayout() {
   const { appSelector } = useRedux();
   const { isOpen } = appSelector((state) => state.layout);

   return (
      <div className="w-full h-full flex text-white bg-bgPrimar">
         {/* <div className="">{isOpen && <Sidebar />}</div> */}
         <Sidebar />
         <div className="flex-1 relative bg-bgPrimary h-screen overflow-y-scroll">
            <Topbar />
            <div className="w-[1200px] pb-20 bg-bgPrimary flex-1 mx-auto">
               <Outlet />
            </div>
         </div>
      </div>
   );
}

export default AdminLayout;
