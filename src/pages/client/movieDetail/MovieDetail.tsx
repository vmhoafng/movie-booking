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
   getShowtimeByMovie,
} from "@/app/redux/movies/movies.slice";
import { ICinema } from "@/app/types/cinema";
// import Swiper from "swiper";
function MovieDetail() {
   const { width } = useWindowDimensions();
   const [trailer, setTrailer] = useState(true);
   const { appSelector, dispatch } = useRedux();
   const { movies, isLoading, isError, errorMessage, detail } = appSelector(
      (state) => state.movies
   );
   const { movieId } = useParams();

   useEffect(() => {
      dispatch(getByStatus({ status: "showing-now" }));
      dispatch(getMovieDetail({ slug: movieId! }));
   }, [dispatch, movieId]);

   useEffect(() => {
      dispatch(getShowtimeByMovie({ id: detail.id, date: "2023-11-1" }));
   }, [dispatch, detail]);

   console.log("tsx");

   return (
      <>
         {isLoading && <LoadingAnimation />}
         {!isError ? (
            <div className="w-full px-[15px] md:px-0 md:mx-auto bg-bgPrimary">
               <div className="w-full xl:flex xl:gap-14 2xl:gap-24">
                  <div className="xl:w-[calc(100%-300px-80px)] lg:text-sm lg:py-2">
                     <div className="flex flex-col md:flex-row gap-5 justify-center items-center py-6 lg:py-8 border-b border-dashed border-borderColor">
                        <img
                           src="/assets/images/HorizontalPoster.png"
                           alt=""
                           className="w-[350px] object-cover drop-shadow-textShadow md:hidden"
                        />
                        <img
                           src="/assets/images/poster.png"
                           alt=""
                           className="w-[200px] object-cover hidden drop-shadow-textShadow md:block xl:h-full"
                        />
                        <div className="flex flex-col w-full justify-start gap-5 md:gap-12 xl:gap-10 h-full">
                           <div className="flex flex-col w-full gap-[6px] lg:gap-2">
                              <div className="w-full uppercase text-left">
                                 <h1 className="text-white/90 text-2xl font-bold mb-1 md:m-0 line-clamp-1">
                                    a haunting in venice
                                 </h1>
                                 <h3 className="text-lg text-white/60 font-medium line-clamp-1">
                                    án mạng ở venice
                                 </h3>
                              </div>
                              <div className="flex flex-col gap-1 md:gap-0">
                                 <div className="flex justify-start items-center gap-2 text-white/60 md:text-sm ">
                                    <h4 className="">Đánh giá:</h4>
                                    <span>9.5/10</span>
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
                                       120 phút
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
                                    Mỹ
                                 </span>
                              </div>
                              <div className="flex w-full gap-4">
                                 <span className="text-white/60 min-w-fit">
                                    Nhà sản xuất:
                                 </span>
                                 <span className="text-white/90 line-clamp-1">
                                    20th Century Studios
                                 </span>
                              </div>
                              <div className="flex w-full gap-4">
                                 <span className="text-white/60">
                                    Diễn viên:
                                 </span>
                                 <span className="text-white/90 line-clamp-1  flex-1">
                                    Kenneth Branagh, Kelly Reilly, Dương Tử
                                    Quỳnh
                                 </span>
                              </div>
                              <div className="flex w-full gap-4">
                                 <span className="text-white/60">
                                    Đạo diễn:
                                 </span>
                                 <span className="text-white/90 line-clamp-1">
                                    Kenneth Branagh
                                 </span>
                              </div>
                              <div className="flex w-full gap-4">
                                 <span className="text-white/60">
                                    Ngày khởi chiếu:
                                 </span>
                                 <span className="text-white/90 line-clamp-1">
                                    15/9/2023
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col gap-4 justify-center items-start py-6 lg:py-8 border-b border-dashed border-borderColor">
                        <Title active>Nội dung</Title>
                        <p className="text-white/60 md:text-sm">
                           Án Mạng Ở Venice lấy bối cảnh hậu Thế Chiến II tại
                           thành phố Venice vào đêm Halloween. Thám tử lừng danh
                           Hercule Poirot bất đắc dĩ phải tham dự một buổi cầu
                           hồn với sự xuất hiện của bà đồng “Dương Tử Quỳnh” tại
                           một dinh thự hoang tàn và u ám. Khi một trong những
                           vị khách bị giết chết, vị thám tử này bị ép buộc rơi
                           vào một thế giới đầy bóng tối và ngập tràn những bí
                           mật.
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
                                 src="https://www.youtube.com/embed/yEddsSwweyE"
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
                                 <SwiperSlide>
                                    <div className="md:w-[450px] lg:w-[450px] xl:h-[300px] mx-auto">
                                       <img
                                          src="/assets/images/HorizontalPoster.png"
                                          alt=""
                                          className="w-full object-contain"
                                       />
                                    </div>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="md:w-[450px] lg:w-[450px] xl:h-[300px] mx-auto">
                                       <img
                                          src="/assets/images/HorizontalPoster.png"
                                          alt=""
                                          className="w-full object-contain"
                                       />
                                    </div>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="md:w-[450px] lg:w-[450px] xl:h-[300px] mx-auto">
                                       <img
                                          src="/assets/images/HorizontalPoster.png"
                                          alt=""
                                          className="w-full object-contain"
                                       />
                                    </div>
                                 </SwiperSlide>
                              </Swiper>
                           )}
                        </div>
                     </div>
                     <div className="flex flex-col gap-4 justify-center items-start py-6 lg:py-8 border-b border-dashed border-borderColor">
                        <Title active>Lịch chiếu</Title>
                        {detail.cinema?.map((cinema) => {
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
                           {movies.map((movie) => {
                              return (
                                 <SwiperSlide style={{ maxWidth: "190px" }}>
                                    <Poster
                                       key={movie.id}
                                       src={movie.poster}
                                       name={movie.name}
                                       subname={movie.sub_name}
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
                        {movies.map((movie) => {
                           return (
                              <Poster
                                 horizontal
                                 key={movie.id}
                                 src={movie.poster}
                                 name={movie.name}
                                 subname={movie.sub_name}
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
