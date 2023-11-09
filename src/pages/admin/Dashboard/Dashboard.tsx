import React, { useState } from "react";
import ControlBar from "../components/controlBar/ControlBar";
import Card from "./components/Card";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import SelectInput from "@/app/components/inputs/SelectInput";
import Chart from "./components/Chart";
import MonthSelection from "./components/MonthSelection";

const options = [
   { label: "Tất cả", value: "all" },
   { label: "Đã duyệt", value: "Đã duyệt" },
   { label: "Chưa duyệt", value: "Chưa duyệt" },
];
export type chartType = "revenue" | "ticket" | "cinema" | "movie";

function Dashboard() {
   const [chartType, setChartType] = useState("revenue");

   const handleOnClickCard = (type: chartType) => {
      setChartType(type);
   };

   console.log(chartType);

   function handleOnChange(e: Object) {
      console.log(e);
   }
   return (
      <>
         <ControlBar title={"Thống kê"}>
            <MonthSelection></MonthSelection>
            {/* <SelectInput
               options={options}
               placeholder="Chọn rạp"
               buttonClassName="w-[220px] h-[35px] text-left pl-4"
               optionClassName="py-1 px-4 hover:bg-highlight transition-all duration-150"
               inputClassName="border border-white/50 bg-white/20 rounded"
               value={options[0]}
               //@ts-ignore
               endIcon={ChevronDownIcon}
               onChange={handleOnChange}
            ></SelectInput> */}
         </ControlBar>
         <div className="flex flex-col gap-5 justify-between items-center">
            <div className="w-full flex justify-between items-center">
               <Card
                  title={"Doanh thu"}
                  percent={"50"}
                  status={"up"}
                  value={"100.000.000.000"}
                  type="revenue"
                  onClick={() => handleOnClickCard("revenue")}
               ></Card>
               <Card
                  title={"Vé đã bán"}
                  percent={"35"}
                  status={"down"}
                  value={"1.000"}
                  type="ticket"
                  onClick={() => handleOnClickCard("ticket")}
               ></Card>
               <Card
                  title={"Rạp cao nhất"}
                  percent={"50"}
                  status={""}
                  value={"An Dương Vương"}
                  type="cinema"
                  onClick={() => handleOnClickCard("cinema")}
               ></Card>
               <Card
                  title={"Phim cao nhất"}
                  percent={"50"}
                  status={""}
                  value={"The Nun II"}
                  type="movie"
                  onClick={() => handleOnClickCard("movie")}
               ></Card>
            </div>
            <Chart type={chartType}></Chart>
         </div>
      </>
   );
}

export default Dashboard;
