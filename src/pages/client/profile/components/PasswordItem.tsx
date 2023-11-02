import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "../../../../app/components/inputs/Input";
import Button from "../../../../app/components/button/Button";
import useWindowDimensions from "../../../../app/hooks/useWindowDimensions";
function PasswordItem() {
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };
  return (
    <div className="lg:w-[250px] xl:w-[280px] 2xl:w-[400px] flex flex-col py-[25px] gap-[25px] lg:py-5">
      <div className="flex flex-col gap-[10px]">
        <Input
          type="password"
          id="currentPassword"
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
    </div>
  );
}

export default PasswordItem;
