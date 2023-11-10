import React from 'react';
import ScheduleButton from '../../../../app/components/button/ScheduleButton';
import { IShowtime } from '@/app/types/showtime';

interface ShowTimeBoardProps {
	showtimes: IShowtime[];
	cinema: string;
}

const ShowTimeBoard = ({ showtimes, cinema }: ShowTimeBoardProps) => {
	return (
		<div className="flex flex-col py-5 border-b border-borderColor gap-5 last:border-0">
			<h2 className="font-bold text-lightPrimary text-base uppercase">
				{cinema}
			</h2>
			<div className="flex flex-wrap gap-2">
				{showtimes.map((showtime) => {
					return (
						<ScheduleButton
							time={showtime.start_time}
							key={showtime.id}
							to={`/ticket/${showtime.id}`}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ShowTimeBoard;
