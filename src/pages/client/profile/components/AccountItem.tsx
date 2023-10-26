import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/button/Button";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function AccountItem() {
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    date: yup.string().required(),
    gender: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.number().required(),
    // password: yup.string().required().min(6),
    // confirmPassword: yup.string().oneOf([yup.ref("password")]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver<FieldValues>(validationSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full lg:w-[344px] xl:w-[470px] 2xl:w-[550px] flex flex-col gap-[25px] py-10 lg:py-5"
    >
      <div className="flex flex-col gap-[10px]">
        <Input
          id="name"
          label="Họ và Tên"
          col
          register={register}
          errors={errors}
        />
        <div className="w-full flex gap-[10px] lg:flex-col xl:flex-row xl:gap-[30px] 2xl:gap-5">
          <Input
            id="date"
            label="Ngày sinh"
            type="date"
            col
            register={register}
            errors={errors}
            endIcon="/assets/icons/twitter.svg"
          />
          <Input
            id="gender"
            label="Giới tính"
            col
            register={register}
            errors={errors}
          />
        </div>
        <Input
          id="email"
          type="email"
          label="Email"
          col
          register={register}
          errors={errors}
        />
        <Input
          id="phoneNumber"
          type="tel"
          label="Số điện thoại"
          col
          register={register}
          errors={errors}
        />
      </div>
      <div className="hidden xl:block w-full border-t border-dashed border-borderColor" />
      <Button large secondary fullWidth={width > 900}>
        Cập nhật
      </Button>
    </form>
  );
}

export default AccountItem;
