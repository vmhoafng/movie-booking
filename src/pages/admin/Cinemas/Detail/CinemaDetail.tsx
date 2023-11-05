import React, { useState } from "react";
import useSearchTopbar from "../../../../app/components/inputs/SearchTopbar/useSearchTopbar";
import CinemaForm from "./components/CinemaForm";
import RoomForm from "./components/RoomForm";
import Table from "../../components/table/Table";
import Pagination from "../../components/table/Pagination";
const data = [
  {
    ID: "01",
    Tên: "Cinema An Dương Vương",
    "Địa chỉ": "47 An Dương Vương, phường 12",
    "Quận/huyện": "Quận 5",
    "Tỉnh/Thành phố": "Hồ Chí Minh",
    "Điện thoại": "096203060",
    "Tác vụ": "John",
  },
  {
    ID: "01",
    Tên: "Cinema An Dương Vương",
    "Địa chỉ": "47 An Dương Vương, phường 12",
    "Quận/huyện": "Quận 5",
    "Tỉnh/Thành phố": "Hồ Chí Minh",
    "Điện thoại": "096203060",
    "Tác vụ": "John",
  },
  {
    ID: "01",
    Tên: "Cinema An Dương Vương",
    "Địa chỉ": "47 An Dương Vương, phường 12",
    "Quận/huyện": "Quận 5",
    "Tỉnh/Thành phố": "Hồ Chí Minh",
    "Điện thoại": "096203060",
    "Tác vụ": "John",
  },
  {
    ID: "01",
    Tên: "Cinema An Dương Vương",
    "Địa chỉ": "47 An Dương Vương, phường 12",
    "Quận/huyện": "Quận 5",
    "Tỉnh/Thành phố": "Hồ Chí Minh",
    "Điện thoại": "096203060",
    "Tác vụ": "John",
  },
  {
    ID: "01",
    Tên: "Cinema An Dương Vương",
    "Địa chỉ": "47 An Dương Vương, phường 12",
    "Quận/huyện": "Quận 5",
    "Tỉnh/Thành phố": "Hồ Chí Minh",
    "Điện thoại": "096203060",
    "Tác vụ": "John",
  },
  {
    ID: "01",
    Tên: "Cinema An Dương Vương",
    "Địa chỉ": "47 An Dương Vương, phường 12",
    "Quận/huyện": "Quận 5",
    "Tỉnh/Thành phố": "Hồ Chí Minh",
    "Điện thoại": "096203060",
    "Tác vụ": "John",
  },
  {
    ID: "01",
    Tên: "Cinema An Dương Vương",
    "Địa chỉ": "47 An Dương Vương, phường 12",
    "Quận/huyện": "Quận 5",
    "Tỉnh/Thành phố": "Hồ Chí Minh",
    "Điện thoại": "096203060",
    "Tác vụ": "John",
  },
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage + 1);
  };
  return (
    <div>
      {/* <CinemaForm />
      <RoomForm /> */}
      <Table
        data={data}
        columns={columns}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageChange}
        first={currentPage === 1}
        last={currentPage === itemsPerPage}
      />
    </div>
  );
}

export default CinemaDetail;
