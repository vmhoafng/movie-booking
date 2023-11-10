import React from "react";
import clsx from "clsx";

interface TitleProps {
   children: React.ReactNode;
   active?: Boolean;
   disable?: Boolean;

   onClick?: () => void;
}

function Title({ children, active, disable, onClick }: TitleProps) {
   return (
      <div
         onClick={onClick}
         className={clsx(disable ? "cursor-default" : "cursor-pointer")}
      >
         <h2
            className={clsx(
               `uppercase text-base font-bold text-white border-b p-[2px] transition-all duration-300`,
               active ? "border-highlight w-fit" : "border-transparent",
               onClick && "hover:border-highlight"
            )}
         >
            {children}
         </h2>
      </div>
   );
}

export default Title;
