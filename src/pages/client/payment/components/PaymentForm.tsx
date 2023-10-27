import React, { useState } from "react";
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

function PaymentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = yup.object().shape({
    isUsingPoint: yup.boolean(),
  });
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
  };
  return (
    <form
      className="
         bg-[#0A1E5ECC]
         flex
         flex-col
         items-center
         w-full
         md:w-[640px]
         lg:w-[520px]
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
        <PaymentItem label="Họ và tên" value="Võ Minh Hoàng"/>
        <PaymentItem label="Email" value="mhoang.developer@gmail.com"/>
        <PaymentItem label="Số điện thoại" value="0929829783"/>
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