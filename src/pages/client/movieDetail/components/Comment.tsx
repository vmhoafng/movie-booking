import Button from "@/app/components/button/Button";
import { useRedux } from "@/app/hooks";
import { postComment } from "@/app/redux/comment";
import { INewComment } from "@/app/types/comment";
import { IMovie } from "@/app/types/movie";
import React, { useEffect, useMemo, useState } from "react";

const Comment = ({ data }: { data: IMovie }) => {
   const { appSelector, dispatch } = useRedux();
   const { user } = appSelector((state) => state.auth);
   const [newComment, setNewComment] = useState<INewComment>({
      content: "",
      movieId: "",
      rating: 0,
   });

   const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setNewComment({ ...newComment, content: e.target.value });
   };

   const renderStar = () => {
      const starList = [];
      for (let i = 1; i <= 5; i++) {
         starList.push(
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>
         );
      }
      return starList;
   };

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

   useEffect(() => {
      setNewComment({ ...newComment, movieId: data?.id });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [data]);

   return (
      <>
         <div className="w-full flex justify-center items-start mt-2">
            <div className="mx-4 rounded-full overflow-hidden">
               <img src={user?.avatar} alt="" className="w-[52px] h-[52px]" />
            </div>
            <div className="min-h-[52px] flex-1 flex flex-col items-start gap-2 pr-4 text-sm">
               <div className="w-full flex items-center">
                  <div className="flex justify-start items-center mr-3">
                     <h3 className="text-white/90">{user?.full_name}</h3>
                     <div className="h-full flex items-start pl-4 pb-1">
                        {renderStar()}
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
         <div className="flex flex-col gap-2 w-full">{renderComment}</div>
      </>
   );
};

export default Comment;
