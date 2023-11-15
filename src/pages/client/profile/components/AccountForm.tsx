import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/button/Button";
import SelectInput, { SelectOption } from "@/app/components/inputs/SelectInput";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import useAccountForm from "../hook/useAccountForm";
const genderOptions: SelectOption[] = [
  { label: "", value: "" },
  { label: "Nam", value: "Nam" },
  { label: "Nữ", value: "Nữ" },
  { label: "Khác", value: "Khác" },
];

function AccountItem() {
  const {
    register,
    errors,
    control,
    currentUser,
    handleEditAccount,
    width,
    isLoading,
  } = useAccountForm();
  return (
    <div>
      <form
        onSubmit={handleEditAccount}
        className="w-full lg:w-[344px] xl:w-[470px] 2xl:w-[550px] flex flex-col gap-[25px] py-10 lg:py-5"
      >
        <div className="flex flex-col gap-[10px]">
          <Input
            disabled={isLoading}
            id="fullName"
            label="Họ và Tên"
            col
            register={register}
            errors={errors}
            required
          />
          <div className="w-full flex gap-[10px] lg:flex-col xl:flex-row xl:gap-[30px] 2xl:gap-5">
            <Input
              disabled={isLoading}
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
                disabled={isLoading}
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
            disabled={isLoading}
            id="email"
            type="email"
            label="Email"
            col
            register={register}
            errors={errors}
          />
          <Input
            disabled={isLoading}
            id="phoneNumber"
            type="tel"
            label="Số điện thoại"
            col
            register={register}
            errors={errors}
          />
        </div>
        <div className="hidden xl:block w-full border-t border-dashed border-borderColor" />
        <Button
          disabled={isLoading}
          type="submit"
          large
          secondary
          fullWidth={width > 900}
        >
          Cập nhật
        </Button>
      </form>
    </div>
  );
}

export default AccountItem;
