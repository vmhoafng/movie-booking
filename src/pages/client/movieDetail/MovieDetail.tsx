import React, { useEffect, useRef, useState } from "react";
import Title from "../../../app/components/Title";
import ShowTimeBoard from "./components/ShowTimeBoard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import useWindowDimensions from "../../../app/hooks/useWindowDimensions";
import Button from "../../../app/components/button/Button";

import LoadingAnimation from "../../../app/components/loading/LoadingAnimation";
import Poster from "@/app/components/poster/Poster";
import { useParams, useSearchParams } from "react-router-dom";
import { useRedux } from "@/app/hooks";
import {
   getByStatus,
   getMovieDetail,
   getMovies,
   getShowtimeByMovie,
} from "@/app/redux/movies/movies.slice";
import { ICinema } from "@/app/types/cinema";
import { Listbox, Transition } from "@headlessui/react";
import Icon from "@/app/components/icon/Icon";
import { SelectOption } from "@/app/components/inputs/SelectInput";
// import Swiper from "swiper";
function MovieDetail() {
   const { width } = useWindowDimensions();
   const [trailer, setTrailer] = useState(true);
   const { appSelector, dispatch } = useRedux();
   const { movies, showingNow, isLoading, isError, errorMessage, detail } =
      appSelector((state) => state.movies);

   const { movieId } = useParams();

   useEffect(() => {
      if (!movies.length) dispatch(getMovies());
      dispatch(getMovieDetail({ slug: movieId! }));
   }, [dispatch, movieId, movies]);

   useEffect(() => {
      detail.id &&
         dispatch(
            getShowtimeByMovie({
               id: detail.id,
               date: "2023-11-15",
            })
         );
   }, [detail.id]);

   const [selected, setSelected] = useState<SelectOption>({
      label: "Tất cả",
      value: "",
   });

   return (
      <>
         {isLoading && <LoadingAnimation />}
         {!isError ? (
            <div className="w-full px-[15px] md:px-0 md:mx-auto bg-bgPrimary">
               <div className="w-full xl:flex xl:gap-14 2xl:gap-24">
                  <div className="xl:w-[calc(100%-300px-80px)] lg:text-sm lg:py-2">
                     <div className="flex flex-col md:flex-row gap-5 justify-center items-center py-6 lg:py-8 border-b border-dashed border-borderColor">
                        <img
                           src={detail.horizontal_poster}
                           alt={detail.name}
                           className="w-[350px] object-cover drop-shadow-textShadow md:hidden"
                        />
                        <img
                           src={detail.poster}
                           alt={detail.name}
                           className="w-[200px] object-cover hidden drop-shadow-textShadow md:block xl:h-full"
                        />
                        <div className="flex flex-col w-full justify-start gap-5 md:gap-12 xl:gap-10 h-full">
                           <div className="flex flex-col w-full gap-[6px] lg:gap-2">
                              <div className="w-full uppercase text-left">
                                 <h1 className="text-white/90 text-2xl font-bold mb-1 md:m-0 line-clamp-1">
                                    {detail.name}
                                 </h1>
                                 <h3 className="text-lg text-white/60 font-medium line-clamp-1">
                                    {detail.sub_name}
                                 </h3>
                              </div>
                              <div className="flex flex-col gap-1 md:gap-0">
                                 <div className="flex justify-start items-center gap-2 text-white/60 md:text-sm ">
                                    <h4 className="">Đánh giá:</h4>
                                    <span>{detail.rating}/10</span>
                                    <img
                                       src="/assets/icons/star.svg"
                                       alt=""
                                       className="object-contain h-full pb-1"
                                    />
                                 </div>
                                 <div className="flex justify-start items-center gap-2">
                                    <img
                                       src="/assets/icons/clock.svg"
                                       alt=""
                                       className="object-contain pb-[1px] lg:pb-1"
                                    />
                                    <span className="text-lightPrimary text-base md:text-sm ">
                                       {detail.running_time} phút
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="flex flex-col w-full gap-4 md:gap-3 lg:gap-2 md:text-sm  font-bold flax-1">
                              <div className="flex w-full gap-4">
                                 <span className="text-white/60 line-clamp-1">
                                    Quốc gia:
                                 </span>
                                 <span className="text-white/90 line-clamp-1 ">
                                    {detail.language}
                                 </span>
                              </div>
                              <div className="flex w-full gap-4">
                                 <span className="text-white/60 min-w-fit">
                                    Nhà sản xuất:
                                 </span>
                                 <span className="text-white/90 line-clamp-1">
                                    {detail.producer}
                                 </span>
                              </div>
                              <div className="flex w-full gap-4">
                                 <span className="text-white/60">
                                    Diễn viên:
                                 </span>
                                 <span className="text-white/90 line-clamp-1  flex-1">
                                    {detail.cast}
                                 </span>
                              </div>
                              <div className="flex w-full gap-4">
                                 <span className="text-white/60">
                                    Đạo diễn:
                                 </span>
                                 <span className="text-white/90 line-clamp-1">
                                    {detail.director}
                                 </span>
                              </div>
                              <div className="flex w-full gap-4">
                                 <span className="text-white/60">
                                    Ngày khởi chiếu:
                                 </span>
                                 <span className="text-white/90 line-clamp-1">
                                    {detail.release_date}
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col gap-4 justify-center items-start py-6 lg:py-8 border-b border-dashed border-borderColor">
                        <Title active>Nội dung</Title>
                        <p className="text-white/60 md:text-sm">
                           {detail.description}
                        </p>
                     </div>
                     <div className="w-full overflow-hidden flex flex-col gap-4 justify-center items-start py-6 lg:py-8 border-b border-dashed border-borderColor">
                        <div className="flex gap-6">
                           <Title
                              active={trailer}
                              onClick={() => setTrailer(true)}
                           >
                              Trailer
                           </Title>
                           <Title
                              active={!trailer}
                              onClick={() => {
                                 setTrailer(false);
                              }}
                           >
                              Hình ảnh
                           </Title>
                        </div>
                        <div className="w-full sm:h-[280px] md:h-[358px] lg:h-[444px] xl:h-[400px] 2xl:h-[500px] flex justify-center items-center">
                           {trailer ? (
                              <iframe
                                 title="trailer"
                                 className="w-full h-full"
                                 src={`https://www.youtube.com/embed/${
                                    detail.trailer?.split("=")[1] || ""
                                 }`}
                              ></iframe>
                           ) : (
                              <Swiper
                                 modules={[
                                    Navigation,
                                    Pagination,
                                    Scrollbar,
                                    A11y,
                                 ]}
                                 // onSwiper={(swiper: SwiperType) => console.log(swiper)}
                                 // onSlideChange={() => console.log("slide change")}
                                 breakpoints={{
                                    390: {
                                       slidesPerView: 1,
                                       spaceBetween: 10,
                                    },
                                    680: {
                                       slidesPerView: 1,
                                       spaceBetween: 36,
                                    },
                                    900: {
                                       slidesPerView: 1,
                                       // spaceBetween: 40,
                                    },
                                 }}
                              >
                                 {(detail.images || []).map((img, index) => {
                                    return (
                                       <SwiperSlide
                                          key={`${detail.name}-image-${index}`}
                                       >
                                          <div className="md:w-[450px] lg:w-[450px] xl:h-[300px] mx-auto">
                                             <img
                                                src={img.path}
                                                alt={`${detail.name}-${index}`}
                                                className="w-full object-contain"
                                             />
                                          </div>
                                       </SwiperSlide>
                                    );
                                 })}
                              </Swiper>
                           )}
                        </div>
                     </div>
                     <div className="flex flex-col gap-4 justify-center items-start py-6 lg:py-8 border-b border-dashed border-borderColor">
                        <Title active>Lịch chiếu</Title>
                        <div className="">
                           <Listbox value={selected} onChange={setSelected}>
                              <div className={`relative `}>
                                 <Listbox.Button
                                    className={
                                       "bg-[#EFEFEF]/20 relative w-full rounded border text-left py-[1px]  pl-[15px]"
                                    }
                                 >
                                    <span
                                       className={`block truncate text-[15px] ${
                                          !selected.value && "text-slate-300"
                                       }`}
                                    >
                                       {selected.label}
                                    </span>
                                    <span className="absolute inset-y-0 right-0 pr-[15px] flex items-center">
                                       <Icon
                                          icon="chevronDown"
                                          className="w-5 h-5"
                                       />
                                    </span>
                                 </Listbox.Button>
                                 <Transition
                                    as={React.Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                 >
                                    <Listbox.Options className="absolute mt-1 z-30 bg-bgPrimary border border-borderColor rounded w-full flex flex-col">
                                       {(detail.cinema || []).map((option) => {
                                          return (
                                             <Listbox.Option
                                                key={option.id}
                                                className={`text-[15px] cursor-pointer`}
                                                value={option.id}
                                             >
                                                {option.name}
                                             </Listbox.Option>
                                          );
                                       })}
                                    </Listbox.Options>
                                 </Transition>
                              </div>
                           </Listbox>
                        </div>
                        {(detail.cinema || []).map((cinema) => {
                           return (
                              <ShowTimeBoard
                                 showtimes={cinema.showtime}
                                 cinema={cinema.name}
                                 key={cinema.id}
                              />
                           );
                        })}
                        {/* {showtime.map((item) => {
                           return (
                              <ShowTimeBoard
                                 times={item.times}
                                 cinema={item.cinema}
                                 key={item.key}
                              />
                           );
                        })} */}
                     </div>
                     <div className="flex flex-col xl:hidden gap-4 justify-center items-start py-6 lg:py-8 border-b border-dashed border-borderColor overflow-hidden">
                        <Title active>Phim đang chiếu</Title>
                        <Swiper
                           modules={[Navigation, Pagination, Scrollbar, A11y]}
                           // onSwiper={(swiper: SwiperType) => console.log(swiper)}
                           // onSlideChange={() => console.log("slide change")}

                           breakpoints={{
                              390: {
                                 width: width,
                                 slidesPerView: 2,
                                 spaceBetween: 10,
                              },
                              680: {
                                 slidesPerView: 3,
                                 spaceBetween: 36,
                              },
                              900: {
                                 slidesPerView: 4,
                                 spaceBetween: 10,
                              },
                           }}
                        >
                           {showingNow.map((movie) => {
                              return (
                                 <SwiperSlide style={{ maxWidth: "190px" }}>
                                    <Poster
                                       key={movie.id}
                                       src={movie.poster}
                                       name={movie.name}
                                       subname={movie.sub_name}
                                       to={`/movies/${movie.slug}`}
                                    />
                                 </SwiperSlide>
                              );
                           })}
                        </Swiper>
                     </div>
                  </div>

                  <div className="w-fit hidden xl:flex xl:flex-col gap-5 justify-start items-start py-6 xl:py-8">
                     <Title active>Phim đang chiếu</Title>
                     <div className="flex flex-col w-fit gap-4">
                        {showingNow.map((movie) => {
                           return (
                              <Poster
                                 horizontal
                                 key={movie.id}
                                 src={movie.poster}
                                 name={movie.name}
                                 subname={movie.sub_name}
                                 to={`/movies/${movie.slug}`}
                              />
                           );
                        })}
                     </div>
                     <Button fullWidth medium onClick={() => {}}>
                        Xem thêm
                     </Button>
                  </div>
               </div>
            </div>
         ) : (
            <p>{errorMessage}</p>
         )}
      </>
   );
}

export default MovieDetail;
