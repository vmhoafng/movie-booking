// src/components/Pagination.tsx
import Icon from "@/app/components/Icon/Icon";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: number) => void;
  first?: boolean;
  last?: boolean;
}
// Index.tsx
// const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = 3; // Number of items to display per page
// const pageCount = Math.ceil(data.length / itemsPerPage);
// const handlePageChange = (selectedPage: number) => {
//   setCurrentPage(selectedPage + 1);
// };
// return (
//     <Table
//       data={data}
//       columns={columns}
//       currentPage={currentPage}
//       itemsPerPage={itemsPerPage}
//     />
//     <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
// );
const Pagination = ({
  pageCount,
  onPageChange,
  first,
  last,
}: PaginationProps) => {
  const handlePageClick = (data: { selected: number }) => {
    onPageChange(data.selected);
  };
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName="flex items-center justify-end mr-1 my-3"
      pageLinkClassName="p-2 w-[32px]"
      pageClassName="flex
        items-center
        justify-center
        bg-[#0E1946]
        mx-1
        text-white
        border-borderColor
        border
        rounded
        font-semibold
        text-xs
        font-inter
        text-center"
      activeClassName="
        flex
        items-center
        justify-center
        bg-highlight
        text-white
        border-borderColor
        border
        rounded
        font-semibold
        text-xs
        font-inter
        text-center
        transition-all
        duration-200
        ease-linear
        "
      previousLabel={
        <Icon
          height={33}
          width={33}
          icon="arrowRight"
          className={`rotate-180
            bg-[#0E1946]
            mx-1
            text-white
            p-2
            w-8
            border-borderColor
            border
            rounded
            font-semibold
            font-inter
            text-center 
            ${first && "opacity-20"}`}
        />
      }
      nextLabel={
        <Icon
          height={33}
          width={33}
          icon="arrowRight"
          className={`bg-[#0E1946]
            mx-1
            text-white
            p-2
            w-8
            border-borderColor
            border
            rounded
            font-semibold
            font-inter
            text-center
            ${last && "opacity-20"}`}
        />
      }
    />
  );
};

export default Pagination;
