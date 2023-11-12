import React from "react";
import Title from "@/app/components/Title";
import DasboardItem from "./DashboardItem";
import CRUDButton from "@/pages/admin/components/buttons/CRUDButton";
// import DasboardItem from "./DasboardItem";

function RoomForm() {
  return (
    <div>
      <div className="flex items-center justify-between w-full my-5">
        <Title>phòng</Title>
        <CRUDButton variant="Add">Thêm phòng</CRUDButton>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <DasboardItem />
        <DasboardItem />
        <DasboardItem />
        <DasboardItem />
        <DasboardItem />
        <DasboardItem />
      </div>
    </div>
  );
}

export default RoomForm;
