import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "../../../../app/components/inputs/Input";
import Button from "../../../../app/components/button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useWindowDimensions from "../../../../app/hooks/useWindowDimensions";
import { useRedux } from "@/app/hooks";
import {
  checkPassword,
  updatePassword,
} from "@/app/redux/profile/profile.slice";
import { ICheckPassword, IPutPassword } from "@/app/types/profile";
function PasswordItem() {
  const { width } = useWindowDimensions();
  const { appSelector, dispatch } = useRedux();

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
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await dispatch(
      checkPassword({ password: data?.oldPassword } as ICheckPassword)
    )
      .then((data) => data.payload)
      .then((callback) => {
        if (
          callback &&
          data.newPassword.concat() !== "" &&
          data.newPassword === data.confirmNewPassword
        ) {
          dispatch(
            updatePassword({
              oldPassword: data?.oldPassword,
              newPassword: data?.newPassword,
            } as IPutPassword)
          );
        } else console.log("fail");
      });
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
