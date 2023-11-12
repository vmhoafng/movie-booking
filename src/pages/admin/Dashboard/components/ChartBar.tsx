import { IChartItem } from "@/app/redux/dashboard/dashboard.slice";
import React from "react";

interface ChartBarProps {
   content: IChartItem["content"];
   title: IChartItem["title"];
   barValue: number;
}

const ChartBar = ({ content, title, barValue }: ChartBarProps) => {
   // console.log(title, barValue);
   let height = barValue * 40;

   return (
      <div
         className={`block w-3 bg-highlight`}
         style={{ height: `${height}px` }}
      ></div>
   );
};

export default ChartBar;
