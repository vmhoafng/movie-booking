import React from "react";
import clsx from "clsx";

interface TitleProps {
   children: React.ReactNode;
   active?: Boolean;
   onClick?: () => void;
}

function Title({ children, active, onClick }: TitleProps) {
   return (
      <div onClick={onClick} className=" cursor-pointer">
         <h2
            className={clsx(
               `uppercase lg:text-[18px] lg:border-b-2 font-bold text-white border-b hover:border-highlight transition-all duration-300`,
               active ? "border-highlight w-fit" : "border-transparent"
            )}
         >
            {children}
         </h2>
      </div>
   );
}

export default Title;
