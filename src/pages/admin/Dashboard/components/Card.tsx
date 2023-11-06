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
      <div className="w-[290px] h-[160px] flex flex-col justify-between border-[0.5px] border-white/10 p-4 rounded bg-bgPrimaryBar font-inter cursor-pointer shadow-[2px_4px_6px_0px_rgba(0,0,0,0.15)] hover:shadow-[4px_6px_12px_0px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-500">
         <div className="flex justify-between items-center mb-7">
            <span className="uppercase text-xs text-white/50 font-normal">
               {title}
            </span>
            {status ? (
               status === "up" ? (
                  <div className="flex items-center text-highlight font-semibold">
                     <ArrowUpLeftIcon className="h-3 w-3 mr-2"></ArrowUpLeftIcon>
                     <span className={"text-sm"}>{percent}%</span>
                  </div>
               ) : (
                  <div className="flex items-center text-gradientStart font-semibold">
                     <ArrowDownRightIcon className="h-3 w-3 mr-2"></ArrowDownRightIcon>
                     <span className={"text-sm"}>{percent}%</span>
                  </div>
               )
            ) : (
               <span className={"text-highlight text-sm font-semibold"}>{percent}%</span>
            )}
         </div>
         <div className="flex-1 flex justify-between items-end">
            <div className="h-full flex flex-col justify-between items-start">
               <div className="flex justify-between items-end uppercase text-white/90">
                  <div
                     className={clsx(
                        "font-semibold ",
                        type === "revenue" || type === "ticket"
                           ? "text-2xl "
                           : "text-xl"
                     )}
                  >
                     {value}
                  </div>
               </div>
               <span className="text-sm text-lightPrimary border-b border-lightPrimary leading-3">
                  Xem chi tiết
               </span>
            </div>
            <DashboardCardIcon type={type}></DashboardCardIcon>
         </div>
      </div>
   );
};

export default Card;
