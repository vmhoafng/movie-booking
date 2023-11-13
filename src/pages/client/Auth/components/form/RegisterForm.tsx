// @ts-nocheck
import React from "react";
import Input from "../inputs/Input";

import Button from "../../../../../app/components/button/Button";
import useRegisterForm from "./hooks/useRegisterForm";
import { Toaster } from "sonner";

const RegisterForm = () => {
   const { register, errors, isSubmitted, handleRegister } = useRegisterForm();

   return (
      <>
         <Toaster
            position="top-center"
            expand
            gap={10}
            closeButton
            richColors
         />
         <form className="w-full space-y-6" onSubmit={handleRegister}>
            <Input
               // disabled={isLoading}
               register={register}
               errors={errors}
               required
               id="fullName"
               label="Họ tên"
               placeholder="Enter your name"
            />
            <Input
               // disabled={isLoading}
               register={register}
               errors={errors}
               required
               id="email"
               label="Email"
               placeholder="example@gmail.com"
            />
            <Input
               // disabled={isLoading}
               register={register}
               errors={errors}
               required
               id="password"
               label="Mật khẩu"
               type="password"
               min="6"
               placeholder="Password"
            />
            <Input
               // disabled={isLoading}
               register={register}
               errors={errors}
               required
               id="confirmPassword"
               label="Xác nhận mật khẩu"
               type="password"
               placeholder="Password"
            />
            <div>
               <Button disabled={isSubmitted} medium type="submit">
                  Đăng kí
               </Button>
            </div>
         </form>
      </>
   );
};

export default RegisterForm;
