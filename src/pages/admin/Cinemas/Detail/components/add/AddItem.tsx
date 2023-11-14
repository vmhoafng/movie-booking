import React, { useCallback, useState } from "react";
import CinemaForm from "../CinemaForm";
import RoomForm from "../RoomForm";
import Button from "@/app/components/button/Button";
import { Link } from "react-router-dom";
import DasboardItem from "../DashboardItem";

function AddItem() {
  const [dashboardList, setDashboardList] = useState<
    Array<Record<string, any>>
  >([]);
  const handleAddRoom = () => {
    setDashboardList([...dashboardList, { number: 150 }]);
  };
  const handleRemoveRoom = (index: number) => {
    const newRoom = [...dashboardList];
    newRoom.splice(index, 1);
    setDashboardList(newRoom);
  };
  const renderDashboard = useCallback(
    () =>
      dashboardList.map((db, index) => (
        <DasboardItem
          onClick={() => {
            handleRemoveRoom(index);
          }}
          key={index}
          name={(index + 1).toString()}
        />
      )),
    [dashboardList, handleRemoveRoom]
  );
  const handleAddCinema = () => {
    const newRooms = dashboardList.map((room, index) => ({
      ...room,
      name: `RAP ${index + 1}`,
    }));
    console.log(newRooms);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="w-full">
        <CinemaForm />
        <RoomForm
          handleAddRoom={handleAddRoom}
          renderDashboard={renderDashboard}
        />
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <Button
          large
          highlight
          onClick={() => {
            handleAddCinema();
          }}
        >
          Thêm rạp
        </Button>
        <Link className="text-white/50 text-sm font-semibold font-inter" to="/">
          Hủy bỏ
        </Link>
      </div>
    </div>
  );
}

export default AddItem;
