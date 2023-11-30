import React, { useCallback, useEffect, useMemo, useState } from "react";
import CinemaForm from "../CinemaForm";
import Button from "@/app/components/button/Button";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useRedux } from "@/app/hooks";
import { getCinemaById } from "@/app/redux/cinema";
import Table from "../../../../components/table/Table";
import Pagination from "../../../../components/pagination/Pagination";
import Status from "@/pages/admin/components/Status";
import clsx from "clsx";
import {
  ChevronDownIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import SelectInput, { SelectOption } from "@/app/components/inputs/SelectInput";

interface EditItemProps {
  id: string;
}
const dataKeys = ["id", "name", "totalSeats", "status"];
const columns = ["ID", "Phòng", "Số ghế", "Trạng thái"];
function EditItem({ id }: EditItemProps) {
  const { appSelector, dispatch } = useRedux();
  const { currentCinema, rooms } = appSelector((state) => state.cinema);
  const [roomsData, setRoomsData] = useState(rooms);
  useEffect(() => {
    dispatch(getCinemaById(id));
  }, [dispatch, id]);
  useEffect(() => {
    setRoomsData(rooms);
  }, [rooms]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(roomsData.length / itemsPerPage);
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage + 1);
  };
  const validationSchema = yup.object({
    name: yup.string().required(),
    address: yup.string().required(),
    district: yup.string().required(),
    city: yup.string().required(),
    status: yup.string().required(),
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
  useEffect(() => {
    reset({
      name: currentCinema?.name,
      address: currentCinema?.address,
      district: currentCinema?.district,
      city: currentCinema?.city,
      status: currentCinema?.status,
      phoneNumber: currentCinema?.phone_number,
    });
  }, [currentCinema, reset]);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    reset();
  };
  const [editStatus, setEditStatus] = useState();
  const statusOptions: SelectOption[] = [
    { label: "Hoạt động", value: "Hoạt động" },
    { label: "Đóng cửa", value: "Đóng cửa" },
    { label: "Bảo trì", value: "Bảo trì" },
  ];
  const renderCell = useCallback(
    (row: any, dataKeys: any) => {
      if (dataKeys === "status" && editStatus !== row.id)
        return (
          <Status
            status={
              clsx(
                row["status"] === "Hoạt động" && "active",
                row["status"] === "Bảo trì" && "warning",
                row["status"] === "Đóng cửa" && "disable"
              ) as "active" | "warning" | "disabled"
            }
          >
            {row["status"]}
          </Status>
        );
      if (dataKeys === "status" && editStatus === row.id)
        return (
          <SelectInput
            required
            id="status"
            control={control}
            options={statusOptions}
            placeholder="Chọn trạng thái"
            name="status"
            onChange={(e) => {
              console.log(e);
              const newRoom = rooms.map((room) => {
                if (room.id === row.id)
                  return {
                    ...room,
                    status: e.value,
                  };
                return room;
              });
              console.log(newRoom);
            }}
            register={register}
            inputClassName="w-full"
            value={statusOptions.find(
              (status) => status.value === currentCinema?.status
            )}
            optionClassName="
            z-30
            text-white/90
            hover:bg-white/10
            px-[15px] 
            py-2
            transition-all
            duration-150"
            buttonClassName="
            text-start
            block
            w-full
            px-[15px]
            rounded
            border
            shadow-sm
            bg-white/10
            outline-0
            text-white/90
            border-borderColor
            focus:border-borderColor
            relative
            h-[35px]"
            //@ts-ignore
            endIcon={ChevronDownIcon}
          />
        );
      return <span className="">{row[dataKeys]}</span>;
    },
    [control, currentCinema?.status, editStatus, register, statusOptions]
  );
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-10"
      >
        <div className="w-full flex flex-col gap-4">
          <CinemaForm
            register={register}
            control={control}
            errors={errors}
            currentCinema={currentCinema}
          />
          <div>
            <Table
              action={(row) => [
                {
                  label: row.id !== editStatus ? "Sửa" : "Hủy",
                  onClick: () => {
                    if (row.id !== editStatus) {
                      return setEditStatus(row.id);
                    }
                    row["status"] = row.id;

                    return setEditStatus(undefined);
                  },
                  icon: PencilIcon,
                },
              ]}
              data={roomsData}
              columns={columns}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              dataKeys={dataKeys}
              renderCell={renderCell}
            />
            <Pagination
              pageCount={pageCount}
              onPageChange={handlePageChange}
              currentPage={currentPage}
              itemPerPage={itemsPerPage}
              dataLength={roomsData.length}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Button large highlight onClick={() => {}}>
            Cập nhật
          </Button>
          <Link
            className="text-white/50 text-sm font-semibold font-inter"
            to="/admin/cinema"
          >
            Hủy bỏ
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditItem;
