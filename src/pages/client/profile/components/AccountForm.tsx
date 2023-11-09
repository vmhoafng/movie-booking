import React, { useEffect, useMemo, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/button/Button";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import SelectInput, { SelectOption } from "@/app/components/inputs/SelectInput";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Toaster, toast } from "sonner";
import { useRedux } from "@/app/hooks";
import { UserData, updateProfile } from "@/app/redux/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IPutProfilePayload } from "@/app/types/profile";
import Icon from "@/app/components/icon/Icon";

const genderOptions: SelectOption[] = [
  { label: "", value: "" },
  { label: "Nam", value: "Nam" },
  { label: "Nữ", value: "Nữ" },
  { label: "Khác", value: "Khác" },
];

function AccountItem() {
  const { width } = useWindowDimensions();
  const { appSelector, dispatch } = useRedux();
  const { user, isLoading } = appSelector((state) => state.auth);
  const [currentUser, setCurrentUser] = useState<UserData>();
  useEffect(() => {
    if (!isLoading) {
      setCurrentUser(user);
    }
  }, [user, currentUser, isLoading]);
  const validationSchema = yup.object({
    fullName: yup.string(),
    dateOfBirth: yup.string(),
    gender: yup.string(),
    phoneNumber: yup.string(),
    email: yup.string().email(),
  });

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver<FieldValues>(validationSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    toast(
      <div className="bg-bgPrimary w-full">
        <div>Đang tải...</div>
        <Icon icon="close" />
      </div>,
      { className: "success" }
    );
    // dispatch(updateProfile(data as { payload: IPutProfilePayload }));
  };

  useEffect(() => {
    reset({
      fullName: currentUser?.full_name,
      email: currentUser?.email,
      dateOfBirth: currentUser?.date_of_birth,
      phoneNumber: currentUser?.phone_number,
      gender: currentUser?.gender,
    });
  }, [currentUser, reset]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full lg:w-[344px] xl:w-[470px] 2xl:w-[550px] flex flex-col gap-[25px] py-10 lg:py-5"
    >
      <Toaster
        position="top-center"
        toastOptions={{
          className: "success",
          style: { background: "green" },
        }}
      />
      <div className="flex flex-col gap-[10px]">
        <Input
          id="fullName"
          label="Họ và Tên"
          col
          register={register}
          errors={errors}
          required
        />
        <div className="w-full flex gap-[10px] lg:flex-col xl:flex-row xl:gap-[30px] 2xl:gap-5">
          <Input
            id="dateOfBirth"
            label="Ngày sinh"
            type="date"
            col
            register={register}
            errors={errors}
            endIcon="calendar"
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
              control={control}
              options={[
                { label: "Nam", value: "Nam" },
                { label: "Nữ", value: "Nữ" },
                { label: "Khác", value: "Khác" },
              ]}
              placeholder="Chọn giới tính"
              name="gender"
              onChange={() => {}}
              register={register}
              inputClassName="w-full"
              value={genderOptions.find(
                (gender) => gender.value === currentUser?.gender
              )}
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
                h-[35px]"
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
      <Button type="submit" large secondary fullWidth={width > 900}>
        Cập nhật
      </Button>
    </form>
  );
}

export default AccountItem;
