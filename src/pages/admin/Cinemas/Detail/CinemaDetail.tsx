import React, { useEffect, useState } from "react";
import useSearchTopbar from "../../../../app/components/inputs/SearchTopbar/useSearchTopbar";
import CinemaForm from "./components/CinemaForm";
import RoomForm from "./components/RoomForm";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { useRedux } from "@/app/hooks";
import { getCinemas } from "@/app/redux/cinema";
const dataKeys = [
  "id",
  "name",
  "address",
  "district",
  "city",
  "phone_number",
  "Tác vụ",
];
const columns = [
  "ID",
  "Tên",
  "Địa chỉ",
  "Quận/huyện",
  "Tỉnh/Thành phố",
  "Điện thoại",
  "Tác vụ",
];

function CinemaDetail() {
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
    <div>
      {/* <CinemaForm />
      <RoomForm /> */}
      <Table
        data={cinemas}
        columns={columns}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        dataKeys={dataKeys}
      />
      <Pagination
        itemPerPage={itemsPerPage}
        pageCount={pageCount}
        dataLength={cinemas.length}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

export default CinemaDetail;
