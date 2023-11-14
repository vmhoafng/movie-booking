import Dropdown from "@/app/components/Dropdown";
import { MenuItem } from "@/app/components/Dropdown/Dropdown.type";
import SwitchButton from "@/app/components/button/SwitchButton";
import Table from "../../components/table/Table";
import { IUser } from "@/app/types/account";
import { useCallback, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
const data = {
  total: 2,
  data: [
    {
      id: "cd6d016d-9381-3cfb-a5fb-1f833b3ef160",
      email: "vmhoafng@gmail.com",
      point: 0,
      avatar:
        "https://cdn.discordapp.com/attachments/1168144426141499412/1169264779769155594/c6e56503cfdd87da299f72dc416023d4.jpg?ex=6554c5af&is=654250af&hm=440ebc745e441103a1824a80edb22f2d1c371743e8d7a4d413dbbc62eae31554&",
      gender: "Nam",
      verify: true,
      role: "CUSTOMER",
      full_name: "vmhoafng",
      date_of_birth: "2023-11-09",
      phone_number: "0929829783",
    },
    {
      id: "49c64e33-d273-38ef-a68c-23e1aa16e499",
      email: "nngocsang38@gmail.com",
      point: 80,
      avatar:
        "https://cdn.discordapp.com/attachments/1159668660340789259/1172708705003905065/dev.jpg?ex=65614d17&is=654ed817&hm=f6fa7c63b23cbef9e9fe22b0d531f2f5d8bc0cf37d400f36a3f097595aec654f&",
      gender: "Nam",
      verify: true,
      role: "ADMIN",
      full_name: "Nguyễn Ngọc Sang",
      date_of_birth: "2023-11-10",
      phone_number: "0916921133",
    },
  ],
};
function AccountList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Number of items to display per page
  const pageCount = Math.ceil(data.data.length / itemsPerPage);
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage + 1);
  };

  const dataKeys = [
    "avatar",
    "full_name",
    "email",
    "gender",
    "phone_number",
    "date_of_birth",
    "point",
    "verify",
  ];
  const columns = [
    "Ảnh",
    "Họ tên",
    "Email",
    "Giới tính",
    "Điện thoại",
    "Ngày sinh",
    "Điểm",
    "Kích hoạt",
  ];
  const renderCell = useCallback((row: any, dataKeys: any) => {
    if (dataKeys === "avatar")
      return (
        <img
          src={row["avatar"]}
          alt={row["avatar"]}
          className="h-7 w-7 rounded-full"
        />
      );
    if (dataKeys === "verify")
      return (
        <SwitchButton value={row["verify"]} onChange={() => {}}></SwitchButton>
      );
    if (dataKeys === "point")
      return <span className="text-highlight">{row["point"]}</span>;
    return <span className="">{row[dataKeys]}</span>;
  }, []);
  return (
    <>
      <Table
        data={data.data}
        columns={columns}
        renderCell={renderCell}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        dataKeys={dataKeys}
      />
      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        itemPerPage={itemsPerPage}
        dataLength={data.data.length}
      />
    </>
  );
}

export default AccountList;
