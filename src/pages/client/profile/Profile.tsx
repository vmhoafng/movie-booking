import { useState } from "react";
import Input from "../../../app/components/inputs/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../../../app/components/button/Button";

export default function Profile() {
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
      className=""
      style={{ backgroundImage: `url('/assets/images/bg-04.jpg')` }}
    >
      <div
        className="flex
      flex-col
      lg:flex-row
      justify-center
      items-center
      lg:items-start
      py-[50px]
      px-[15px]
      2xl:gap-20
      bg-bgPrimary/80
      min-h-screen"
      >
        <h2
          className="
            w-full
            border-b-[2px]
            border-borderColor
            font-bold
            uppercase
            text-white
            2xl:text-xl
            text-left"
        >
          Thông tin Tài khoản
        </h2>
        <div className="pt-5">
          <div className="flex flex-col gap-[10px] items-center">
            <img
              src="/assets/images/bg-01.jpg"
              alt=""
              className="h-[150px] w-[150px] border-[3px] rounded-full object-cover border-borderColor "
            />
            <div className="flex flex-col items-center">
              <div className="text-[15px] text-white font-bold leading-6">
                Điểm thành viên
              </div>
              <div className="text-sm text-highlight font-bold leading-6">
                10200 điểm
              </div>
            </div>
          </div>
        </div>
        <div className="w-[395px] flex flex-col gap-[25px] py-10">
          <div className="flex flex-col gap-[10px]">
            <Input
              borderWhite
              id="name"
              label="Họ và Tên"
              col
              register={register}
              errors={errors}
            />
            <div className="w-full flex gap-[10px]">
              <Input
                borderWhite
                id="name"
                label="Họ và Tên"
                col
                register={register}
                errors={errors}
              />
              <Input
                borderWhite
                id="name"
                label="Họ và Tên"
                col
                register={register}
                errors={errors}
              />
            </div>
            <Input
              borderWhite
              id="email"
              label="Email"
              col
              register={register}
              errors={errors}
            />
            <Input
              borderWhite
              id="phoneNumber"
              label="Số điện thoại"
              col
              register={register}
              errors={errors}
            />
          </div>
          <Button lg secondary>
            Cập nhật
          </Button>
        </div>
        <div className="w-full border-t border-dashed border-borderColor" />
        <div className="w-[395px] flex flex-col py-[25px] gap-[25px]">
          <div className="flex flex-col gap-[10px]">
            <Input
              borderWhite
              id="password"
              label="Mật khẩu hiện tại"
              col
              register={register}
              errors={errors}
            />
            <Input
              borderWhite
              id="password"
              label="Mật khẩu mới"
              col
              register={register}
              errors={errors}
            />
            <Input
              borderWhite
              id="password"
              label="Xác nhận mật khẩu mới"
              col
              register={register}
              errors={errors}
            />
          </div>
          <Button lg secondary>
            Thay đổi
          </Button>
        </div>
      </div>
    </div>
  );
}
