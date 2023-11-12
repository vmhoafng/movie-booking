import React from "react";

// eslint-disable-next-line no-empty-pattern
const AxisX = ({ value }: { value: string[] }) => {
   return (
      <div className="absolute -bottom-8 left-0 pl-4 w-full flex flex-row justify-between items-start text-center text-white/70 text-sm">
         {value.map((item, index) => (
            <h3 className="w-3 text-center" key={index}>
               {item}
            </h3>
         ))}
      </div>
   );
};

export default AxisX;
