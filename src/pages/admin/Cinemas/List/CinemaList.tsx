import React, { useEffect, useMemo, useState } from "react";
import useSearchTopbar from "../../../../app/components/inputs/SearchTopbar/useSearchTopbar";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { useRedux } from "@/app/hooks";
import { getAdminCinemas, getCinemas } from "@/app/redux/cinema";
import Title from "@/app/components/Title";
import ControlBar from "../../components/controlBar/ControlBar";
import SelectInput, { SelectOption } from "@/app/components/inputs/SelectInput";
import CRUDButton from "../../components/buttons/CRUDButton";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
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
  const [showByCity, setShowByCity] = useState("");
  const [citys, setCitys] = useState<SelectOption[]>([
    {
      label: "",
      value: "",
    },
  ]);
  useEffect(() => {
    dispatch(getAdminCinemas());
  }, [dispatch]);
  const { cinemas } = appSelector((state) => state.cinema);
  const dataCinemas = useMemo(
    () =>
      cinemas
        .filter((cinema) => (showByCity ? cinema.city === showByCity : cinema))
        .map((cinema) => ({
          id: cinema.id,
          name: cinema.name,
          address: cinema.address,
          district: cinema.district,
          city: cinema.city,
          phone_number: cinema.phone_number,
        })),
    [cinemas, showByCity]
  );
  useEffect(() => {
    axios
      .get("https://provinces.open-api.vn/api/", {
        params: { depth: 2 },
      })
      .then((data) => {
        const cityOptions = data.data.map((city: any) => ({
          label: city.name,
          value: city.name,
        }));
        setCitys(cityOptions);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(dataCinemas.length / itemsPerPage);
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage + 1);
  };
  const cityOptions: SelectOption[] = useMemo(
    () => [{ label: "Tất cả", value: "" }, ...citys],
    [citys]
  );

  return (
    <div className="">
      <div className="my-6">
        <ControlBar title="Quản lí rạp" subTitle="Hệ thống rạp">
          <div className="flex justify-between gap-5">
            <SelectInput
              id="city"
              options={cityOptions}
              placeholder="Tỉnh thành"
              name="city"
              onChange={(e) => {
                setShowByCity(e.value as string);
              }}
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
        data={dataCinemas}
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
        dataLength={dataCinemas.length}
      />
    </div>
  );
}

export default CinemaList;
