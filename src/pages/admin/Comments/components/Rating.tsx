import { useRedux } from "@/app/hooks";
import { putCommentStatus } from "@/app/redux/comment";
import { IComment, ICommentStatus } from "@/app/types/comment";
import React, { useCallback } from "react";

const Rating = ({ data }: { data: IComment }) => {
   const { appSelector, dispatch } = useRedux();

   const handleDelete = useCallback((id: string, payload: ICommentStatus) => {
      console.log(id, payload);
      dispatch(putCommentStatus({ id, payload }));
   }, []);

   const handleApprove = useCallback((id: string, payload: ICommentStatus) => {
      console.log(id, payload);
   }, []);

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
                  <h3 className="text-white/90">{data.user}</h3>
                  <span className="text-lightPrimary pl-4">9/10</span>
                  <img
                     src="./assets/icons/star.svg"
                     alt=""
                     className="pl-1 pb-[2px]"
                  />
               </div>
               <h3 className="text-white/90 pl-3 border-l border-white/20">
                  {data.movie}
               </h3>
            </div>
            <p className="w-full text-white/60 text-left">{data.content}</p>
         </div>
         <div className="h-[52px] flex flex-col justify-between items-center px-4 border-l border-borderColor text-sm">
            {data.status === "APPROVED" && (
               <div
                  className="hover:opacity-100 opacity-90 transition-all duration-100 cursor-pointer"
                  onClick={() => handleDelete(data.id, "DELETED")}
               >
                  <span className="text-red-600 hover:underline">Xóa</span>
               </div>
            )}
            {data.status === "PENDING" && (
               <>
                  <div
                     className="hover:opacity-100 opacity-95 transition-all duration-100 cursor-pointer"
                     onClick={() => handleApprove(data.id, "APPROVED")}
                  >
                     <span className="text-highlight hover:underline">
                        Duyệt
                     </span>
                  </div>
                  <div
                     className="hover:opacity-100 opacity-90 transition-all duration-100 cursor-pointer"
                     onClick={() => handleDelete(data.id, "DELETED")}
                  >
                     <span className="text-red-600 hover:underline">Xóa</span>
                  </div>
               </>
            )}
            {data.status === "DELETED" && (
               <div
                  className="hover:opacity-100 opacity-90 transition-all duration-100 cursor-pointer"
                  onClick={() => handleApprove(data.id, "APPROVED")}
               >
                  <span className="text-red-600 hover:underline">Hoàn tác</span>
               </div>
            )}
         </div>
      </div>
   );
};

export default Rating;
