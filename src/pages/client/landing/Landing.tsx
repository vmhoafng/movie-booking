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
import useWindowDimensions from '../../../app/hooks/useWindowDimensions.js';
import { useRedux } from '@/app/hooks';
import { getMovies } from '@/app/redux/movies/movies.slice';

function Landing() {
	const { appSelector, dispatch } = useRedux();
	const { movies, showingNow, comingSoon } = appSelector(
		(state) => state.movies
	);

	useEffect(() => {
		if (!movies.length) dispatch(getMovies());
	}, [dispatch, movies]);

	return (
		<div className="bg-bgPrimary md:w-full md:h-full flex flex-col md:flex-col items-center self-stretch overflow-hidden">
			<div className="bg-bgPrimary md:w-full   flex items-center flex-col self-stretch sm:px-[15px] ">
				<div className=" flex w-full flex-col items-center md:gap-[40px] py-[50px] border-b-2 border-[#314C81]">
					<div className=" flex w-full md:h-[33px] justify-between font-bold items-end self-stretch ">
						<p className="text-white lg:text-xl xl:text-[22px]  underline md:underline-offset-8 decoration-highlight ">
							PHIM ĐANG CHIẾU{' '}
						</p>
						<a
							href="/"
							className="hidden lg:inline text-highlight text-[15px] lg:text-base"
						>
							{' '}
							Xem tất cả
						</a>
					</div>
					<div className="w-full hidden lg:block">
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
									<SwiperSlide>
										<Poster
											name={movie.name}
											subname={movie.sub_name}
											src={movie.poster}
											alt={movie.name}
											to={movie.id}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
					<div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-5">
						{showingNow.map((movie) => (
							<Poster
								name={movie.name}
								subname={movie.sub_name}
								src={movie.poster}
								alt={movie.name}
								to={movie.id}
							/>
						))}
					</div>
				</div>

				<div className=" flex w-full flex-col items-center md:gap-[40px] py-[50px] border-b-2 border-[#314C81]">
					<div className=" flex w-full md:h-[33px] justify-between font-bold items-end self-stretch ">
						<p className="text-white lg:text-xl xl:text-[22px]  underline md:underline-offset-8 decoration-highlight ">
							PHIM SẮP CHIẾU
						</p>
						<a
							href="/"
							className=" hidden lg:inline text-highlight text-[15px] lg:text-base"
						>
							{' '}
							Xem tất cả
						</a>
					</div>
					<div className="w-full hidden lg:block">
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
							{comingSoon.map((movie) => {
								return (
									<SwiperSlide>
										<Poster
											name={movie.name}
											subname={movie.sub_name}
											src={movie.poster}
											alt={movie.name}
											to={movie.id}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
					<div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-5">
						{comingSoon.map((movie) => (
							<Poster
								name={movie.name}
								subname={movie.sub_name}
								src={movie.poster}
								alt={movie.name}
								to={movie.id}
							/>
						))}
					</div>
					<div className="text-center lg:hidden mt-[30px] ">
						<p className="text-highlight text-[15px] font-bold">Xem tất cả</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col lg:items-center self-stretch 2xl:py-[50px] xl:py-[50px] lg:py-[50px] md:py-[40px] sm:py-[30px] md:w-full  sm:items-start  ">
				<div className=" ">
					<p className="text-white text-[22px] underline md:underline-offset-8 decoration-highlight ">
						LIÊN HỆ
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center  ">
				<div className=" flex flex-col items-center sm:w-full">
					<div className=" 	 2xl:items-start xl:items-start lg:items-center lg:justify-center 2xl:justify-normal md:gap-[50px] lg:gap-[40px] lg:grid sm:grid-cols-1 lg:grid-cols-1 2xl:flex xl:flex">
						<div className=" 2xl:w-[650px] xl:w-[600px] md:h-[615px] sm:h-[525px] flex-col flex items-center gap-[15px] shrink-0 sm:w-full ">
							<div className="">
								<p className="text-white text-base md:text-lg pb-[10px]">
									Họ và tên
								</p>
								<div className="justify-start 2xl:w-[650px] xl:w-[600px] lg:w-[680px] md:w-[640px] sm:w-[395px] h-[45px] md:h-[40px] sm:h-[35px]">
									<input
										type="text"
										placeholder="Nhập họ và tên"
										className="block h-full min-w-[200px] w-full rounded border px-4 shadow-sm bg-white/10 outline-0 text-white border-lightPrimary placeholder:text-white/40"
									/>
								</div>
							</div>

							<div className="">
								<p className="text-white text-base md:text-lg pb-[10px]">
									Email
								</p>
								<div className="justify-start 2xl:w-[650px] xl:w-[600px] lg:w-[680px] md:w-[640px] sm:w-[395px] h-[45px] md:h-[40px] sm:h-[35px]">
									<input
										type="text"
										placeholder="Nhập email"
										className="md:h-[45px] block h-full min-w-[200px] w-full rounded border px-4 shadow-sm bg-white/10 outline-0 text-white border-lightPrimary placeholder:text-white/40"
									/>
								</div>
							</div>

							<div className="">
								<p className="text-white  text-lg pb-[10px]">Số điện thoại</p>
								<div className="justify-start 2xl:w-[650px] xl:w-[600px] lg:w-[680px] md:w-[640px] sm:w-[395px] h-[45px] md:h-[40px] sm:h-[35px]">
									<input
										type="text"
										placeholder="Nhập số điện thoại"
										className=" block h-full min-w-[200px] w-full rounded border px-4 shadow-sm bg-white/10 outline-0 text-white border-lightPrimary placeholder:text-white/40"
									/>
								</div>
							</div>

							<div className=" 2xl:w-[650px] xl:w-[600px] lg:w-[680px] md:w-[640px] sm:w-[395px] md:h-[255px] sm:h-[190px]">
								<p className="text-white text-base md:text-lg pb-[10px]">
									Nội dung
								</p>
								<div className="justify-start 2xl:w-[650px] xl:w-[600px] lg:w-[680px] md:w-[640px] sm:w-[395px] md:h-[200px] sm:h-[150px]">
									<textarea
										placeholder=""
										className="word-breakresize-none bl ock h-full min-w-[200px] w-full rounded border px-4 shadow-sm bg-white/10 outline-0 text-white border-lightPrimary placeholder:text-white/40"
									/>
								</div>
							</div>
							<div className="md:h-[50px] w-[200px] sm:w-[160px] sm:h-[40px] ">
								<Button fullWidth medium>
									Gửi
								</Button>
							</div>
						</div>
						<div className=" w-full  flex flex-col items-start md:gap-[50px]">
							<div className="hidden md:w-[178px] md:h-[81px] flex-col items-end md:gap-[20px] xl:flex">
								<p className=" md:text-lg text-[#31AFD7]">
									{' '}
									Theo dõi chúng tôi
								</p>

								<div className=" md:h-[41px] md:gap-[15px] flex  ">
									<div className="border rounded-full border-[#314C81]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="42"
											height="41"
											viewBox="0 0 42 41"
											fill="none"
											className="hover:bg-highlight rounded-full"
										>
											<path
												d="M25.73 13H23.4855C22.4933 13 21.5418 13.3941 20.8402 14.0957C20.1387 14.7972 19.7445 15.7488 19.7445 16.7409V18.9855H17.5V21.9782H19.7445V27.9636H22.7373V21.9782H24.9818L25.73 18.9855H22.7373V16.7409C22.7373 16.5425 22.8161 16.3522 22.9564 16.2119C23.0967 16.0716 23.287 15.9927 23.4855 15.9927H25.73V13Z"
												fill="white"
											/>
										</svg>
									</div>
									<div className="border rounded-full border-[#314C81]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="41"
											height="41"
											viewBox="0 0 41 41"
											fill="none"
											className="hover:bg-highlight rounded-full"
										>
											<path
												d="M28.5 13.5073C27.8036 13.9986 27.0324 14.3743 26.2164 14.62C25.7784 14.1164 25.1962 13.7595 24.5488 13.5974C23.9013 13.4354 23.2196 13.4762 22.5961 13.7142C21.9725 13.9522 21.437 14.376 21.0622 14.9282C20.6873 15.4804 20.4911 16.1345 20.5 16.8019V17.5291C19.2219 17.5623 17.9555 17.2788 16.8135 16.704C15.6714 16.1292 14.6893 15.2809 13.9545 14.2346C13.9545 14.2346 11.0455 20.78 17.5909 23.6891C16.0931 24.7058 14.3088 25.2156 12.5 25.1437C19.0455 28.78 27.0455 25.1437 27.0455 16.78C27.0448 16.5775 27.0253 16.3754 26.9873 16.1764C27.7295 15.4444 28.2533 14.5202 28.5 13.5073Z"
												fill="white"
											/>
										</svg>
									</div>

									<div className="border rounded-full border-[#314C81] p-[10px] hover:bg-highlight ">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="21"
											height="21"
											viewBox="0 0 21 21"
											fill="none"
											className=""
										>
											<path
												d="M14.6665 2.16675H6.33317C4.03198 2.16675 2.1665 4.03223 2.1665 6.33341V14.6667C2.1665 16.9679 4.03198 18.8334 6.33317 18.8334H14.6665C16.9677 18.8334 18.8332 16.9679 18.8332 14.6667V6.33341C18.8332 4.03223 16.9677 2.16675 14.6665 2.16675Z"
												stroke="white"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M13.8333 9.97501C13.9361 10.6685 13.8176 11.3769 13.4947 11.9992C13.1718 12.6215 12.6609 13.1262 12.0346 13.4414C11.4083 13.7566 10.6986 13.8663 10.0064 13.755C9.31419 13.6436 8.67472 13.3167 8.17895 12.821C7.68318 12.3252 7.35636 11.6857 7.24497 10.9935C7.13359 10.3013 7.24331 9.59159 7.55852 8.96532C7.87374 8.33905 8.37841 7.82812 9.00074 7.50521C9.62307 7.18229 10.3314 7.06383 11.0249 7.16667C11.7324 7.27158 12.3873 7.60123 12.893 8.10693C13.3987 8.61263 13.7283 9.26757 13.8333 9.97501Z"
												stroke="white"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M15.0835 5.91675H15.0935"
												stroke="white"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
								</div>
							</div>

							<div className="w-full  pt-11  flex flex-col 2xl:items-start 2xl:w-[504px] xl:items-start lg:items-center md:gap-[20px]">
								<p className="lg:text-lg font-extrabold text-[#31AFD7] hidden xl:block">
									Thông tin liên hệ
								</p>
								<div className="flex pb-10 w-full lg:justify-between md:flex-wrap xl:gap-5 items-center  justify-center lg:flex text-[13px] font-extrabold ">
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
														<feOffset dx="0.5" dy="0.5" />
														<feGaussianBlur stdDeviation="0.5" />
														<feComposite in2="hardAlpha" operator="out" />
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
														<stop offset="0.492708" stop-color="#AA52A1" />
														<stop offset="1" stop-color="#002DBB" />
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
										<div className="flex flex-col lg:justify-center mt-[10px]  lg:items-start lg-pt-0 sm:pt-[5px]  md:h-[40px] sm:items-center md:items-start md:justify-center sm:gap-[5px] ">
											<p className="text-white w-full whitespace-nowrap">
												{' '}
												Số điện thoại
											</p>
											<a href="/" className="w-full text-[#31D7A9] ">
												{' '}
												19002171
											</a>
										</div>
									</div>
									<div className="flex-[0_0_2px] h-[85px] md:h-[40px] lg:hidden bg-borderColor"></div>
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
														<feOffset dx="0.5" dy="0.5" />
														<feGaussianBlur stdDeviation="0.5" />
														<feComposite in2="hardAlpha" operator="out" />
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
														<feOffset dx="0.5" dy="0.5" />
														<feGaussianBlur stdDeviation="0.5" />
														<feComposite in2="hardAlpha" operator="out" />
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
														<stop offset="0.515625" stop-color="#AA52A1" />
														<stop offset="1" stop-color="#002DBB" />
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
														<stop offset="0.515625" stop-color="#AA52A1" />
														<stop offset="1" stop-color="#002DBB" />
													</linearGradient>
												</defs>
											</svg>
										</div>
										<div className="md:h-[43px] flex flex-col mt-[10px] items-start shrink-0 sm:items-center md:items-start sm:gap-[5px] lg:items-start">
											<p className="text-white w-full">Email</p>
											<a href="/" className=" w-full text-[#31D7A9]">
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
