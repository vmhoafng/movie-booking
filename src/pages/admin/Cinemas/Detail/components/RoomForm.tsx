import React from "react";
import DasboardItem from "./DasboardItem";
import Title from "@/app/components/Title";

function RoomForm() {
  return (
    <div>
      <div className="my-5">
        <Title>phòng</Title>
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
