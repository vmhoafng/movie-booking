import React from "react";
import Input from "../inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../../../app/components/button/Button";

const validationSchema = yup.object().shape({
   email: yup.string().email().required(),
   password: yup.string().required().min(6),
});

const LoginForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(validationSchema),
   });

   function onSubmit(data) {
      console.log(data);
   }

   return (
      <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
         <Input
            // disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="email"
            label="Email"
            type="text"
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
         <span className="block w-full mt-4 text-right text-sm text-borderColor hover:cursor-pointer hover:text-lightPrimary transition-colors duration-200">
            Quên mật khẩu?
         </span>
         <div>
            <Button lg type="submit">
               Đăng nhập
            </Button>
         </div>
      </form>
   );
};

export default LoginForm;
