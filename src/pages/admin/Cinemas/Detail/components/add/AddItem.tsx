import React, { useCallback, useEffect, useState } from "react";
import CinemaForm from "../CinemaForm";
import RoomForm from "../RoomForm";
import Button from "@/app/components/button/Button";
import { Link } from "react-router-dom";
import DasboardItem from "../DashboardItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useRedux } from "@/app/hooks";

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
    setDashboardList(newRooms);
  };
  const validationSchema = yup.object({
    name: yup.string().required(),
    address: yup.string().required(),
    district: yup.string().required(),
    city: yup.string().required(),
    description: yup.string().required(),
    phoneNumber: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver<FieldValues>(validationSchema),
  });

  const { appSelector, dispatch } = useRedux();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data, dashboardList);
    // setDashboardList([]);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-10"
    >
      <div className="w-full">
        <CinemaForm register={register} control={control} errors={errors} />
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
    </form>
  );
}

export default AddItem;
