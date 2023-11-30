import React, { useMemo } from 'react';
import { ShowtimePaperProps } from './ShowtimePaper.type';
import ScheduleButton from '@/app/components/button/ScheduleButton';
import { useRedux } from '@/app/hooks';

function ShowtimePaper({ movie }: ShowtimePaperProps) {
	const { appSelector } = useRedux();
	const { date } = appSelector((state) => state.cinema);
	const { running_time, name, sub_name, horizontal_poster, showtimes } = movie;
	const hours = Math.floor(running_time / 60);
	const minutes = running_time % 60;

	const showtimeByDate = useMemo(() => {
		const currentDate = new Date(date);
		return (showtimes || []).filter((show) => {
			const startDate = new Date(show.start_date);

			if (startDate.getTime() === currentDate.getTime()) {
				return true;
			}
			return false;
		});
	}, [date, showtimes]);

	if (!showtimeByDate?.length) {
		return <></>;
	}

	return (
		<div className="last:border-b-0 border-b-[1px] flex gap-5 pt-5 pb-5">
			<div className=" w-[9.375rem] md:w-[13.75rem] flex-[0_0_30%] ">
				<img className=" w-full" src={horizontal_poster} alt={name} />
			</div>
			<div className="flex gap-2 flex-col ">
				<p className="uppercase text-sm md:text-[16px]">{name}</p>
				<p className="text-[13px] uppercase text-white text-opacity-60">
					{sub_name}
				</p>
				<div className="flex gap-2 ">
					<div>
						<i className="w-3 h-3">
							<img src="./assets/icons/clock.svg" alt="" />
						</i>
					</div>
					<div>
						<p className="text-[11px] text-lightPrimary md:text-[13px]">
							{hours} hrs {minutes} mins
						</p>
					</div>
				</div>
				<div className="flex  flex-wrap items-start gap-[10px] ">
					{showtimeByDate.map((st) => {
						return (
							<ScheduleButton
								time={st.start_time}
								key={st.id}
								to={`/ticket/${st.id}`}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ShowtimePaper;
