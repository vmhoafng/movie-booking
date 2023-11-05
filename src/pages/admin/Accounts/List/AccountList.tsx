import Dropdown from "@/app/components/Dropdown";
import { MenuItem } from "@/app/components/Dropdown/Dropdown.type";
import SwitchButton from "@/app/components/Button/SwitchButton";
import Table from "@/app/components/table";
import { IUser } from "@/app/types/account";
import {
  EllipsisHorizontalIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

type UserRowProps = {
  row: IUser;
};

const UserRow = ({ row }: UserRowProps) => {
  const [isVerify, setIsVerify] = useState<boolean>(row.verify);

  const items: MenuItem<IUser>[] = [
    {
      label: "Xem",
      to: `${row.email}`,
      icon: EyeIcon,
    },
    {
      label: "Sửa",
      to: `${row.email}/edit`,
      icon: PencilIcon,
    },
    {
      label: "Xóa",
      to: `${row.email}/delete`,
      icon: TrashIcon,
    },
  ];

  return (
    <>
      <div className="py-3">
        <img
          src={`${row.img || "./assets/icons/account-circle.svg"}`}
          alt=""
          className="w-full"
        />
      </div>
      <div className=" truncate py-3">
        <span className="truncate">{row.full_name}</span>
      </div>
      <div className="py-3 truncate">
        <span className="truncate">{row.email}</span>
      </div>
      <div className="py-3">
        <span>{row.gender ? "Nam" : "Nữ"}</span>
      </div>
      <div className="py-3">
        <span className="truncate">{row.phone_number}</span>
      </div>
      <div className="py-3">
        <span>{row.date_of_birth}</span>
      </div>
      <div className="py-3">
        <span>{row.point}</span>
      </div>
      <div className="py-3">
        <SwitchButton
          value={isVerify}
          onChange={() => setIsVerify(!isVerify)}
        />
      </div>
      <div className="py-3 flex items-center justify-center">
        <Dropdown items={items}>
          <EllipsisHorizontalIcon className="h-6 w-6 text-highlight " />
        </Dropdown>
      </div>
    </>
  );
};

function AccountList() {
  // const { data, setData } = useTable();

  return (
    <>
      <Table
        header={[
          "Ảnh",
          "Họ tên",
          "Email",
          "Giới tính",
          "Điện thoại",
          "Ngày sinh",
          "Điểm",
          "Kích hoạt",
          "Tác vụ",
        ]}
        row={(row, index) => {
          return <UserRow row={row} key={`test-${index}`} />;
        }}
      />
    </>
  );
}

export default AccountList;
