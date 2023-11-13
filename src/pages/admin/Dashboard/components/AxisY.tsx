import React from "react";
import { axisYValue } from "./Chart";

const AxisY = ({ value }: { value: axisYValue }) => {
   let arrValue = [];
   console.log(value.max);

   let step = value.max / 100 > 1 ? 100 : value.max / 10 > 1 ? 10 : 1;

   for (let i = 0; i <= value.max; i += step) {
      arrValue.push(i);
   }

   return (
      <div className="h-full pr-4 flex flex-col-reverse text-right text-white/70 text-sm border-r border-borderColor">
         {arrValue.map((item) => {
            return (
               <div className="h-10 flex items-end justify-end">
                  <h3 className="leading-[9px] text-[14px]">
                     {item + value.character}
                  </h3>
               </div>
            );
         })}
      </div>
   );
};

export default AxisY;
