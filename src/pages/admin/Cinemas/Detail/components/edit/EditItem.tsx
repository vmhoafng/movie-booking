import React, { useCallback, useEffect, useMemo, useState } from "react";
import CinemaForm from "../CinemaForm";
import RoomForm from "../RoomForm";
import Button from "@/app/components/button/Button";
import { Link } from "react-router-dom";
import DasboardItem from "../DashboardItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useRedux } from "@/app/hooks";
import { initSeats } from "@/app/types/cinema";
import { getCinemas } from "@/app/redux/cinema";
import Table from "../../../../components/table/Table";
import Pagination from "../../../../components/pagination/Pagination";
interface EditItemProps {
  id: string;
}
const dataKeys = ["id", "name", "address", "district", "city", "phone_number"];
const columns = [
  "ID",
  "Phòng",
  "Số ghế",
  "Đã đặt",
  "Số ghế trống",
  "Trạng thái",
];
function EditItem({ id }: EditItemProps) {
  const { appSelector, dispatch } = useRedux();
  const { cinemas } = appSelector((state) => state.cinema);
  useEffect(() => {
    dispatch(getCinemas());
  }, [dispatch]);
  const [currentCinema] = useMemo(
    () => cinemas.filter((cinema) => cinema.id === id),
    [cinemas, id]
  );
  console.log(currentCinema);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(cinemas.length / itemsPerPage);
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
      status: currentCinema?.description,
      phoneNumber: currentCinema?.phone_number,
    });
  }, [currentCinema, reset]);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    reset();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-10"
      >
        <div className="w-full flex flex-col gap-4">
          <CinemaForm register={register} control={control} errors={errors} />
          <div>
            <Table
              data={cinemas}
              columns={columns}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              dataKeys={dataKeys}
            />
            <Pagination
              pageCount={pageCount}
              onPageChange={handlePageChange}
              currentPage={currentPage}
              itemPerPage={itemsPerPage}
              dataLength={cinemas.length}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Button large highlight onClick={() => {}}>
            Cập nhật
          </Button>
          <Link
            className="text-white/50 text-sm font-semibold font-inter"
            to="/"
          >
            Hủy bỏ
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditItem;
