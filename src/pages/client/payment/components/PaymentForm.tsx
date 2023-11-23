import React, { useEffect, useState } from "react";
import Title from "./Title";
import Input from "@/app/components/inputs/Input";
import {
  useForm,
  FieldValues,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import Button from "@/app/components/button/Button";
import SwitchButton from "@/app/components/button/SwitchButton";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PaymentItem from "./PaymentItem";
import { useRedux } from "@/app/hooks";
import { createBill } from "@/app/redux/payment";
import { useNavigate } from "react-router-dom";
import { UserData, getCurrentUser } from "@/app/redux/auth";

function PaymentForm() {
  const { dispatch, appSelector } = useRedux();
  const { user, isLoading } = appSelector((state) => state.auth);
  const [currentUser, setCurrentUser] = useState<UserData>();
  useEffect(() => {
    if (!isLoading) {
      setCurrentUser(user);
    }
  }, [user, currentUser, isLoading]);
  const validationSchema = yup.object().shape({
    isUsingPoint: yup.boolean(),
  });

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver<FieldValues>(validationSchema),
    defaultValues: { isUsingPoint: false },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    dispatch(createBill(data.isUsingPoint)).then(
      (data) => {
        if (data.payload) window.location.replace(data.payload);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return (
    <form
      className="
         bg-[#0A1E5ECC]
         flex
         flex-col
         items-center
         w-full
         w-full
         xl:w-[660px]
         2xl:w-[710px]
         px-5
         pb-5
         md:px-10
         md:pb-10
         lg:px-[50px]
         lg:pb-6
         border
         border-borderColor
         shadow-[4px_4px_30px_0px_rgba(0,0,0,0.50)]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title>Payment</Title>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex flex-col gap-[10px] py-4">
        <PaymentItem label="Họ và tên" value={user.full_name} />
        <PaymentItem label="Email" value={user.email} />
        <PaymentItem label="Số điện thoại" value={user.phone_number} />
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex flex-col items-center gap-2 font-inter">
        <div className="w-full flex items-center justify-between pt-2">
          <div className="text-white/90 text-[15px] lg:text-sm 2xl:text-base leading-6 md:pb-[10px] lg:py-5">
            Sử dụng điểm thành viên (50.000)
          </div>

          <Controller
            control={control}
            name="isUsingPoint"
            render={({ field: { ref, ...field } }) => (
              <SwitchButton {...field} disabled={isLoading} />
            )}
          />
        </div>
        <div className="w-full text-white/50 font-semibold text-[13px] leading-6">
          *Vui lòng kiểm tra thông tin trước khi thanh toán.
        </div>
        <Button highlight fullWidth type="submit">
          Thanh toán
        </Button>
        <div className="text-lightPrimary font-semibold leading-6 cursor-pointer">
          Quay lại
        </div>
      </div>
    </form>
  );
}

export default PaymentForm;
