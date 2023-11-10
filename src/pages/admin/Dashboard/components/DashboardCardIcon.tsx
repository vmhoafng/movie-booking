import React from "react";
import clsx from "clsx";

interface DashboardCardIconProps {
   type: string;
}

const icons: Record<string, string> = {
   revenue: "./assets/icons/dollar-sign.svg",
   ticket: "./assets/icons/tag.svg",
   cinema: "./assets/icons/airplay.svg",
   movie: "./assets/icons/film.svg",
};

const DashboardCardIcon: React.FC<DashboardCardIconProps> = ({ type }) => {
   const iconSrc = icons[type] || "";

   return (
      <div
         className={clsx(
            "h-11 w-11 flex justify-center items-center rounded-full",
            type === "revenue" && "bg-[#0C3A50]",
            type === "ticket" && "bg-[#0C3259]",
            type === "cinema" && "bg-[#343733]",
            type === "movie" && "bg-[#241F4E]"
         )}
      >
         <img src={iconSrc} alt="" />
      </div>
   );
};

export default DashboardCardIcon;
