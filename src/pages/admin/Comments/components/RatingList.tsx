import React from "react";
import Rating from "./Rating";
import { IComment } from "@/app/types/comment";
interface RatingListProps {
   data: IComment[];
   currentPage: number;
   itemsPerPage: number;
}

const RatingList = ({ data, currentPage, itemsPerPage }: RatingListProps) => {
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const displayedData = data.slice(startIndex, endIndex);
   return (
      <>
         {displayedData.map((comment) => {
            return <Rating data={comment} key={comment.id}></Rating>;
         })}
      </>
   );
};

export default RatingList;
