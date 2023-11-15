import React, { useState } from "react";
import Title from "../client/payment/components/Title";
import Button from "@/app/components/button/Button";
import clsx from "clsx";
import Input from "@/app/components/inputs/Input";
import CreatePasswordForm from "./components/CreatePasswordForm";
import EmailAddress from "./components/EmailAddress";

type IStep = 1 | 2 | 3;

const ForgotPassword = () => {
   const [step, setStep] = useState<IStep>(1);
   return (
      <div className="flex flex-col-reverse xl:flex-row justify-center items-center lg:items-start py-5 lg:py-[50px] 2xl:py-[60px] gap-[10px] lg:gap-5 2xl:gap-20">
         <div className="flex flex-col justify-center items-center gap-5">
            <div className="bg-[#0A1E5ECC] rounded flex flex-col items-center w-full xl:w-[660px] 2xl:w-[710px] font-inter px-5 pb-5 md:px-10 md:pb-10 lg:px-[50px] lg:pb-6 border border-borderColor shadow-[4px_4px_30px_0px_rgba(0,0,0,0.50)]">
               <Title>
                  <span className="text-lightPrimary">Quên mật khẩu</span>
               </Title>
               <div className="w-full border-t border border-borderColor" />
               <div className="py-3">
                  <span className="text-white/70">
                     Để thay đổi mật khẩu mới, vui lòng thực hiện các bước sau:
                  </span>
                  <div className="flex flex-col justify-start mt-2 text-white/90">
                     <span className={clsx(step === 1 && "text-highlight")}>
                        Bước 1: Nhập địa chỉ email bạn đã đăng ký tài khoản. Hệ
                        thống sẽ gửi mã xác thực gồm 6 chữ số vào địa chỉ email
                        bạn đã nhập.
                     </span>
                     <span className={clsx(step === 2 && "text-highlight")}>
                        Bước 2: Nhập mã xác thực.
                     </span>
                     <span className={clsx(step === 3 && "text-highlight")}>
                        Bước 3: Tạo mật khẩu mới.
                     </span>
                  </div>
               </div>
            </div>

            {step === 1 && <EmailAddress></EmailAddress>}
            {step === 2 && <div>Enter OTP</div>}
            {step === 3 && <CreatePasswordForm></CreatePasswordForm>}
         </div>
      </div>
   );
};

export default ForgotPassword;
