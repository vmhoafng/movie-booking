import Input from "@/app/components/inputs/Input";
import SelectInput, { SelectOption } from "@/app/components/inputs/SelectInput";
import Title from "@/app/components/Title";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IPutProfile } from "@/app/types/profile";
function CinemaForm() {
  const genderOptions: SelectOption[] = [
    { label: "", value: "" },
    { label: "Hoạt động", value: "Hoạt động" },
    { label: "Đóng", value: "Đóng" },
    { label: "Bảo trì", value: "Bảo trì" },
  ];
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
    console.log(data);
  };

  return (
    <div>
      <div className="my-6">
        <Title active>Quản lí rạp</Title>
      </div>
      <div className="w-full flex flex-col px-10 py-5 gap-2 border rounded border-borderColor bg-[#021339]">
        <div className="w-full flex items-start justify-between">
          <div className="w-[480px]">
            <Input
              id="cinema"
              type=""
              label="Rạp"
              col
              // register={register}
              // errors={errors}
            />
          </div>
          <div className="w-[320px]">
            <Input
              id="phoneNumber"
              type="tel"
              label="Số điện thoại"
              col
              // register={register}
              // errors={errors}
            />
          </div>
          <div className="w-[300px] flex flex-col items-start gap-1 py-[3px]">
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
        <div className="w-full flex items-center justify-between">
          <div className="w-[480px]">
            <Input
              id="address"
              type=""
              label="Địa chỉ"
              col
              // register={register}
              // errors={errors}
            />
          </div>
          <div className="w-[320px]">
            <Input
              id="district"
              type=""
              label="Quận/Huyện"
              col
              // register={register}
              // errors={errors}
            />
          </div>
          <div className="w-[300px]">
            <Input
              id="city"
              type=""
              label="Tỉnh/Thành Phó"
              col
              // register={register}
              // errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinemaForm;
