import React, { useEffect, useState } from "react";
import ControlBar from "../components/controlBar/ControlBar";
import Card from "./components/Card";
import Chart from "./components/Chart";
import MonthSelection, { formatDate } from "./components/MonthSelection";
import { useRedux } from "@/app/hooks";
import { getAll } from "@/app/redux/dashboard/dashboard.slice";

export type chartType = "revenue" | "ticket" | "cinema" | "movie";

const initialDate = new Date();

function Dashboard() {
   const { appSelector, dispatch } = useRedux();
   const dashboardData = appSelector((state) => state.dashboard);
   const [chartType, setChartType] = useState("revenue");
   const [date, setDate] = useState(formatDate(initialDate));

   function handleOnClickCard(type: chartType) {
      setChartType(type);
   }

   console.log(dashboardData);
   console.log(date);

   function handleOnChangeDate(date: string) {
      setDate(date);
   }

   useEffect(() => {
      dispatch(getAll(date));
   }, [date, dispatch]);

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
