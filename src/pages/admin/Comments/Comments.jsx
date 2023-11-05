import React from "react";
import Rating from "./components/Rating";
import SelectInput from "@/app/components/inputs/SelectInput";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ControlBar from "../components/controlBar/ControlBar";

const options = [
   { label: "Tất cả", value: "all" },
   { label: "Đã duyệt", value: "Đã duyệt" },
   { label: "Chưa duyệt", value: "Chưa duyệt" },
];
function Comments() {
   function handleOnChange(e) {
      console.log(e.value);
   }
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
            <Rating></Rating>
            <Rating></Rating>
            <Rating></Rating>
            <Rating></Rating>
            <Rating></Rating>
            <Rating></Rating>
         </div>
      </>
   );
}

export default Comments;
