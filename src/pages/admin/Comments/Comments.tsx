import React, { useEffect, useState } from "react";
import Rating from "./components/Rating";
import SelectInput from "@/app/components/inputs/SelectInput";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ControlBar from "../components/controlBar/ControlBar";
import { useRedux } from "@/app/hooks";
import { getAll, getCommentByStatus } from "@/app/redux/comment";
import { SelectInputProps } from "@/app/components/inputs/SelectInput/SelectInput.type";
import { ICommentStatus } from "@/app/types/comment";

const options = [
   { label: "Tất cả", value: "all" },
   { label: "Đã duyệt", value: "approved" },
   { label: "Chưa duyệt", value: "pending" },
   { label: "Đã xóa", value: "deleted" },
];
function Comments() {
   const { appSelector, dispatch } = useRedux();
   const { comment, isLoading, isError, errorMessage } = appSelector(
      (state) => state.comment
   );
   const [status, setStatus] = useState<ICommentStatus | "all">("all");

   console.log("comment data:" + comment.data);

   function handleOnChange(e: { value: any }) {
      // console.log(e.value);
      setStatus(e.value);
   }

   useEffect(() => {
      // console.log(status);

      if (status === "all") {
         dispatch(getAll());
      } else {
         dispatch(getCommentByStatus(status));
      }
   }, [status, dispatch]);

   return (
      <>
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
         <div className="flex flex-col gap-2">
            {/* <Rating></Rating>
            <Rating></Rating>
            <Rating></Rating>
            <Rating></Rating>
            <Rating></Rating>
            <Rating></Rating> */}
         </div>
      </>
   );
}

export default Comments;
