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
import Poster from "@/app/components/poster/Poster";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "@/app/redux/slices/movieSlice";
import { getShowtimeByMovie } from "@/app/redux/slices/showtimeSlice";
// import Swiper from "swiper";

const showtime = [
  {
    key: 1,
    cinema: "Cinema An Duong Vuong",
    times: [
      "20:11",
      "21:00",
      "20:11",
      "21:00",
      "20:11",
      "21:00",
      "20:11",
      "21:00",
      "20:11",
      "21:00",
    ],
  },
  {
    key: 2,
    cinema: "Cinema Go Vap",
    times: [
      "20:11",
      "21:00",
      "20:11",
      "21:00",
      "20:11",
      "21:00",
      "20:11",
      "21:00",
      "20:11",
      "21:00",
    ],
  },
  {
    key: 3,
    cinema: "Cinema Quan 12",
    times: [
      "20:11",
      "21:00",
      "20:11",
      "21:00",
      "20:11",
      "21:00",
      "20:11",
      "21:00",
      "20:11",
      "21:00",
    ],
  },
];

function MovieDetail({ movie }) {
  const { width } = useWindowDimensions();
  const [trailer, setTrailer] = useState(true);
  const movieDetail = useRef();
  const movieData = useSelector((state) => state.movie);
  const showtimeData = useSelector((state) => state.showtime);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList({ movieStatus: "showing-now", page: 1, size: 4 }));
    dispatch(getShowtimeByMovie({ id: "mv-0001", date: "2023-10-23" }));
  }, [dispatch]);

  console.log(showtimeData);
  return (
    <div className="w-full px-[15px] bg-bgPrimary">
      <div className="w-full ">
        <div className="flex flex-col gap-5 justify-center items-center py-6 border-b border-dashed border-borderColor">
          <img
            src="/assets/images/HorizontalPoster.png"
            alt=""
            className="w-[350px] object-cover drop-shadow-textShadow"
          />
          <div className="flex flex-col w-full justify-start gap-5">
            <div className="flex flex-col w-full gap-[6px]">
              <div className="w-full uppercase text-left">
                <h1 className="text-white/90 text-2xl font-bold mb-1">
                  a haunting in venice
                </h1>
                <h3 className="text-lg text-white/60 font-medium">
                  án mạng ở venice
                </h3>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-start items-center gap-2 text-white/60">
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
                    className="object-contain pb-[1px]"
                  />
                  <span className="text-lightPrimary text-base">120 phút</span>
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
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      // onSwiper={(swiper: SwiperType) => console.log(swiper)}
                      // onSlideChange={() => console.log("slide change")}
                      maxWidth={movieDetail.current.offsetWidth}
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
              <div className="flex flex-col justify-center items-start py-6 lg:py-8 border-b border-dashed border-borderColor">
                <Title active>Lịch chiếu</Title>
                {showtimeData.cinemas?.map((cinema) => {
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
              <div className="flex flex-col xl:hidden gap-3 justify-center items-start py-6 lg:py-8 border-b border-dashed border-borderColor overflow-hidden">
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
                  {movieData?.movies.map((movie) => {
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
            <div className="flex flex-col w-full gap-4 text-base font-bold">
              <div className="flex w-full gap-4">
                <span className="text-white/60">Quốc gia:</span>
                <span className="text-white/90 line-clamp-1 ">Mỹ</span>
              </div>
              <div className="flex w-full gap-4">
                <span className="text-white/60">Nhà sản xuất:</span>
                <span className="text-white/90 line-clamp-1">
                  20th Century Studios
                </span>
              </div>
              <div className="flex w-full gap-4">
                <span className="text-white/60">Diễn viên:</span>
                <span className="text-white/90 line-clamp-1  flex-1">
                  Kenneth Branagh, Kelly Reilly, Dương Tử Quỳnh
                </span>
              </div>
              <div className="flex w-full gap-4">
                <span className="text-white/60">Đạo diễn:</span>
                <span className="text-white/90 line-clamp-1">
                  Kenneth Branagh
                </span>
              </div>
              <div className="flex w-full gap-4">
                <span className="text-white/60">Ngày khởi chiếu:</span>
                <span className="text-white/90 line-clamp-1">15/9/2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-start py-6 border-b border-dashed border-borderColor">
          <Title active>Nội dung</Title>
          <p className="text-white/60">
            Án Mạng Ở Venice lấy bối cảnh hậu Thế Chiến II tại thành phố Venice
            vào đêm Halloween. Thám tử lừng danh Hercule Poirot bất đắc dĩ phải
            tham dự một buổi cầu hồn với sự xuất hiện của bà đồng “Dương Tử
            Quỳnh” tại một dinh thự hoang tàn và u ám. Khi một trong những vị
            khách bị giết chết, vị thám tử này bị ép buộc rơi vào một thế giới
            đầy bóng tối và ngập tràn những bí mật.
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-start py-6 border-b border-dashed border-borderColor">
          <div className="flex gap-6">
            <Title active>Trailer</Title>
            <Title>Hình ảnh</Title>
          </div>
          <iframe
            title="trailer"
            // width="full"
            height="315"
            className="w-full"
            src="https://www.youtube.com/embed/yEddsSwweyE"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center items-start py-6 border-b border-dashed border-borderColor">
          <Title active>Lịch chiếu</Title>
          {showtime.map((item) => {
            return (
              <ShowTimeBoard
                times={item.times}
                cinema={item.cinema}
                key={item.key}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-5 justify-center items-start py-6 border-b border-dashed border-borderColor overflow-hidden">
          <Title active>Phim sắp chiếu</Title>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // onSwiper={(swiper: SwiperType) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="lg:hidden"
            breakpoints={{
              390: {
                width: width,
                slidesPerView: 1.8,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <Poster
                name={"gaygaygaygaygaygaygaygaygaygaygaygay"}
                subname="gay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Poster
                name={"gaygaygaygaygaygaygaygaygaygaygaygay"}
                subname="gay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Poster
                name={"gaygaygaygaygaygaygaygaygaygaygaygay"}
                subname="gay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Poster
                name={"gaygaygaygaygaygaygaygaygaygaygaygay"}
                subname="gay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Poster
                name={"gaygaygaygaygaygaygaygaygaygaygaygay"}
                subname="gay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Poster
                name={"gaygaygaygaygaygaygaygaygaygaygaygay"}
                subname="gay"
              />
            </SwiperSlide>
          </Swiper>

          {/* <div className="w-fit grid grid-cols-2 md:grid-cols-3 gap-5">
                     <Poster
                        name={"gaygaygaygaygaygaygaygaygaygaygaygay"}
                        subname="gay"
                     />
                     <Poster name={"gay"} subname="gay" />
                     <Poster name={"gay"} subname="gay" />
                     <Poster name={"gay"} subname="gay" />
                     <Poster name={"gay"} subname="gay" />
                     <Poster name={"gay"} subname="gay" />
                  </div> */}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
