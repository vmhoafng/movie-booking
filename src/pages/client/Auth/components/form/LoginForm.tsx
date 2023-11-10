import React from "react";
import Input from "../inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../../../app/components/button/Button";
import { useRedux } from "@/app/hooks";
import { login } from "@/app/redux/auth";
import { IPostLoginPayload } from "@/app/types/auth";
import { Navigate, useLocation, useNavigation } from "react-router-dom";
import { PATHS } from "@/app/constants/path";

const validationSchema = yup.object().shape({
   email: yup.string().email().required(),
   password: yup.string().required().min(6),
});

const LoginForm = () => {
   const { dispatch, appSelector } = useRedux();

   const { userLoggedIn } = appSelector((state) => state.auth);

   const location = useLocation();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>({
      resolver: yupResolver<FieldValues>(validationSchema),
   });

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      dispatch(login(data as IPostLoginPayload));
   };

   return (
      <>
         {userLoggedIn && (
            <Navigate
               to={{
                  pathname: location.state?.from || `/${PATHS.HOME.IDENTITY}`,
               }}
               replace
            />
         )}
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
               <Button large type="submit">
                  Đăng nhập
               </Button>
            </div>
         </form>
      </>
   );
};

export default LoginForm;
