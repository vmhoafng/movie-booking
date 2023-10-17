import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "../../../../app/components/inputs/Input";
import Button from "../../../../app/components/button/Button";
import useWindowDimensions from "../../../../app/hooks/useWindowDimensions";
function AccountItem() {
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
    <div className="w-[395px] md:w-[640px] lg:w-[344px] xl:w-[470px] 2xl:w-[550px] flex flex-col gap-[25px] py-10 lg:py-5">
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
            id="name"
            label="Họ và Tên"
            col
            register={register}
            errors={errors}
          />
          <Input
            id="name"
            label="Họ và Tên"
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
      <Button lg secondary fullWidth={width > 900}>
        Cập nhật
      </Button>
    </div>
  );
}

export default AccountItem;
