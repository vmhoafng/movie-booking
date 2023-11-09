import React, { useState } from "react";
import ControlBar from "../components/controlBar/ControlBar";
import Card from "./components/Card";
import Chart from "./components/Chart";
import MonthSelection, { formatToMonthYear } from "./components/MonthSelection";

export type chartType = "revenue" | "ticket" | "cinema" | "movie";

function Dashboard() {
   const [chartType, setChartType] = useState("revenue");
   const [date, setDate] = useState(formatToMonthYear(new Date()));

   function handleOnClickCard(type: chartType) {
      setChartType(type);
   }

   console.log(date);

   function handleOnChangeDate(date: string) {
      setDate(date);
   }

   return (
      <>
         <ControlBar title={"Thống kê"}>
            <MonthSelection onChange={handleOnChangeDate}></MonthSelection>
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
