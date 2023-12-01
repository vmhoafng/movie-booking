import { useState } from "react";
import AccountForm from "./components/AccountForm";
import PasswordItem from "./components/PasswordForm";
import CurrencyHistoryItem from "./components/CurrencyHistory";
import AvatarItem from "./components/AvatarItem";
import { Toaster } from "sonner";
export default function Profile() {
  return (
    <div>
      <Toaster
        richColors
        expand
        gap={10}
        closeButton
        position="top-center"
        // toastOptions={{
        //   style: {
        //     background: "transparent",
        //     padding: 0,
        //     width: "fit-content",
        //     border: 0,
        //     marginTop: 180,
        //   },
        // }}
      />
      <div
        className="
           w-full
           md:mx-auto
           flex
           flex-col
           justify-start
           items-center
           lg:items-start
           py-[50px]
          "
      >
        <div
          className="
               flex
               justify-between
               w-full
               border-b-[2px]
               border-borderColor"
        >
          <h2
            className="
               font-bold
               uppercase
               text-white
               2xl:text-xl
               text-left"
          >
            Thông tin Tài khoản
          </h2>
          <div className="relative">
            <CurrencyHistoryItem />
          </div>
        </div>
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
            <AvatarItem />
          </div>
          <div className="w-full lg:flex lg:gap-10">
            <AccountForm />
            <div className="lg:hidden w-full border-t border-dashed border-borderColor" />
            <PasswordItem />
          </div>
        </div>
      </div>
    </div>
  );
}
