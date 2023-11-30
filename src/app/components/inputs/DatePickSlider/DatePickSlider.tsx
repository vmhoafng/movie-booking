import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
	Navigation,
	Autoplay,
	Pagination,
	Scrollbar,
	A11y,
} from 'swiper/modules';
import { addDays } from '@/app/utils';
import { DatePickSliderProps } from './DatePickSlider.type';
import clsx from 'clsx';
function DatePickSlider({ handleOnClick, value }: DatePickSliderProps) {
	const [active, setActive] = useState<number | undefined>(undefined);
	const datesRef = useRef(Array(7).fill(''));
	const formatDay = Intl.DateTimeFormat('vi-VN', {
		weekday: 'long',
	}).format;
	const formatDate = Intl.DateTimeFormat('vi-VN', {
		day: 'numeric',
		month: 'numeric',
	}).format;
	return (
		<div className="w-full">
			<Swiper
				modules={[Navigation]}
				slidesPerView={'auto'}
				spaceBetween={30}
				preventClicks={true}
				preventClicksPropagation={true}
			>
				{datesRef.current.map((date, i) => {
					const day = addDays(Date.now(), i);
					const formattedDate = day.toISOString().split('T')[0];
					if (formattedDate === value) {
						active !== i && setActive(i);
					}
					return (
						<SwiperSlide
							key={day.toISOString()}
							className="text-center w-[fit-content_!important]"
						>
							<button
								className={clsx(
									'p-2 border flex flex-col min-w-[90px] gap-1 items-center text-[14px] font-bold rounded',
									active === i
										? 'bg-highlight/20 border-highlight text-highlight'
										: 'bg-[#EFEFEF]/20'
								)}
								onClick={(e) => {
									setActive(i);

									handleOnClick(formattedDate);
								}}
							>
								<p>{i === 0 ? 'Hôm nay' : formatDay(day)}</p>
								<p>{formatDate(day)}</p>
							</button>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default DatePickSlider;
