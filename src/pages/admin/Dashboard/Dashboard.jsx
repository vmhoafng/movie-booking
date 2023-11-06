import React from "react";
import ControlBar from "../components/controlBar/ControlBar";
import Card from "./components/Card";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import SelectInput from "@/app/components/inputs/SelectInput";
import Chart from "./components/Chart";

const options = [
   { label: "Tất cả", value: "all" },
   { label: "Đã duyệt", value: "Đã duyệt" },
   { label: "Chưa duyệt", value: "Chưa duyệt" },
];

function Dashboard() {
   function handleOnChange(e) {
      console.log(e.value);
   }
   return (
      <>
         <ControlBar title={"Thống kê"}>
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

         <div className="flex justify-between items-center">
            <Card
               title={"doanh thu"}
               percent={"50"}
               status={"up"}
               value={"100.000.000.000"}
               type="revenue"
            ></Card>
            <Card
               title={"vé đã bán"}
               percent={"35"}
               status={"down"}
               value={"1.000"}
               type="ticket"
            ></Card>
            <Card
               title={"Rạp cao nhất"}
               percent={"50"}
               status={""}
               value={"An Dương Vương"}
               type="cinema"
            ></Card>
            <Card
               title={"Phim cao nhất"}
               percent={"50"}
               status={""}
               value={"The Nun II"}
               type="movie"
            ></Card>
         </div>

         <Chart></Chart>
      </>
   );
}

export default Dashboard;
