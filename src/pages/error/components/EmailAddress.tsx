import Button from "@/app/components/button/Button";
import Input from "@/app/components/inputs/Input";
import React from "react";

const EmailAddress = () => {
   return (
      <div className="bg-[#0A1E5ECC] rounded flex flex-col items-center w-full xl:w-[660px] 2xl:w-[710px] px-5 py-5 md:px-10 md:pb-10 lg:px-[50px] lg:pb-6 border border-borderColor shadow-[4px_4px_30px_0px_rgba(0,0,0,0.50)]">
         <Input
            id="email"
            label="Email"
            col
            placeholder="example@gmail.com"
         ></Input>

         <div className="w-full flex flex-col items-center gap-2 font-inter">
            <div className="w-full text-white/50 font-semibold text-[13px] leading-6">
               *Hệ thống sẽ gửi một liên kết xác thực để gửi mã OTP. Vui lòng
               kiểm tra email sau ít phút.
            </div>
            <Button highlight fullWidth type="submit">
               Tiếp tục
            </Button>
            <div className="text-lightPrimary font-semibold leading-6 cursor-pointer text-sm">
               Quay lại
            </div>
         </div>
      </div>
   );
};

export default EmailAddress;
