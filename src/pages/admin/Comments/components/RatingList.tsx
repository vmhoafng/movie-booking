import React from "react";
import Rating from "./Rating";
interface RatingListProps {
   data: Array<Record<string, any>>;
   currentPage: number;
   itemsPerPage: number;
}

const RatingList = ({ data, currentPage, itemsPerPage }: RatingListProps) => {
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const displayedData = data.slice(startIndex, endIndex);
   return <div>{/* <Rating ></Rating> */}</div>;
};

export default RatingList;
