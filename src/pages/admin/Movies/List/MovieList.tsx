import React, { useCallback, useEffect, useMemo, useState } from "react";
import useSearchTopbar from "../../../../app/components/inputs/SearchTopbar/useSearchTopbar";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import { useRedux } from "@/app/hooks";
import { getMovies } from "@/app/redux/movies/movies.slice";
import Title from "@/app/components/Title";
import ControlBar from "../../components/controlBar/ControlBar";
import SelectInput, { SelectOption } from "@/app/components/inputs/SelectInput";
import CRUDButton from "../../components/buttons/CRUDButton";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { getMovieList } from "@/app/redux/slices/movieSlice";
import Status from "../../components/Status";
import clsx from "clsx";
const dataKeys = [
  "id",
  "name",
  "sub_name",
  "end_date",
  "running_time",
  "rating",
  "status",
];
const columns = [
  "ID",
  "Tên phim",
  "Tên tiếng Việt",
  "Ngưng chiếu",
  "Thời lượng",
  "Đánh giá",
  "Trạng thái",
];
function MovieList() {
  const { appSelector, dispatch } = useRedux();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  const { movies } = appSelector((state) => state.movies);
  const dataMovies = useMemo(
    () =>
      movies.map((movie) => ({
        id: movie.id,
        name: movie.name,
        sub_name: movie.sub_name,
        end_date: movie.end_date,
        running_time: `${movie.running_time} phút`,
        rating: `${movie.rating}/10 (${movie.rated})`,
        status: movie.status.description,
      })),
    [movies]
  );
  console.log(dataMovies);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(dataMovies.length / itemsPerPage);
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage + 1);
  };
  const statusOptions: SelectOption[] = [
    { label: "Showing now", value: "Showing now" },
    { label: "Showing now", value: "Showing now" },
    { label: "Showing now", value: "Showing now" },
  ];
  const renderCell = useCallback((row: any, dataKeys: any) => {
    if (dataKeys === "status")
      return (
        <Status
          status={
            clsx(
              row["status"] === "Showing now" && "active",
              row["status"] === "Coming soon" && "warning",
              row["status"] === "Disable" && "disable"
            ) as "active" | "warning" | "disabled"
          }
        >
          {row["status"]}
        </Status>
      );
    return <span className="">{row[dataKeys]}</span>;
  }, []);
  return (
    <div className="">
      <div className="my-6">
        <ControlBar title="Quản lí phim">
          <div className="flex gap-5">
            <SelectInput
              id="status"
              // control={control}
              options={statusOptions}
              placeholder="Trạng thái"
              name="status"
              onChange={() => {}}
              // register={register}
              inputClassName="w-full"
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
                w-[180px]
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
            <CRUDButton
              to="/admin/movies/create"
              onClick={() => {}}
              variant="Add"
            >
              Thêm mới
            </CRUDButton>
          </div>
        </ControlBar>
      </div>
      <Table
        data={dataMovies}
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
        dataLength={dataMovies.length}
      />
    </div>
  );
}

export default MovieList;
