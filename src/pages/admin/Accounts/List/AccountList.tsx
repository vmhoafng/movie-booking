import Dropdown from "@/app/components/Dropdown";
import { MenuItem } from "@/app/components/Dropdown/Dropdown.type";
import SwitchButton from "@/app/components/button/SwitchButton";
import Table from "../../components/table/Table";
import { IUser } from "@/app/types/account";
import * as yup from "yup";
import { useCallback, useEffect, useMemo, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import { useRedux } from "@/app/hooks";
import { getAllUsers } from "@/app/redux/auth";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
function AccountList() {
  const { appSelector, dispatch } = useRedux();
  const { users } = appSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllUsers({}));
  }, [dispatch]);
  const dataUsers = useMemo(
    () =>
      users.map((user) => ({
        avatar: user.avatar,
        full_name: user.full_name,
        email: user.email,
        gender: user.gender,
        phone_number: user.phone_number,
        date_of_birth: user.date_of_birth,
        point: user.point,
        verify: user.verify,
      })),
    [users]
  );
  const [stateUsers, setStateUsers] = useState(dataUsers);
  console.log(stateUsers);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items to display per page
  const pageCount = Math.ceil(dataUsers.length / itemsPerPage);
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage + 1);
  };
  // const validationSchema = yup.object().shape({
  //   isUsingPoint: yup.boolean(),
  // });
  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm<FieldValues>({
  //   resolver: yupResolver<FieldValues>(validationSchema),
  // });
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
    if (dataKeys === "verify") {
      return (
        // <Controller
        //   control={control}
        //   name={"verify"}
        //   render={({ field }) => <SwitchButton {...field} />}
        // />
        <SwitchButton
          value={row["verify"]}
          onChange={() => {
            console.log(stateUsers);
            setStateUsers([...stateUsers]);
          }}
        />
      );
    }
    if (dataKeys === "point")
      return <span className="text-highlight">{row["point"]}</span>;
    return <span className="">{row[dataKeys]}</span>;
  }, []);
  return (
    <>
      <Table
        data={dataUsers}
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
        dataLength={dataUsers.length}
      />
    </>
  );
}

export default AccountList;
