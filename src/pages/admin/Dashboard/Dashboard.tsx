import React, { useEffect, useState } from "react";
import ControlBar from "../components/controlBar/ControlBar";
import Card from "./components/Card";
import Chart from "./components/Chart";
import MonthSelection, { formatDate } from "./components/MonthSelection";
import { useRedux } from "@/app/hooks";
import { IChartItem, getAll } from "@/app/redux/dashboard/dashboard.slice";
import LoadingAnimation from "@/app/components/loading/LoadingAnimation";

export type chartType = "revenue" | "ticket" | "cinema" | "movie";

type TitleObj = {
   [key: string]: string;
};

export const ChartTitle: TitleObj = {
   revenue: "Doanh thu",
   ticket: "Vé đã bán",
   cinema: "Rạp",
   movie: "Phim",
};

function formatToMonthYear(inputDate: string): string {
   const dateObject = new Date(inputDate);
   const formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "2-digit",
      year: "numeric",
   });

   return formattedDate;
}

const initialDate = new Date();

function Dashboard() {
   const { appSelector, dispatch } = useRedux();
   const { data, isLoading } = appSelector((state) => state.dashboard);
   console.log(data);

   const [chartType, setChartType] = useState<chartType>("revenue");
   const [chart, setChart] = useState<IChartItem[]>([]);
   const [date, setDate] = useState(formatDate(initialDate));

   function handleOnClickCard(type: chartType) {
      setChartType(type);
   }

   function handleOnChangeDate(date: string) {
      setDate(date);
   }

   function checkPercentStatus(type: string, percent: string) {
      if (type === "revenue" || type === "ticket") {
         if (percent.includes("-")) {
            return "down";
         }
         return "up";
      }
      return "";
   }

   function getChartByType(type: chartType) {
      let arr = data.filter((card) => {
         return card.title === type;
      });

      return arr.length ? arr[0].chart : [];
   }

   useEffect(() => {
      dispatch(getAll(date));
   }, [date, dispatch]);

   useEffect(() => {
      let arr = getChartByType(chartType as chartType);
      setChart(arr);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [chartType, date, data]);

   return (
      <>
         {isLoading && <LoadingAnimation></LoadingAnimation>}
         <ControlBar title={"Thống kê"}>
            <MonthSelection onChange={handleOnChangeDate}></MonthSelection>
         </ControlBar>
         <div className="flex flex-col gap-5 justify-between items-center">
            <div className="w-full flex justify-between items-center">
               {data.map((card) => {
                  return (
                     <Card
                        percent={card.percent}
                        status={checkPercentStatus(
                           card.title as chartType,
                           card.percent
                        )}
                        value={card.content}
                        type={card.title}
                        onClick={() =>
                           handleOnClickCard(card.title as chartType)
                        }
                     ></Card>
                  );
               })}
            </div>
            <Chart
               type={chartType}
               date={formatToMonthYear(date)}
               chart={chart}
            ></Chart>
         </div>
      </>
   );
}

export default Dashboard;
