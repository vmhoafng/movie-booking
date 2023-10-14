import React from 'react';
import ShowtimePaper from '../ShowtimePaper';

function Showtimes() {
	return (
		<div className="flex-[0_1_70%]">
			<h3 className=" inline-block border-b-2 border-highlight md:text-[18px] ">
				LỊCH CHIẾU
			</h3>
			<div className="flex md:flex-row flex-col">
				<div className="">input</div>
				<div className="">input</div>
			</div>
			<div className="flex flex-[0_0_41.25rem] flex-col bg-lightPrimary gap-[1px] ">
				<ShowtimePaper />
				<ShowtimePaper />
				<ShowtimePaper />
				<ShowtimePaper />
			</div>
		</div>
	);
}

export default Showtimes;
