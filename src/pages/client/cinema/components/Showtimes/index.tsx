import { useCallback } from "react";
import ShowtimePaper from "../ShowtimePaper";
import SelectInput from "../../../../../app/components/inputs/SelectInput";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { CalendarIcon } from "@heroicons/react/24/outline";
import { useShowtimes } from "./useShowtimes";
import DatePickSlider from "@/app/components/inputs/DatePickSlider";

function Showtimes() {
  const {
    movies,
    options,
    handleOnChange,
    handleOnPickDate,
    date,
    selected,
    isLoading,
  } = useShowtimes();

  const renderMovies = useCallback(() => {
    if (isLoading) {
      Array(7)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              key={`skeleton-${i}`}
              className="flex gap-5 h-[230px] animate-pulse py-5 bg-gray-500"
            >
              {/* <div className="w-[9.375rem] rounded h-[11.875rem]  bg-gray-600  md:w-[13.75rem] flex-[0_0_30%]"></div>
					<div className="flex flex-1 gap-2 flex-col">
						<div className="h-5 w-1/2 rounded-full bg-gray-600"></div>
						<div className="h-[19.5px]  w-1/2  rounded-full bg-gray-600"></div>
						<div className="h-[19.5px] w-1/2 rounded-full bg-gray-600"></div>
						<div className="h-9 w-[75px] "></div>
					</div> */}
            </div>
          );
        });
    }

    return (
      <>
        {movies
          .slice()
          .sort((a, b) => {
            const ratingA = a.rating / a.sum_of_ratings;
            const ratingB = b.rating / b.sum_of_ratings;
            return ratingA - ratingB;
          })
          .map((movie) => (
            <ShowtimePaper key={movie.id} movie={movie} />
          ))}
      </>
    );
  }, [movies]);

  return (
    <div className="flex-[0_1_70%]">
      <h3 className=" inline-block border-b-2 border-highlight md:text-[18px] ">
        LỊCH CHIẾU
      </h3>
      {/* <Title active>LỊCH CHIẾU</Title> */}
      <div className="flex w-full gap-6 mt-[25px]  flex-col">
        <SelectInput
          options={options}
          placeholder="Chọn rạp"
          inputClassName="flex-1 "
          optionClassName="pl-[15px] py-[7.5px] hover:bg-highlight"
          value={options[selected!]}
          //@ts-ignore
          endIcon={ChevronDownIcon}
          onChange={handleOnChange}
        />
        <DatePickSlider
          value={date}
          handleOnClick={(day) => handleOnPickDate(day)}
        />
        {/* <label
					htmlFor="date-picker"
					className="items-center relative justify-between flex-1 text-[15px] pl-[15px] bg-[#EFEFEF]/20 rounded border"
				>
					<input
						id="date-picker"
						type="date"
						value={date}
						onChange={handleOnPickDate}
						className="border-none w-full bg-transparent relative text-[14px] outline-none"
						name="date-picker"
						placeholder="YYYY-MM-DD"
					/>
					<span className="] absolute top-[1px] right-[15px]">
						<CalendarIcon className="h-5 w-5" />
					</span>
				</label> */}
      </div>

      <div className="flex flex-col mt-[25px] gap-[1px] ">{renderMovies()}</div>
    </div>
  );
}

export default Showtimes;
