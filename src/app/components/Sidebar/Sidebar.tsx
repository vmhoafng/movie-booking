import React, { useEffect, useState } from "react";
import { NavItem, NavItemDropdownProps } from "./Sidebar.type";
import { text } from "stream/consumers";
import { Link, useLocation } from "react-router-dom";
import {
   ChevronDownIcon,
   ChevronRightIcon,
   FilmIcon,
   MinusIcon,
   UsersIcon,
   VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { PATHS } from "../../constants/path";

const RenderIcon = ({ icon: Icon, isActive }: any) => {
   return <Icon className={`h-5 w-5 ${isActive ? "text-highlight " : ""}`} />;
};

const NavItemDropdown = ({ item, isChild, active }: NavItemDropdownProps) => {
   const regex = new RegExp(`${item.to!}`);
   const isActive = regex.test(active);

   if (isChild) {
      return (
         <li className={`py-[10px] ${isActive ? "text-highlight " : ""}`}>
            <Link to={item.to!}>
               <div className="flex gap-5">
                  <MinusIcon className={`h-[18px] w-[12px]`} />
                  <div className="">
                     <p>{item.text}</p>
                  </div>
               </div>
            </Link>
         </li>
      );
   }

   const NavButton = () => {
      return (
         <div className="flex gap-5 items-center">
            <div className="">
               {/* @ts-ignore */}
               <RenderIcon icon={item.icon} />
            </div>
            <div className="">
               <p>{item.text}</p>
            </div>
            <div className="ml-auto">
               {item.children ? (
                  <ChevronDownIcon className="h-[18px] w-[18px]" />
               ) : (
                  <ChevronRightIcon className="h-[18px] w-[18px]" />
               )}
            </div>
         </div>
      );
   };

   return (
      <li className={`py-[10px] ${isActive ? "text-highlight " : ""}`}>
         {!item.children ? (
            <Link to={item.to!}>
               <NavButton />
            </Link>
         ) : (
            <NavButton />
         )}
         {item.children && (
            <ul className="mt-5 flex flex-col gap-5 text-white/60">
               {item.children.map((item, index) => {
                  return (
                     <NavItemDropdown
                        key={`nav-${item.text}-child-${index}`}
                        item={item}
                        isChild
                        active={active}
                     />
                  );
               })}
            </ul>
         )}
      </li>
   );
};

function Sidebar() {
   const location = useLocation();
   const [active, setActive] = useState<string>("");

   useEffect(() => {
      setActive(location.pathname);
   }, [location]);

   const navItems: NavItem[] = [
      {
         text: "Thống kê",
         icon: ChartBarIcon,
         to: PATHS.ADMIN.DASHBOARD.IDENTITY,
      },
      {
         text: "Phim",
         icon: FilmIcon,
         to: PATHS.ADMIN.MOVIES.IDENTITY,
      },
      {
         text: "Rạp",
         icon: VideoCameraIcon,
         children: [
            {
               text: "Hệ thống rạp",
               to: PATHS.ADMIN.CINEMA.IDENTITY,
            },
            {
               text: "Suất chiếu",
               to: PATHS.ADMIN.SHOWTIMES.IDENTITY,
            },
         ],
      },
      {
         text: "Người dùng",
         icon: UsersIcon,
         children: [
            {
               text: "Thông tin",
               to: PATHS.ADMIN.USERS.IDENTITY,
            },
            {
               text: "Bình luận",
               to: PATHS.ADMIN.COMMENTS.IDENTITY,
            },
         ],
      },
   ];

   return (
      <div className="bg-[#05113f] w-[250px] h-full text-sm border-r border-white/10">
         <div className="w-full">
            <img
               src="/assets/images/Logo.png"
               alt="Cinema logo"
               className="w-full object-none"
            />
         </div>
         <div className="w-full">
            <ul className="flex flex-col px-6 gap-[10px]">
               {navItems.map((item: NavItem, index: number) => {
                  return (
                     <NavItemDropdown
                        key={`nav-item-${index}`}
                        item={item}
                        active={active}
                     />
                  );
               })}
            </ul>
         </div>
      </div>
   );
}

export default Sidebar;
