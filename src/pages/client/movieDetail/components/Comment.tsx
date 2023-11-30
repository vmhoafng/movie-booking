import { useRedux } from "@/app/hooks";
import { IMovie } from "@/app/types/movie";
import React, { useMemo } from "react";
import CommentForm from "./CommentForm";
import LoadingAnimation from "@/app/components/loading/LoadingAnimation";

const Comment = ({ data }: { data: IMovie }) => {
   const { appSelector } = useRedux();
   const { isLoading } = appSelector((state) => state.comment);

   const renderComment = useMemo(() => {
      return (data?.comment || []).map((comment) => (
         <div
            className="w-full flex justify-center items-start py-4 border border-borderColor bg-bgPrimaryBar rounded"
            key={comment.id}
         >
            <div className="mx-4 rounded-full overflow-hidden">
               <img
                  src={comment?.avatar_user}
                  alt=""
                  className="w-[52px] h-[52px]"
               />
            </div>
            <div className="min-h-[52px] flex-1 flex flex-col items-start gap-2 pr-4 text-sm">
               <div className="w-full flex items-center">
                  <div className="flex justify-start items-center mr-3">
                     <h3 className="text-white/90">{comment?.user}</h3>
                     <span className="text-lightPrimary pl-4">
                        {comment?.rating}/5
                     </span>
                     <img
                        src="./assets/icons/star.svg"
                        alt=""
                        className="pl-1 pb-[2px]"
                     />
                  </div>
               </div>
               <p className="w-full text-white/60 text-left">
                  {comment?.content}
               </p>
            </div>
         </div>
      ));
   }, [data.comment]);

   return (
      <>
         {isLoading && <LoadingAnimation></LoadingAnimation>}
         <CommentForm movieId={data.id}></CommentForm>
         <div className="flex flex-col gap-2 w-full">{renderComment}</div>
      </>
   );
};

export default Comment;
