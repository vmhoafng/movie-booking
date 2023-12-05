import Input from '@/app/components/inputs/Input';
import SelectInput, { SelectOption } from '@/app/components/inputs/SelectInput';
import Title from '@/app/components/Title';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ICinema } from '@/app/types/cinema';
import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
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
        { label: 'Hoạt động', value: 'Hoạt động' },
        { label: 'Đóng cửa', value: 'Đóng cửa' },
        { label: 'Đang bảo trì', value: 'Đang bảo trì' },
    ];

    const [citys, setCitys] = useState<SelectOption[]>([
        {
            label: '',
            value: '',
        },
    ]);
    const [districts, setDistricts] = useState<SelectOption[]>([
        {
            label: '',
            value: '',
        },
    ]);
    const [provinces, setProvinces] = useState<any[]>([]);
    const [currentCity, setCurrentCity] = useState(currentCinema?.city);
    const provincesValid = useMemo(
        () =>
            provinces.filter((city) => city.name === currentCinema?.city)
                .length > 0,
        [currentCinema?.city, provinces],
    );
    useEffect(() => {
        axios
            .get('https://provinces.open-api.vn/api/', {
                params: { depth: 2 },
            })
            .then((data) => {
                const cityOptions = data.data.map((city: any) => ({
                    label: city.name,
                    value: city.name,
                }));
                setProvinces(data.data);
                setCitys(cityOptions);
                const districts: [] =
                    currentCinema?.city && provincesValid
                        ? data.data
                              .filter(
                                  (opt: any): any =>
                                      opt.name === currentCinema?.city,
                              )[0]
                              .districts.map((district: any) => ({
                                  value: district.name,
                                  label: district.name,
                              }))
                        : [
                              {
                                  label: '',
                                  value: '',
                              },
                          ];
                setDistricts(districts);
                setCurrentCity(currentCinema?.city);
            });
    }, [currentCinema, currentCinema?.city, provincesValid]);
    const cityOptions: SelectOption[] = useMemo(
        () => citys!,
        [citys, currentCinema],
    );
    const districtOptions: SelectOption[] = useMemo(
        () => districts!,
        [districts, currentCinema],
    );
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
                            name="status"
                            onChange={() => {}}
                            register={register}
                            inputClassName="w-full"
                            value={statusOptions.find(
                                (status) =>
                                    status.value === currentCinema?.status,
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
                        <label
                            className="text-white/90 text-[15px] font-bold leading-6 min-w-[200px]"
                            htmlFor="city"
                        >
                            Thành phố
                        </label>
                        <SelectInput
                            required
                            id="city"
                            control={control}
                            options={cityOptions}
                            name="city"
                            onChange={(e) => {
                                setCurrentCity(e.label);
                                const district: any[] = provinces
                                    .filter(
                                        (opt: any): any => opt.name === e.value,
                                    )[0]
                                    .districts.map((district: any) => ({
                                        value: district.name,
                                        label: district.name,
                                    }));
                                setDistricts(district);
                            }}
                            register={register}
                            inputClassName="w-full"
                            value={useMemo(
                                () =>
                                    currentCinema?.city && provincesValid
                                        ? cityOptions.find(
                                              (city) =>
                                                  city.value ===
                                                  currentCinema.city,
                                          )
                                        : {
                                              label: '',
                                              value: '',
                                          },
                                [currentCinema, provincesValid],
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
                    <div className="w-[300px]">
                        <label
                            className="text-white/90 text-[15px] font-bold leading-6 min-w-[200px]"
                            htmlFor="district"
                        >
                            Quận/Huyện
                        </label>
                        <SelectInput
                            required
                            id="district"
                            control={control}
                            options={districtOptions}
                            name="district"
                            onChange={() => {}}
                            register={register}
                            inputClassName="w-full"
                            value={useMemo(
                                () =>
                                    currentCinema?.city &&
                                    currentCinema?.city === currentCity
                                        ? districtOptions.find(
                                              (district) =>
                                                  district.value ===
                                                  currentCinema?.district,
                                          )
                                        : {
                                              label: '',
                                              value: '',
                                          },
                                [
                                    districts,
                                    currentCinema?.city,
                                    currentCinema,
                                    currentCity,
                                ],
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
            </div>
        </div>
    );
}

export default CinemaForm;
