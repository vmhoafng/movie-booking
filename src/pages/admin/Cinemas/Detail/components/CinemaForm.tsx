import Input from "@/app/components/inputs/Input";
import SelectInput, { SelectOption } from "@/app/components/inputs/SelectInput";
import Title from "@/app/components/Title";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ICinema } from "@/app/types/cinema";
interface CinemaFormProps {
  control?: any;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  currentCinema?: ICinema;
}
function CinemaForm({
  register,
  control,
  errors,
  currentCinema,
}: CinemaFormProps) {
  const statusOptions: SelectOption[] = [
    { label: "Hoạt động", value: "Hoạt động" },
    { label: "Đóng cửa", value: "Đóng cửa" },
    { label: "Bảo trì", value: "Bảo trì" },
  ];

  return (
    <div>
      <div className="my-6">
        <Title active>Quản lí rạp</Title>
      </div>
      <div className="w-full flex flex-col px-10 py-5 gap-2 border rounded border-borderColor bg-[#021339]">
        <div className="w-full flex items-start justify-between">
          <div className="w-[480px]">
            <Input
              id="name"
              type=""
              label="Rạp"
              col
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-[320px]">
            <Input
              id="phoneNumber"
              type="tel"
              label="Số điện thoại"
              col
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-[300px] flex flex-col items-start gap-1 py-[3px]">
            <label
              className="text-white/90 text-[15px] font-bold leading-6 min-w-[200px]"
              htmlFor="status"
            >
              Trạng thái
            </label>
            <SelectInput
              required
              id="status"
              control={control}
              options={statusOptions}
              placeholder="Chọn trạng thái"
              name="status"
              onChange={() => {}}
              register={register}
              inputClassName="w-full"
              value={statusOptions.find(
                (status) => status.value === currentCinema?.status
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
        <div className="w-full flex items-center justify-between">
          <div className="w-[480px]">
            <Input
              id="address"
              type=""
              label="Địa chỉ"
              col
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-[320px]">
            <Input
              id="district"
              type=""
              label="Quận/Huyện"
              col
              register={register}
              errors={errors}
            />
          </div>
          <div className="w-[300px]">
            <Input
              id="city"
              type=""
              label="Tỉnh/Thành Phó"
              col
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinemaForm;
