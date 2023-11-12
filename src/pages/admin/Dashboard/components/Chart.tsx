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

   console.log(maxContent);

   return maxContent;
}

function formatAxisYValue(num: number) {
   if (isNaN(num)) {
      return null;
   }

   console.log(num);

   let result = {};

   if (num < 100) {
      const roundedValue = Math.ceil(num / 10);
      result = { max: roundedValue * 10, character: "" };
   } else if (num < 1000) {
      const roundedValue = Math.ceil(num / 100);
      result = { max: roundedValue, character: "" };
   } else if (num < 1000000) {
      const roundedValue = Math.ceil(num / 1000);
      result = { max: roundedValue, character: "K" };
   } else if (num < 1000000000) {
      const roundedValue = Math.ceil(num / 1000000);
      result = { max: roundedValue, character: "M" };
   } else if (num > 1000000000) {
      const roundedValue = Math.ceil(num / 1000000000);
      result = { max: roundedValue, character: "B" };
   } else {
      const roundedValue = Math.ceil(num / 100);
      console.log(roundedValue);

      result = { max: roundedValue, character: "" };
   }

   console.log(result);

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
      console.log(content, yValue.character);

      switch (yValue.character) {
         case "":
            barValue = barValue < 100 ? barValue : barValue / 100;
            break;
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

      return yValue.max / 100 > 1
         ? barValue / 100
         : yValue.max / 10 > 1
         ? barValue / 10
         : barValue;
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
               <div className="w-full  min-h-[40px] flex flex-row items-end justify-between bg-white/5 text-right">
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
