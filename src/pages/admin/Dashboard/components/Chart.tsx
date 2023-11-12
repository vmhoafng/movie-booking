import React, { useEffect } from "react";
import AxisY from "./AxisY";
import AxisX from "./AxisX";
import { ChartTitle, chartType } from "../Dashboard";
import { IChartItem } from "@/app/redux/dashboard/dashboard.slice";
import ChartBar from "./ChartBar";

export type axisYValue = {
   max: number;
   character: string;
};

function findMaxContent(dataArray: IChartItem[]) {
   if (!dataArray || dataArray.length === 0) {
      return 0;
   }

   let maxContent = parseFloat(dataArray[0].content);

   for (let i = 1; i < dataArray.length; i++) {
      const currentContent = parseFloat(dataArray[i].content);

      if (!isNaN(currentContent) && currentContent > maxContent) {
         maxContent = currentContent;
      }
   }

   return maxContent;
}

function formatAxisYValue(num: number) {
   if (isNaN(num)) {
      return null;
   }

   let result = {};

   if (num < 1000000) {
      const roundedValue = Math.ceil(num / 1000);
      result = { max: roundedValue, character: "K" };
   } else if (num < 1000000000) {
      const roundedValue = Math.ceil(num / 1000000);
      result = { max: roundedValue, character: "M" };
   } else {
      const roundedValue = Math.ceil(num / 1000000000);
      result = { max: roundedValue, character: "B" };
   }

   return result;
}

function formatAxisXValue(chart: IChartItem[], type: string) {
   console.log(chart);

   return chart.map((item) => {
      return type === "revenue" || type === "ticket"
         ? item.title.slice(-2)
         : item.title;
   });
}

const Chart = ({
   type,
   date,
   chart,
}: {
   type: string;
   date: string;
   chart: IChartItem[];
}) => {
   let maxContent = findMaxContent(chart);
   let yValue = formatAxisYValue(maxContent);
   let xValue = formatAxisXValue(chart, type);
   function formatChartBarValue(content: string, yValue: axisYValue) {
      let barValue = parseFloat(content);

      switch (yValue.character) {
         case "K":
            barValue = barValue / 1000;
            break;

         case "M":
            barValue = barValue / 1000000;
            break;

         case "B":
            barValue = barValue / 1000000000;
            break;

         default:
            break;
      }

      return yValue.max / 100 > 0 ? barValue / 100 : barValue / 10;
   }

   return (
      <div className="w-full border rounded border-white/10 bg-bgPrimaryBar">
         <div className="flex justify-between items-center p-4 border-b border-white/10 text-base">
            <h2 className="text-white/90">{ChartTitle[type]}</h2>
            <h2 className="text-white/70">{date}</h2>
         </div>
         <div className=" px-4 pt-8 pb-12 flex items-end">
            <AxisY value={yValue as axisYValue}></AxisY>
            <div className="relative flex flex-1 flex-col items-end pl-4">
               <div className="w-full  min-h-[120px] flex flex-row items-end justify-between bg-white/5 text-right">
                  {chart.map((bar, index) => {
                     let barValue = formatChartBarValue(
                        bar.content,
                        yValue as axisYValue
                     );
                     return (
                        <ChartBar
                           barValue={barValue}
                           content={bar.content}
                           title={bar.title}
                           key={index}
                        ></ChartBar>
                     );
                  })}
                  {/* <div className={`h-[280px] w-3 bg-highlight`}></div>; */}
               </div>
               <AxisX value={xValue}></AxisX>
            </div>
         </div>
      </div>
   );
};

export default Chart;
