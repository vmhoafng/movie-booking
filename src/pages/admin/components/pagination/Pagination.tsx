// src/components/Pagination.tsx
import Icon from "@/app/components/icon/Icon";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: number) => void;
  currentPage: number;
  itemPerPage: number;
  dataLength: number;
  of?: string;
}
// Index.tsx
// const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = 3; // Number of items to display per page
// const pageCount = Math.ceil(data.length / itemsPerPage);
// const handlePageChange = (selectedPage: number) => {
//   setCurrentPage(selectedPage + 1);
// };

// E.g Case study
// return (
//     <Table
//       data={data}
//       columns={columns}
//       currentPage={currentPage}
//       itemsPerPage={itemsPerPage}
//     />
//     <Pagination pageCount={pageCount} onPageChange={handlePageChange} currentPage={currentPage}/>
// );
const Pagination = ({
  pageCount,
  onPageChange,
  currentPage,
  itemPerPage,
  dataLength,
  of,
}: PaginationProps) => {
  const handlePageClick = (data: { selected: number }) => {
    onPageChange(data.selected);
  };
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  return (
    <div className="flex justify-between items-center px-3">
      <div className="text-[13px] font-medium">
        Showing {(currentPage - 1) * itemPerPage + 1} to{" "}
        {isLastPage
          ? dataLength
          : (currentPage - 1) * itemPerPage + itemPerPage}{" "}
        of {dataLength} {of}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex items-center justify-end my-3"
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
            ${isFirstPage && "opacity-20 cursor-default"}`}
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
            ${isLastPage && "opacity-20 cursor-default"}`}
          />
        }
      />
    </div>
  );
};

export default Pagination;
