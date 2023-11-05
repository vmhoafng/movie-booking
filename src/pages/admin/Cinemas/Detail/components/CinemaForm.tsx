import Input from "@/app/components/inputs/Input";
import Title from "@/app/components/Title";

function CinemaForm() {
  return (
    <div>
      <div className="my-6">
        <Title active>Quản lí rạp</Title>
      </div>
      <div className="w-full flex flex-col px-10 py-5 gap-2 border rounded border-borderColor bg-[#021339]">
        <div className="w-full flex items-center justify-between">
          <div className="w-[780px]">
            <Input
              id="cinema"
              type=""
              label="Rạp"
              col
              // register={register}
              // errors={errors}
            />
          </div>
          <div className="w-[270px]">
            <Input
              id="phoneNumber"
              type="tel"
              label="Số điện thoại"
              col
              // register={register}
              // errors={errors}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-[780px] flex items-center justify-between">
            <div className="w-[420px]">
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
          </div>
          <div className="w-[270px]">
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
