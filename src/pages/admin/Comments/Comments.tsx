import React, { useEffect, useState } from "react";
import Rating from "./components/Rating";
import SelectInput from "@/app/components/inputs/SelectInput";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ControlBar from "../components/controlBar/ControlBar";
import { useRedux } from "@/app/hooks";
import { getAll, getCommentByStatus } from "@/app/redux/comment";
import { SelectInputProps } from "@/app/components/inputs/SelectInput/SelectInput.type";
import { ICommentStatus } from "@/app/types/comment";
import RatingList from "./components/RatingList";
import Pagination from "../components/pagination/Pagination";
import LoadingAnimation from "@/app/components/loading/LoadingAnimation";

const options = [
   { label: "Tất cả", value: "ALL" },
   { label: "Đã duyệt", value: "APPROVED" },
   { label: "Chưa duyệt", value: "PENDING" },
   { label: "Đã xóa", value: "DELETED" },
];
function Comments() {
   const { appSelector, dispatch } = useRedux();
   const { comment, isLoading, isError, errorMessage } = appSelector(
      (state) => state.comment
   );
   console.log(comment);

   const [status, setStatus] = useState<ICommentStatus | "ALL">("ALL");
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 6;
   const pageCount = Math.ceil(comment.data?.length / itemsPerPage);
   const handlePageChange = (selectedPage: number) => {
      setCurrentPage(selectedPage + 1);
   };

   function handleOnChange(e: { value: any }) {
      setStatus(e.value);
   }

   useEffect(() => {
      if (status === "ALL") {
         dispatch(getAll());
      } else {
         dispatch(getCommentByStatus(status));
      }
   }, [status, dispatch]);

   return (
      <>
         {isLoading && <LoadingAnimation></LoadingAnimation>}
         <ControlBar title={"Quản lý người dùng"} subTitle={"Bình luận"}>
            <SelectInput
               options={options}
               placeholder="Chọn rạp"
               buttonClassName="w-[220px] h-[35px] text-left pl-4"
               optionClassName="py-1 px-4 hover:bg-highlight transition-all duration-150"
               inputClassName="border border-white/50 bg-white/20 rounded"
               value={options[0]}
               //@ts-ignore
               endIcon={ChevronDownIcon}
               onChange={handleOnChange}
            ></SelectInput>
         </ControlBar>

         <div className="flex flex-col relative">
            <div className="flex flex-col gap-2">
               <RatingList
                  data={comment.data}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
               ></RatingList>
            </div>
            <Pagination
               currentPage={currentPage || 0}
               dataLength={comment.total || 0}
               itemPerPage={itemsPerPage || 0}
               onPageChange={handlePageChange}
               pageCount={pageCount || 0}
            ></Pagination>
         </div>
      </>
   );
}

export default Comments;
