import React from 'react';
import Poster from '../../../../../app/components/Poster';
import ShowtimeTime from '../../../../../app/components/ShowtimeTime';

function ShowtimePaper() {
	return (
		<div className="bg-bgPrimary flex gap-5 pt-5 pb-5">
			<div className=" w-[9.375rem] md:w-[13.75rem] flex-[0_0_30%] ">
				<img
					className=" w-full"
					src="https://cdn.discordapp.com/attachments/1159668660340789259/1162023805259100200/bgBo-removebg-preview.png?ex=653a6e00&is=6527f900&hm=7de54060006c1ca49d4e47c1407aea3975458c23b29630cbdd8847f7076cd797&"
					alt=""
				/>
			</div>
			<div className="flex gap-2 flex-col ">
				<p className="uppercase text-sm md:text-[16px]">EXPEND4ABLES</p>
				<p className="text-[13px] uppercase text-white text-opacity-60">
					Biệt đội đánh thuê
				</p>
				<div className="flex gap-2 ">
					<div className="">
						<i className="w-3 h-3">
							<img src="./assets/icons/clock.svg" alt="" />
						</i>
					</div>
					<div className="">
						<p className="text-[11px] md:text-[13px]">1hrs 42mins</p>
					</div>
				</div>
				<div className="flex  flex-wrap items-start gap-[10px] ">
					<ShowtimeTime to="home" time="22:00" />
				</div>
			</div>
		</div>
	);
}

export default ShowtimePaper;
