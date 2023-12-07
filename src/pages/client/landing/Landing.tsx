import React, { useEffect } from 'react';
import Button from '../../../app/components/button/Button';
// import Title from '../../../app/components/	';
import Poster from '../../../app/components/poster/Poster';

import {
    Navigation,
    Autoplay,
    Pagination,
    Scrollbar,
    A11y,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRedux } from '@/app/hooks';
import { getMovies } from '@/app/redux/movies/movies.slice';
import { Link } from 'react-router-dom';
import { PATHS } from '@/app/constants/path';

function Landing() {
    const { appSelector, dispatch } = useRedux();
    const { movies, showingNow, comingSoon } = appSelector(
        (state) => state.movies,
    );

    useEffect(() => {
        if (!movies.length) dispatch(getMovies());
    }, [dispatch, movies]);

    return (
        <div className="bg-bgPrimary md:w-full md:h-full flex flex-col md:flex-col items-center self-stretch overflow-hidden">
            <div className="bg-bgPrimary md:w-full   flex items-center flex-col self-stretch ">
                <div className=" flex w-full flex-col items-center gap-[32px] md:gap-[40px] py-[50px] border-b-2 border-[#314C81]">
                    <div className=" flex w-full md:h-[33px] justify-between font-bold items-end self-stretch ">
                        <p className="text-white lg:text-xl xl:text-[22px]  underline md:underline-offset-8 decoration-highlight ">
                            PHIM ĐANG CHIẾU{' '}
                        </p>
                        <Link
                            to={`${PATHS.MOVIES.IDENTITY}${PATHS.MOVIES.LIST}?q=showing-now`}
                            className="hidden lg:inline text-highlight text-[15px] lg:text-base"
                        >
                            {' '}
                            Xem tất cả
                        </Link>
                    </div>
                    <div className="w-full hidden lg:block">
                        <Swiper
                            modules={[
                                Navigation,
                                Pagination,
                                Scrollbar,
                                A11y,
                                Autoplay,
                            ]}
                            autoplay={{
                                delay: 3300,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                900: {
                                    width: 790,
                                    slidesPerView: 3,
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
                            {showingNow.map((movie) => {
                                return (
                                    <SwiperSlide key={movie.id}>
                                        <Poster
                                            name={movie.name}
                                            subname={movie.sub_name}
                                            src={movie.poster}
                                            alt={movie.name}
                                            to={`/movies/${movie.slug}`}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-5">
                        {showingNow.map((movie) => (
                            <Poster
                                key={movie.id}
                                name={movie.name}
                                subname={movie.sub_name}
                                src={movie.poster}
                                alt={movie.name}
                                to={`/movies/${movie.slug}`}
                            />
                        ))}
                    </div>
                </div>

                <div className=" flex w-full flex-col items-center gap-[32px] md:gap-[40px] py-[50px] border-b-2 border-[#314C81]">
                    <div className=" flex w-full md:h-[33px] justify-between font-bold items-end self-stretch ">
                        <p className="text-white lg:text-xl xl:text-[22px]  underline md:underline-offset-8 decoration-highlight ">
                            PHIM SẮP CHIẾU
                        </p>
                        <Link
                            to={`${PATHS.MOVIES.IDENTITY}${PATHS.MOVIES.LIST}?q=coming-soon`}
                            className=" hidden lg:inline text-highlight text-[15px] lg:text-base"
                        >
                            {' '}
                            Xem tất cả
                        </Link>
                    </div>
                    <div className="w-full hidden lg:block">
                        <Swiper
                            modules={[
                                Navigation,
                                Pagination,
                                Scrollbar,
                                A11y,
                                Autoplay,
                            ]}
                            autoplay={{
                                delay: 3300,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                900: {
                                    width: 790,
                                    slidesPerView: 3,
                                    spaceBetween: 30,
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
                            {comingSoon.map((movie) => {
                                return (
                                    <SwiperSlide key={movie.id}>
                                        <Poster
                                            name={movie.name}
                                            subname={movie.sub_name}
                                            src={movie.poster}
                                            alt={movie.name}
                                            to={`/movies/${movie.slug}`}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-5">
                        {comingSoon.map((movie) => (
                            <Poster
                                key={movie.id}
                                name={movie.name}
                                subname={movie.sub_name}
                                src={movie.poster}
                                alt={movie.name}
                                to={`/movies/${movie.slug}`}
                            />
                        ))}
                    </div>
                    <div className="text-center lg:hidden mt-[30px] ">
                        <Link
                            to={`${PATHS.MOVIES.IDENTITY}`}
                            className="text-highlight text-[15px] font-bold"
                        >
                            Xem tất cả
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:items-center self-stretch md:py-[40px] py-[30px] md:w-full  items-start  ">
                <div className="w-full">
                    <p className="text-white text-[22px] underline md:underline-offset-8 decoration-highlight uppercase">
                        The cinema
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div className="flex flex-col w-full">
                    <div className="2xl:items-start xl:items-start lg:items-center lg:justify-center 2xl:justify-normal md:gap-[50px] lg:gap-[40px] lg:grid grid-cols-1 lg:grid-cols-1 2xl:flex xl:flex">
                        <div className="w-full flex flex-col lg:items-start md:gap-[20px]">
                            <p className="w-full text-white text-sm">
                                Chào mừng đến với{' '}
                                <span className="text-lightPrimary">
                                    The Cinema
                                </span>
                                , nơi kết hợp hòa quyện giữa nghệ thuật điện ảnh
                                và trải nghiệm giải trí tuyệt vời. Được thành
                                lập với sứ mệnh mang đến cho khán giả những
                                khoảnh khắc không thể nào quên,{' '}
                                <span className="text-lightPrimary">
                                    The Cinema
                                </span>{' '}
                                không chỉ là một rạp chiếu phim thông thường, mà
                                còn là điểm đến của sự kỳ diệu và sáng tạo.
                                <br></br>
                                <br></br>Tọa lạc tại trung tâm thành phố,{' '}
                                <span className="text-lightPrimary">
                                    The Cinema
                                </span>{' '}
                                gây ấn tượng ngay từ cái nhìn đầu tiên bằng kiến
                                trúc hiện đại và tinh tế. Với hệ thống âm thanh
                                và hình ảnh tiên tiến, chúng tôi hân hạnh đưa
                                đến khán giả những trải nghiệm điện ảnh chất
                                lượng nhất, đưa họ lạc vào thế giới ảo hóa và
                                hồn lực, nơi mọi chi tiết nhỏ nhất đều được tôn
                                vinh.
                                <br></br>
                                <br></br>
                                <span className="text-lightPrimary">
                                    The Cinema
                                </span>{' '}
                                tự hào về đội ngũ nhân viên chuyên nghiệp và
                                nhiệt huyết, luôn sẵn sàng phục vụ để đảm bảo
                                mọi chuyến phiêu lưu điện ảnh diễn ra suôn sẻ.
                                Ngoài ra, với thực đơn đa dạng, từ đồ uống cho
                                đến đồ ăn nhẹ, khán giả còn có cơ hội thưởng
                                thức những món ăn ngon nhất trong không gian
                                thoải mái và ấm cúng.
                                <br></br>
                                <br></br>Khôngchỉ là nơi chiếu phim,{' '}
                                <span className="text-lightPrimary">
                                    The Cinema
                                </span>{' '}
                                còn là nơi tổ chức các sự kiện đặc sắc như buổi
                                ra mắt phim, buổi thảo luận với đạo diễn và diễn
                                viên, tạo ra cơ hội gặp gỡ và tương tác giữa
                                nghệ sĩ và khán giả. Chúng tôi tin rằng mỗi buổi
                                chiếu phim không chỉ là một hiển thị, mà là một
                                trải nghiệm tận hưởng nghệ thuật và chia sẻ cảm
                                xúc.
                                <br></br>
                                <br></br>Hãy đồng hành cùng chúng tôi tại{' '}
                                <span className="text-lightPrimary">
                                    The Cinema
                                </span>
                                , nơi mà niềm đam mê điện ảnh được thăng hoa và
                                mọi khoảnh khắc trở nên sống động.
                                <br></br>
                            </p>
                            <div className="flex flex-wrap pb-10 w-full md:flex-wrap gap-8 items-center justify-start text-base font-extrabold ">
                                <p className="text-white mr-4">
                                    Mọi đóng góp ý kiến xin liên hệ:
                                </p>
                                <div className="w-full flex flex-wrap xl:gap-12 lg:w-fit lg:justify-center justify-between text-sm">
                                    <div className="text-center pr-[15px] flex-[0_0_160px] xl:p-0 items-center md:gap-[30px] md:text-left flex flex-col md:flex-row ">
                                        <div className="">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="41"
                                                height="36"
                                                viewBox="0 0 41 36"
                                                fill="none"
                                                className="mx-auto md:mx-0"
                                            >
                                                <g clip-path="url(#clip0_281_2583)">
                                                    <g filter="url(#filter0_d_281_2583)">
                                                        <path
                                                            d="M25.5835 8.06182C27.2114 8.33238 28.7075 9.01058 29.8803 10.0096C31.0531 11.0087 31.8493 12.2831 32.1669 13.6698M25.5835 2.38281C28.9657 2.70288 32.1195 3.99306 34.5273 6.04152C36.935 8.08999 38.4536 10.775 38.8335 13.6556M37.1669 24.9853V29.2445C37.1688 29.6399 37.0737 30.0313 36.8877 30.3936C36.7018 30.7559 36.429 31.0811 36.087 31.3484C35.745 31.6157 35.3412 31.8192 34.9015 31.9459C34.4618 32.0726 33.9958 32.1196 33.5335 32.084C28.4049 31.6093 23.4785 30.1165 19.1502 27.7254C15.1233 25.5456 11.7091 22.6372 9.15021 19.2069C6.33351 15.503 4.58062 11.2861 4.03355 6.89762C3.9919 6.50502 4.04667 6.10932 4.19438 5.73573C4.34209 5.36215 4.5795 5.01885 4.89149 4.72771C5.20348 4.43656 5.58322 4.20394 6.00653 4.04466C6.42984 3.88539 6.88745 3.80294 7.35021 3.80256H12.3502C13.1591 3.79578 13.9432 4.03977 14.5565 4.48906C15.1698 4.93835 15.5703 5.56227 15.6835 6.24454C15.8946 7.6076 16.286 8.94594 16.8502 10.234C17.0745 10.7422 17.123 11.2945 16.9901 11.8254C16.8571 12.3564 16.5483 12.8437 16.1002 13.2297L13.9835 15.0328C16.3561 18.5872 19.811 21.5302 23.9835 23.5513L26.1002 21.7482C26.5534 21.3665 27.1255 21.1035 27.7487 20.9902C28.372 20.877 29.0203 20.9183 29.6169 21.1093C31.129 21.59 32.7001 21.9234 34.3002 22.1032C35.1098 22.2005 35.8492 22.5478 36.3778 23.0792C36.9063 23.6106 37.1872 24.289 37.1669 24.9853Z"
                                                            stroke="url(#paint0_linear_281_2583)"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            shapeRendering="crispEdges"
                                                        />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <filter
                                                        id="filter0_d_281_2583"
                                                        x="2.52002"
                                                        y="0.88269"
                                                        width="38.8135"
                                                        height="33.7129"
                                                        filterUnits="userSpaceOnUse"
                                                        color-interpolation-filters="sRGB"
                                                    >
                                                        <feFlood
                                                            flood-opacity="0"
                                                            result="BackgroundImageFix"
                                                        />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset
                                                            dx="0.5"
                                                            dy="0.5"
                                                        />
                                                        <feGaussianBlur stdDeviation="0.5" />
                                                        <feComposite
                                                            in2="hardAlpha"
                                                            operator="out"
                                                        />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_281_2583"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="effect1_dropShadow_281_2583"
                                                            result="shape"
                                                        />
                                                    </filter>
                                                    <linearGradient
                                                        id="paint0_linear_281_2583"
                                                        x1="4.20376"
                                                        y1="2.44457"
                                                        x2="39.7593"
                                                        y2="32.8149"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#FF4343" />
                                                        <stop
                                                            offset="0.492708"
                                                            stop-color="#AA52A1"
                                                        />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#002DBB"
                                                        />
                                                    </linearGradient>
                                                    <clipPath id="clip0_281_2583">
                                                        <rect
                                                            width="40"
                                                            height="34.0741"
                                                            fill="white"
                                                            transform="translate(0.5 0.963013)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col lg:justify-center mt-[10px] lg:items-start lg:pt-0 pt-[5px] md:h-[40px] items-center md:items-start md:justify-center gap-[5px] ">
                                            <p className="text-white w-full whitespace-nowrap">
                                                {' '}
                                                Số điện thoại
                                            </p>
                                            <a
                                                href="/"
                                                className="w-full text-[#31D7A9] "
                                            >
                                                {' '}
                                                19002171
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-center flex-[0_0_160px] pl-[15px] xl:p-0 items-center md:gap-[30px]  md:text-left flex flex-col md:flex-row  ">
                                        <div className="">
                                            <svg
                                                className="mx-auto md:mx-0"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="41"
                                                viewBox="0 0 40 41"
                                                fill="none"
                                            >
                                                <g filter="url(#filter0_d_281_2589)">
                                                    <path
                                                        d="M6.66683 7.16663H33.3335C35.1668 7.16663 36.6668 8.66663 36.6668 10.5V30.5C36.6668 32.3333 35.1668 33.8333 33.3335 33.8333H6.66683C4.8335 33.8333 3.3335 32.3333 3.3335 30.5V10.5C3.3335 8.66663 4.8335 7.16663 6.66683 7.16663Z"
                                                        stroke="url(#paint0_linear_281_2589)"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        shapeRendering="crispEdges"
                                                    />
                                                </g>
                                                <g filter="url(#filter1_d_281_2589)">
                                                    <path
                                                        d="M36.6668 10.5L20.0002 22.1667L3.3335 10.5"
                                                        stroke="url(#paint1_linear_281_2589)"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        shapeRendering="crispEdges"
                                                    />
                                                </g>
                                                <defs>
                                                    <filter
                                                        id="filter0_d_281_2589"
                                                        x="1.8335"
                                                        y="5.66663"
                                                        width="37.3335"
                                                        height="30.6666"
                                                        filterUnits="userSpaceOnUse"
                                                        color-interpolation-filters="sRGB"
                                                    >
                                                        <feFlood
                                                            flood-opacity="0"
                                                            result="BackgroundImageFix"
                                                        />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset
                                                            dx="0.5"
                                                            dy="0.5"
                                                        />
                                                        <feGaussianBlur stdDeviation="0.5" />
                                                        <feComposite
                                                            in2="hardAlpha"
                                                            operator="out"
                                                        />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_281_2589"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="effect1_dropShadow_281_2589"
                                                            result="shape"
                                                        />
                                                    </filter>
                                                    <filter
                                                        id="filter1_d_281_2589"
                                                        x="1.8335"
                                                        y="8.99988"
                                                        width="37.3335"
                                                        height="15.6667"
                                                        filterUnits="userSpaceOnUse"
                                                        color-interpolation-filters="sRGB"
                                                    >
                                                        <feFlood
                                                            flood-opacity="0"
                                                            result="BackgroundImageFix"
                                                        />
                                                        <feColorMatrix
                                                            in="SourceAlpha"
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha"
                                                        />
                                                        <feOffset
                                                            dx="0.5"
                                                            dy="0.5"
                                                        />
                                                        <feGaussianBlur stdDeviation="0.5" />
                                                        <feComposite
                                                            in2="hardAlpha"
                                                            operator="out"
                                                        />
                                                        <feColorMatrix
                                                            type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_281_2589"
                                                        />
                                                        <feBlend
                                                            mode="normal"
                                                            in="SourceGraphic"
                                                            in2="effect1_dropShadow_281_2589"
                                                            result="shape"
                                                        />
                                                    </filter>
                                                    <linearGradient
                                                        id="paint0_linear_281_2589"
                                                        x1="2.96313"
                                                        y1="7.16663"
                                                        x2="36.2965"
                                                        y2="33.8333"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#FF4343" />
                                                        <stop
                                                            offset="0.515625"
                                                            stop-color="#AA52A1"
                                                        />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#002DBB"
                                                        />
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="paint1_linear_281_2589"
                                                        x1="2.96313"
                                                        y1="8.27778"
                                                        x2="36.2965"
                                                        y2="34.5741"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#FF4343" />
                                                        <stop
                                                            offset="0.515625"
                                                            stop-color="#AA52A1"
                                                        />
                                                        <stop
                                                            offset="1"
                                                            stop-color="#002DBB"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="md:h-[43px] flex flex-col mt-[10px] items-start shrink-0 items-center md:items-start gap-[5px] lg:items-start">
                                            <p className="text-white w-full">
                                                Email
                                            </p>
                                            <a
                                                href="/"
                                                className=" w-full text-[#31D7A9]"
                                            >
                                                cinema@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
