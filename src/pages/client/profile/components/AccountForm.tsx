import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/button/Button";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import SelectInput from "@/app/components/inputs/SelectInput";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import clsx from "clsx";
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
      gender: "Nữ",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };
  return (
    <div className="w-full lg:w-[344px] xl:w-[470px] 2xl:w-[550px] flex flex-col gap-[25px] py-10 lg:py-5">
      <div className="flex flex-col gap-[10px]">
        <Input
          id="name"
          label="Họ và Tên"
          col
          register={register}
          errors={errors}
          required
        />
        <div className="w-full flex gap-[10px] lg:flex-col xl:flex-row xl:gap-[30px] 2xl:gap-5">
          <Input
            id="date"
            label="Ngày sinh"
            type="date"
            col
            register={register}
            errors={errors}
            endIcon="/assets/icons/calendar.svg"
          />
          <div className="flex w-full py-[3px] flex-col items-start gap-1">
            <label
              className="text-white/90 text-[15px] font-bold leading-6 min-w-[200px]"
              htmlFor="gender"
            >
              Giới tính
            </label>
            <SelectInput
              id="gender"
              options={[
                { label: "", value: "" },
                { label: "Nam", value: "Nam" },
                { label: "Nữ", value: "Nữ" },
                { label: "Khác", value: "Khác" },
              ]}
              name="gender"
              onChange={() => {}}
              inputClassName="w-full"
              optionClassName="
                z-30
                text-white/90
                hover:bg-white/10
                px-[15px] 
                py-2
                transition-all
                duration-150"
              buttonClassName="
                text-start
                block
                w-full
                px-[15px]
                rounded
                border
                shadow-sm
                bg-white/10
                outline-0
                text-white/90
                border-borderColor
                focus:border-borderColor
                relative
                h-10"
              //@ts-ignore
              endIcon={ChevronDownIcon}
            />
          </div>
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
    </div>
  );
}

export default AccountItem;
