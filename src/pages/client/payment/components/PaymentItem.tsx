import React, { useState } from "react";
import Title from "./Title";
import Input from "../../../../app/components/inputs/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../../../../app/components/button/Button";
import SwitchButton from "../../../../app/components/button/SwitchButton";
import useWindowDimensions from "../../../../app/hooks/useWindowDimensions";
function PaymentItem() {
  const { width } = useWindowDimensions();
  const [enabled, setEnabled] = useState(false);
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
    <div
      className="
         bg-[#0A1E5ECC]
         flex
         flex-col
         items-center
         w-[360px]
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
    >
      <Title>Payment</Title>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex flex-col gap-[10px] py-4">
        <Input
          borderWhite
          col={width < 680}
          id="payment"
          label="Hình thức thanh toán"
          register={register}
          errors={errors}
        />
        <Input
          borderWhite
          col={width < 680}
          id="name"
          label="Họ và Tên"
          register={register}
          errors={errors}
        />
        <Input
          borderWhite
          col={width < 680}
          id="email"
          type="email"
          label="Email"
          register={register}
          errors={errors}
        />
        <Input
          borderWhite
          col={width < 680}
          id="phoneNumber"
          label="Số điện thoại"
          register={register}
          errors={errors}
        />
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex flex-col items-center gap-2 font-inter">
        <div className="w-full flex items-center justify-between pt-2">
          <div className="text-white/90 text-[15px] lg:text-sm 2xl:text-base leading-6 md:pb-[10px] lg:py-5">
            Sử dụng điểm thành viên (50.000)
          </div>
          <SwitchButton
            enabled={enabled}
            setEnabled={() => {
              setEnabled(!enabled);
            }}
          />
        </div>
        <div className="w-full text-white/50 font-semibold text-[13px] leading-6">
          *Vui lòng kiểm tra thông tin trước khi thanh toán.
        </div>
        <Button highlight fullWidth>
          Thanh toán
        </Button>
        <div className="text-lightPrimary font-semibold leading-6 cursor-pointer">
          Quay lại
        </div>
      </div>
    </div>
  );
}

export default PaymentItem;
