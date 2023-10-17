import React, { useEffect, useState } from "react";
import Title from "../../../app/components/Title";
import { useParams } from "react-router";
import Poster from "../../../app/components/Poster";

// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useWindowDimensions from "../../../app/hooks/useWindowDimensions";
function Movies() {
   const { params } = useParams();
   return (
      <div className="bg-bgPrimary w-full">
         <div className="mt-24 mx-auto w-[395px] md:w-[640px] lg:w-[790px] xl:w-[960px] 2xl:w-[1200px] overflow-hidden">
            <div className="flex flex-col gap-10 items-start justify-center py-14 bg-bgPrimary">
               <div className="flex gap-10">
                  <Title active={params === "showing"}>Phim đang chiếu</Title>
                  <Title active={params === "coming-soon"}>
                     Phim sắp chiếu
                  </Title>
               </div>
               {/* {width > 900 ? (
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              onSwiper={(swiper: SwiperType) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
        
                900: {
                  width: 790,
                  slidesPerView: 3.8,
                  spaceBetween: 20,
                },
                1024: {
                  width: 960,
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1366: {
                  width: 1200,
                  slidesPerView: 3.8,
                  spaceBetween: 30,
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
          ) : (
            <div className="w-fit grid grid-cols-2 md:grid-cols-3 gap-5">
              <Poster
                name={"gaygaygaygaygaygaygaygaygaygaygaygay"}
                subname="gay"
              />
              <Poster name={"gay"} subname="gay" />
              <Poster name={"gay"} subname="gay" />
              <Poster name={"gay"} subname="gay" />
              <Poster name={"gay"} subname="gay" />
              <Poster name={"gay"} subname="gay" />
            </div>
          )} */}
               <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                  <Poster
                     name={"gaygaygaygaygaygaygaygaygaygaygaygay"}
                     subname="gay"
                  />
                  <Poster name={"gay"} subname="gay" />
                  <Poster name={"gay"} subname="gay" />
                  <Poster name={"gay"} subname="gay" />
                  <Poster name={"gay"} subname="gay" />
                  <Poster name={"gay"} subname="gay" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Movies;
