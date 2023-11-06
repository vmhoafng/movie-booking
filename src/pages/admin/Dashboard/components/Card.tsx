import { ArrowDownRightIcon, ArrowUpLeftIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React from "react";
import DashboardCardIcon from "./DashboardCardIcon";
import { string } from "yup";

export type CardType = "revenue" | "ticket" | "cinema" | "movie";

export interface DashboardCardProps {
   title: string;
   percent: string;
   value: string;
   status?: string;
   type: CardType;
}

const Card = ({ title, percent, value, status, type }: DashboardCardProps) => {
   return (
      <div className="w-[260px] h-[150px] flex flex-col justify-between p-4 rounded bg-[#021339] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.2)]">
         <div className="flex justify-between items-center mb-3">
            <span className="uppercase text-xs text-white/70">{title}</span>
            {status ? (
               status === "up" ? (
                  <div className="flex items-center text-highlight ">
                     <ArrowUpLeftIcon className="h-3 w-3 mr-[2px]"></ArrowUpLeftIcon>
                     <span className={"text-sm"}>{percent}%</span>
                  </div>
               ) : (
                  <div className="flex items-center text-gradientStart ">
                     <ArrowDownRightIcon className="h-3 w-3 mr-[2px]"></ArrowDownRightIcon>
                     <span className={"text-sm"}>{percent}%</span>
                  </div>
               )
            ) : (
               <span className={"text-highlight text-sm"}>{percent}%</span>
            )}
         </div>
         <div className="flex justify-between items-center uppercase">
            <div className="text-2xl font-bold text-white/90">{value}</div>
            {type === "revenue" && <span className="text-white/70">vnd</span>}
         </div>
         <div className="flex justify-between items-center">
            <span className="text-sm text-lightPrimary cursor-pointer">
               Xem chi tiết
            </span>
            <DashboardCardIcon type={type}></DashboardCardIcon>
         </div>
      </div>
   );
};

export default Card;
