import React, { useEffect, useState } from "react";
import Search from "../inputs/Search";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { PATHS } from "@/app/constants/path";

const navigation = [
   { name: "TRANG CHỦ", to: PATHS.HOME.IDENTITY },
   // { name: 'ĐẶT VÉ', to: '' },
   { name: "PHIM", to: PATHS.MOVIES.IDENTITY },
   { name: "RẠP/VÉ", to: PATHS.CINEMA.IDENTITY },
   // { name: 'THÀNH VIÊN', to: '' },
];
function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

function DesktopNavbar() {
   const [active, setActive] = useState();
   const location = useLocation();
   // var scrollBefore = 0;

   // window.addEventListener("scroll", () => {
   //    const scrolled = window.scrollY;

   //    if (scrollBefore > scrolled) {
   //       console.log("ScrollUP");
   //       scrollBefore = scrolled;
   //       //Desired action
   //    } else if(scrollBefore ){
   //       scrollBefore = scrolled;
   //       console.log("ScrollDOWN");
   //       //Desired action
   //    }
   // });

   useEffect(() => {
      setActive(location.pathname);
   }, [location]);

   return (
      <div className="fixed top-0 left-0 right-0 bg-bgPrimaryBar h-[146px] items-center justify-between w-full z-50 shadow-[0px_30px_120px_0px_rgba(0,0,0,0.3)]">
         <div className="h-[96px] md:w-[1200px] items-center flex justify-between mx-auto">
            <div className="box-border flex w-[127px] min-w-[80px] max-w-[200px] px-[10px] items-center shrink-0 border-spacing-[50px] justify-center align-center">
               <img className="" src={"./assets/images/Logo.png"} alt="" />
            </div>
            <div className=" box-border md:w-[600px] py-[0px] px-[16px] h-[40px] min-w-[300px] flex items-center border-spacing-[32px] ">
               <Search />
            </div>

            <div className="flex items-center">
               <div className="text-[white]/60">Nguyễn Thành Đạt</div>
               <Menu as="div" className="relative ml-3">
                  <div>
                     <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           className="text-white w-8 h-8"
                        >
                           <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </Menu.Button>
                  </div>
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                     <Menu.Item>
                        {({ active }) => (
                           <Link
                              to={PATHS.PROFILE.IDENTITY}
                              className={classNames(
                                 active ? "bg-gray-100" : "",
                                 "block px-4 py-2 text-sm text-gray-700"
                              )}
                           >
                              Thông tin
                           </Link>
                        )}
                     </Menu.Item>
                     <Menu.Item>
                        {({ active }) => (
                           <a
                              href="#"
                              className={classNames(
                                 active ? "bg-gray-100" : "",
                                 "block px-4 py-2 text-sm text-gray-700"
                              )}
                           >
                              Cài đặt
                           </a>
                        )}
                     </Menu.Item>
                     <Menu.Item>
                        {({ active }) => (
                           <a
                              href="#"
                              className={classNames(
                                 active ? "bg-gray-100" : "",
                                 "block px-4 py-2 text-sm text-gray-700"
                              )}
                           >
                              Đăng xuất
                           </a>
                        )}
                     </Menu.Item>
                  </Menu.Items>
               </Menu>
            </div>
         </div>
         <div className="">
            <div className="h-[50] md:w-[960] flex justify-center align-center gap-[60px] border-t-2 border-bgPrimary">
               {navigation.map((item) => {
                  const regex = new RegExp(`^/${item.to}$`);
                  return (
                     <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                           regex.test(active)
                              ? " text-highlight"
                              : "text-gray-300  hover:text-white",
                           "rounded-md px-3 py-[15px] text-sm font-medium"
                        )}
                        aria-current={regex.test(active) ? "page" : undefined}
                     >
                        {item.name}
                     </Link>
                  );
               })}
            </div>
         </div>
      </div>
   );
}

export default DesktopNavbar;
