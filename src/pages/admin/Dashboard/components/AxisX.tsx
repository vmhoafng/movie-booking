import React from "react";
const months: number[] = [];

const AxisX = () => {
   if (months.length <= 0)
      for (let i = 1; i <= 31; i++) {
         months.push(i);
      }
   return (
      <div className="w-full h-full flex flex-row justify-between items-center text-right gap-y-5 text-white/70 text-sm">
         {months.map((month) => (
            <h3 className="w-3 text-center">{month}</h3>
         ))}
      </div>
   );
};

export default AxisX;
