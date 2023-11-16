import Button from "@/app/components/button/Button";
import Input from "@/app/components/inputs/Input";
import React from "react";

const CreatePasswordForm = () => {
   return (
      <div className="bg-[#0A1E5ECC] rounded flex flex-col items-center w-full xl:w-[660px] 2xl:w-[710px] px-5 py-5 md:px-10 md:pb-10 lg:px-[50px] lg:pb-6 border border-borderColor shadow-[4px_4px_30px_0px_rgba(0,0,0,0.50)]">
         <div className="w-full flex flex-col gap-2 pb-4">
            <Input
               id="password"
               label="Mật khẩu mới"
               col
               placeholder=""
               type="password"
               required
            ></Input>
            <Input
               id="confirm_password"
               label="Xác nhận mật khẩu mới"
               col
               placeholder=""
               type="password"
               required
            ></Input>
         </div>

         <div className="w-full flex flex-col items-center gap-2 font-inter">
            <Button highlight fullWidth type="submit">
               Thay đổi
            </Button>
            <div className="text-lightPrimary font-semibold leading-6 cursor-pointer text-sm">
               Quay lại
            </div>
         </div>
      </div>
   );
};

export default CreatePasswordForm;
