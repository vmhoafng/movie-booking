import { useState } from "react";
import AccountItem from "./components/AccountItem";
import PasswordItem from "./components/PasswordItem";

export default function Profile() {
  return (
    <div
      className="object-cover"
      style={{ backgroundImage: `url('/assets/images/bg-04.jpg')` }}
    >
      <div className="bg-bgPrimary/80">
        <div
          className="
          w-full
          md:w-[640px]
          lg:w-[790px]
          xl:w-[960px]
          2xl:w-[1200px]
          md:mx-auto
          px-[15px]
          md:px-0
          flex
          flex-col
          justify-start
          items-center
          lg:items-start
          py-[50px]
         "
        >
          <h2
            className="
              w-full
              border-b-[2px]
              border-borderColor
              font-bold
              uppercase
              text-white
              2xl:text-xl
              text-left
              mx-auto"
          >
            Thông tin Tài khoản
          </h2>
          <div
            className="
            w-full
            flex
            flex-col
            lg:flex-row
            justify-center
            lg:justify-between
            items-center
            lg:items-start
            py-[50px]
            lg:py-0
            mx-auto
            lg:px-0
            lg:gap-7
            xl:gap-8
            2xl:gap-[50px]"
          >
            <div className="w-full pt-5 lg:py-[50px]">
              <div className="flex flex-col gap-[10px] items-center">
                <img
                  src="/assets/images/bg-01.jpg"
                  alt=""
                  className="h-[150px] lg:h-[120px] 2xl:h-[150px] w-[150px] lg:w-[120px] 2xl:w-[150px] border-[3px] rounded-full object-cover border-borderColor "
                />
                <div className="flex flex-col items-center">
                  <div className="text-[15px] text-white font-bold leading-6">
                    Điểm thành viên
                  </div>
                  <div className="text-sm text-highlight font-bold leading-6">
                    10200 điểm
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:flex lg:gap-10">
              <AccountItem />
              <div className="lg:hidden w-full border-t border-dashed border-borderColor" />
              <PasswordItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
