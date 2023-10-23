import React from "react";
import Input from "../inputs/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../../../app/components/button/Button";

const validationSchema = yup.object().shape({
   fullname: yup.string().required("bắt buộc"),
   email: yup.string().email("không đúng định dạng.").required("bắt buộc"),
   password: yup.string().required("bắt buộc").min(6, "tối thiểu 6 kí tự."),
   confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "không trùng khớp."),
});

const RegisterForm = () => {
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
            id="fullname"
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
            <Button large type="submit">
               Đăng kí
            </Button>
         </div>
      </form>
   );
};

export default RegisterForm;
