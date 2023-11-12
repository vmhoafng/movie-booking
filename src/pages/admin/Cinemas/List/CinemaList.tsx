import React, { useEffect, useState } from "react";
import useSearchTopbar from "../../../../app/components/inputs/SearchTopbar/useSearchTopbar";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { useRedux } from "@/app/hooks";
import { getCinemas } from "@/app/redux/cinema";
import Title from "@/app/components/Title";
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
  console.log(cinemas);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(cinemas.length / itemsPerPage);
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage + 1);
  };
  return (
    <div className="">
      <div className="my-6">
        <Title active>Quản lí rạp</Title>
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
      />{" "}
    </div>
  );
}

export default CinemaList;
