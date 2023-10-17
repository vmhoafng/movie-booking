import React from 'react';
import { ShowtimeTimeProps } from './ShowtimeTime.type';
import { Link } from 'react-router-dom';

function ShowtimeTime({ time, to }: ShowtimeTimeProps) {
	return (
		<div
			className="
          hover:bg-borderColor
            cursor-pointer
            text-center
            lg:h-[35px]
            xl:h-11
            border
            rounded-[4px]
            text-xs 
            leading-[1.1rem] 
            md:text-[15px] 
            max-lg:leading-[1.0625rem]
            md:px-5
            md:py-3
            py-1
            px-[10px]
        "
		>
			<Link to={to}>{time}</Link>
		</div>
	);
}

export default ShowtimeTime;
