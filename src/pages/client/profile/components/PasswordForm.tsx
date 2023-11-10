import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "../../../../app/components/inputs/Input";
import Button from "../../../../app/components/button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useWindowDimensions from "../../../../app/hooks/useWindowDimensions";
function PasswordItem() {
  const { width } = useWindowDimensions();
  const validationSchema = yup.object({
    oldPassword: yup.string(),
    newPassword: yup.string(),
    confirmNewPassword: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:w-[250px] xl:w-[280px] 2xl:w-[400px] flex flex-col py-[25px] gap-[25px] lg:py-5"
    >
      <div className="flex flex-col gap-[10px]">
        <Input
          type="password"
          id="oldPassword"
          label="Mật khẩu hiện tại"
          col
          register={register}
          errors={errors}
        />
        <Input
          type="password"
          id="newPassword"
          label="Mật khẩu mới"
          col
          register={register}
          errors={errors}
        />
        <Input
          type="password"
          id="confirmNewPassword"
          label="Xác nhận mật khẩu mới"
          col
          register={register}
          errors={errors}
        />
      </div>
      <div className="hidden xl:block w-full border-t border-dashed border-borderColor" />
      <Button large secondary fullWidth={width > 900}>
        Thay đổi
      </Button>
    </form>
  );
}

export default PasswordItem;
