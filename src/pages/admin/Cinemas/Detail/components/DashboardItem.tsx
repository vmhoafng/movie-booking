import Icon from '@/app/components/icon/Icon';
import SelectInput from '@/app/components/inputs/SelectInput';
import Status from '@/pages/admin/components/Status';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface DasboardItemProps {
    onClick?: () => void;
    name: string;
}

function DasboardItem({ name, onClick }: DasboardItemProps) {
    return (
        <div className="w-full h-[150px] flex flex-col justify-between border rounded border-borderColor">
            <div className="flex justify-between h-9 px-4 border-b border-b-borderColor">
                <div
                    className="uppercase my-1 pr-3 py-1
          text-sm font-bold text-white/70 bg-transparent cursor-default"
                >
                    Rạp {name}
                </div>
                <button onClick={onClick}>
                    <Icon icon="close"></Icon>
                </button>
            </div>
            <div className="mx-auto">
                <SelectInput
                    id="seatsFLow"
                    options={[
                        { label: 'Chọn sơ đồ', value: '' },
                        { label: 'Sơ đồ ghế 1', value: 'Sơ đồ ghế 1' },
                        { label: 'Sơ đồ ghế 2', value: 'Sơ đồ ghế 2' },
                        { label: 'Sơ đồ ghế 3', value: 'Sơ đồ ghế 3' },
                    ]}
                    name="seatsFLow"
                    onChange={() => {}}
                    inputClassName="w-[228px]"
                    optionClassName="
                z-30
                hover:bg-white/10
                px-[15px] 
                py-2
                text-xs
                transition-all
                duration-150"
                    buttonClassName="
                text-start
                text-xs
                block
                w-full
                px-4
                rounded
                border
                shadow-sm
                bg-white/10
                outline-0
                border-borderColor
                focus:border-borderColor
                relative
                h-[30px]"
                    //@ts-ignore
                    endIcon={ChevronDownIcon}
                />
            </div>
            <div className="flex justify-between px-4 py-2">
                <div className="text-lightPrimary text-sm font-medium">
                    Số ghế: 150
                </div>
                <div className="w-fit">
                    <Status status="active">Hoạt động</Status>
                </div>
            </div>
        </div>
    );
}

export default DasboardItem;
