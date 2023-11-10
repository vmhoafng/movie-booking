import React from "react";
import AxisY from "./AxisY";
import AxisX from "./AxisX";
import { chartType } from "../Dashboard";

const months: number[] = [];

type TitleObj = {
   [key: string]: string;
};

const ChartTitle: TitleObj = {
   revenue: "Doanh thu",
   ticket: "Vé đã bán",
   cinema: "Rạp",
   movie: "Phim",
};

const Chart = ({ type }: { type: string }) => {
   if (months.length <= 0)
      for (let i = 1; i <= 31; i++) {
         months.push(i);
      }
   return (
      <div className="w-full border rounded border-white/10 bg-bgPrimaryBar">
         <div className="flex justify-between items-center p-4 border-b border-white/10 text-base">
            <h2 className="text-white/90">{ChartTitle[type]}</h2>
            <h2 className="text-white/70">07/2023</h2>
         </div>
         <div className="min-h-40 px-4 py-8 flex items-end">
            <AxisY></AxisY>
            <div className="h-full flex flex-1 flex-col items-end pl-4 gap-y-4">
               <div className="w-full flex flex-row items-end justify-between bg-white/5 text-right">
                  <div className="h-14 w-3 bg-highlight"></div>
                  <div className="h-20 w-3 bg-highlight"></div>
                  <div className="h-52 w-3 bg-highlight"></div>
                  <div className="h-14 w-3 bg-highlight"></div>
                  <div className="h-96 w-3 bg-highlight"></div>
                  <div className="h-28 w-3 bg-highlight"></div>
                  <div className="h-14 w-3 bg-highlight"></div>
                  <div className="h-44 w-3 bg-highlight"></div>
                  <div className="h-28 w-3 bg-highlight"></div>
                  <div className="h-28 w-3 bg-highlight"></div>
                  <div className="h-14 w-3 bg-highlight"></div>
                  <div className="h-20 w-3 bg-highlight"></div>
                  <div className="h-28 w-3 bg-highlight"></div>
                  <div className="h-14 w-3 bg-highlight"></div>
                  <div className="h-20 w-3 bg-highlight"></div>
                  <div className="h-28 w-3 bg-highlight"></div>
                  <div className="h-14 w-3 bg-highlight"></div>
                  <div className="h-20 w-3 bg-highlight"></div>
                  <div className="h-28 w-3 bg-highlight"></div>
                  <div className="h-28 w-3 bg-highlight"></div>
                  <div className="h-56 w-3 bg-highlight"></div>
                  <div className="h-20 w-3 bg-highlight"></div>
                  <div className="h-28 w-3 bg-highlight"></div>
                  <div className="h-14 w-3 bg-highlight"></div>
                  <div className="h-20 w-3 bg-highlight"></div>
                  <div className="h-28 w-3 bg-highlight"></div>
                  <div className="h-14 w-3 bg-highlight"></div>
                  <div className="h-20 w-3 bg-highlight"></div>
                  <div className="h-28 w-3 bg-highlight"></div>{" "}
                  <div className="h-96 w-3 bg-highlight"></div>
               </div>
               <AxisX></AxisX>
            </div>
         </div>
      </div>
   );
};

export default Chart;
