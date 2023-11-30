import Button from "@/app/components/button/Button";
import LoadingAnimation from "@/app/components/loading/LoadingAnimation";
import { useRedux } from "@/app/hooks";
import { postComment } from "@/app/redux/comment";
import { INewComment } from "@/app/types/comment";
import React, { useEffect, useState } from "react";

const CommentForm = ({ movieId }: { movieId: string }) => {
   const { appSelector, dispatch } = useRedux();
   const { user } = appSelector((state) => state.auth);
   const { isLoading } = appSelector((state) => state.comment);
   console.log("loading: ", isLoading);

   const [newComment, setNewComment] = useState<INewComment>({
      content: "",
      movieId: "",
      rating: 0,
   });

   const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setNewComment({ ...newComment, content: e.target.value });
   };

   const renderRatingStar = () => {
      const starList = [];
      for (let i = 1; i <= 5; i++) {
         starList.push(
            <div title={`${i}`}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  cursor={"pointer"}
                  style={{ marginLeft: "2px" }}
                  viewBox="0 0 15 14"
                  key={i}
                  onClick={() => setNewComment({ ...newComment, rating: i })}
               >
                  <path
                     d="M7.78229 1L9.73182 4.94953L14.0914 5.58675L10.9369 8.65931L11.6813 13L7.78229 10.9495L3.88324 13L4.62772 8.65931L1.47314 5.58675L5.83277 4.94953L7.78229 1Z"
                     fill={i <= newComment.rating ? "#FAC917" : "none"}
                     stroke="#FAC917"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </div>
         );
      }
      return starList;
   };

   useEffect(() => {
      setNewComment({ ...newComment, movieId: movieId });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [movieId]);

   return (
      <>
         {isLoading && <LoadingAnimation></LoadingAnimation>}
         <div className="w-full flex justify-center items-start mt-2">
            <div className="mx-4 rounded-full overflow-hidden">
               {user?.avatar ? (
                  <img
                     src={user?.avatar}
                     alt=""
                     className="w-[52px] h-[52px]"
                  />
               ) : (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     className="text-white w-[52px] h-[52px]"
                  >
                     <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                        clipRule="evenodd"
                     />
                  </svg>
               )}
            </div>
            <div className="min-h-[52px] flex-1 flex flex-col items-start gap-2 pr-4 text-sm">
               <div className="w-full flex items-center">
                  <div className="flex justify-start items-center mr-3">
                     <h3 className="text-white/90">
                        {user?.full_name || "Khách"}
                     </h3>
                     <div className="h-full flex items-start pl-4 pb-1">
                        {renderRatingStar()}
                     </div>
                  </div>
               </div>
               <input
                  className="w-full text-white/60 pt-2 pb-1 text-left outline-none ring-0 border-b border-borderColor bg-transparent placeholder:text-white/40"
                  placeholder="Nhập bình luận..."
                  onBlur={handleOnBlur}
               ></input>
            </div>
         </div>
         <Button
            medium
            onClick={() => {
               dispatch(postComment(newComment));
            }}
         >
            Bình luận
         </Button>
      </>
   );
};

export default CommentForm;
