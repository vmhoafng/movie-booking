import React, { useEffect, useState } from "react";
import useSearchTopbar from "../../../../app/components/inputs/SearchTopbar/useSearchTopbar";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { useRedux } from "@/app/hooks";
import { getCinemas } from "@/app/redux/cinema";
import Title from "@/app/components/Title";
import ControlBar from "../../components/controlBar/ControlBar";
import SelectInput, { SelectOption } from "@/app/components/inputs/SelectInput";
import CRUDButton from "../../components/buttons/CRUDButton";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const dataKeys = ["id", "name", "address", "district", "city", "phone_number"];
const columns = [
  "ID",
  "Tên",
  "Địa chỉ",
  "Quận/huyện",
  "Tỉnh/Thành phố",
  "Điện thoại",
];
function CinemaList() {
  const { appSelector, dispatch } = useRedux();
  useEffect(() => {
    dispatch(getCinemas());
  }, [dispatch]);
  const { cinemas } = appSelector((state) => state.cinema);
  console.log(cinemas );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(cinemas.length / itemsPerPage);
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage + 1);
  };
  const genderOptions: SelectOption[] = [
    { label: "Hồ Chí Minh", value: "Hồ Chí Minh" },
    { label: "Đóng", value: "Đóng" },
    { label: "Bảo trì", value: "Bảo trì" },
  ];
  return (
    <div className="">
      <div className="my-6">
        <ControlBar title="Quản lí rạp" subTitle="Hệ thống rạp">
          <div className="flex gap-5">
            <SelectInput
              id="gender"
              // control={control}
              options={genderOptions}
              placeholder="Tỉnh thành"
              name="gender"
              onChange={() => {}}
              // register={register}
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
                w-[180px]
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
            <CRUDButton to="/admin/cinema/add" onClick={() => {}} variant="Add">
              Thêm mới
            </CRUDButton>
          </div>
        </ControlBar>
      </div>
      <Table
        data={cinemas}
        columns={columns}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        dataKeys={dataKeys}
      />
      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        itemPerPage={itemsPerPage}
        dataLength={cinemas.length}
      />
    </div>
  );
}

export default CinemaList;
