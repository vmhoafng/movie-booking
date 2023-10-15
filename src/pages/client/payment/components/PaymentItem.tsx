import React, { useState } from "react";
import Title from "./Title";
import Input from "../../../../app/components/inputs/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../../../../app/components/button/Button";
function PaymentItem() {
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
    <div className="bg-bgPrimaryLayer flex flex-col items-center w-80 px-5 pb-5">
      <Title>Payment</Title>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex flex-col gap-[10px] py-4">
        <Input
          borderWhite
          col
          id="name"
          label="Họ và Tên"
          register={register}
          errors={errors}
        />
        <Input
          borderWhite
          col
          id="name"
          label="Họ và Tên"
          register={register}
          errors={errors}
        />
        <Input
          borderWhite
          col
          id="Email"
          label="Email"
          register={register}
          errors={errors}
        />
        <Input
          borderWhite
          col
          id="phoneNumber"
          label="Số điện thoại"
          register={register}
          errors={errors}
        />
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-full flex justify-between pt-2">
          <div className="text-white/90 text-[15px] leading-6">
            Sử dụng điểm thành viên (50.000)
          </div>
        </div>
        <div className="w-full text-white/50 font-semibold text-[13px] leading-6">
          *Vui lòng kiểm tra thông tin trước khi thanh toán.
        </div>
        <Button highlight fullWidth>
          Thanh toán
        </Button>
        <div className="text-lightPrimary text-[15px] font-semibold leading-6">
          <span
            className="
                  [text-shadow:1px_1px_2px_var(--tw-shadow-color)]
                  shadow-black/50
          "
          >
            Quay lại
          </span>
        </div>
      </div>
    </div>
  );
}

export default PaymentItem;
