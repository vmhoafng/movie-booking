import React, { useEffect, useMemo, useState } from 'react';
import ShowtimePaper from '../ShowtimePaper';
import SelectInput, {
	SelectOption,
} from '../../../../../app/components/inputs/SelectInput';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useSearchParams } from 'react-router-dom';
import Title from '../../../../../app/components/Title';
import Input from '../../../../../app/components/inputs/Input';

function Showtimes() {
	const options: SelectOption[] = [
		{ value: 'a', label: 'Rạp CINEMA Gò vấp' },
		{ value: 'b', label: 'b' },
	];

	const [searchParams, setSearchParams] = useSearchParams();
	const [cinema, setCinema] = useState<SelectOption>();
	useEffect(() => {
		const cinemaParam = searchParams.get('cinema') || '';
		setCinema(() =>
			options.find((a) => {
				const regex = new RegExp(`^${cinemaParam}$`);

				return regex.test(a.label);
			})
		);
	}, [searchParams]);

	const handleOnChange = (e: SelectOption) => {
		setSearchParams({ cinema: e.label });
	};

	return (
		<div className="flex-[0_1_70%]">
			<h3 className=" inline-block border-b-2 border-highlight md:text-[18px] ">
				LỊCH CHIẾU
			</h3>
			{/* <Title active>LỊCH CHIẾU</Title> */}
			<div className="flex w-full mt-[25px] lg:flex-row flex-col">
				<SelectInput
					options={options}
					placeholder="Chọn rạp"
					inputClassName="flex-[0_0_50%]"
					value={cinema}
					//@ts-ignore
					endIcon={ChevronDownIcon}
					// onChange={handleOnChange}
				/>
				{/* <Input type="date" label="" /> */}
			</div>
			<div className="flex flex-col gap-[1px] ">
				<ShowtimePaper />
				<ShowtimePaper />
				<ShowtimePaper />
				<ShowtimePaper />
			</div>
		</div>
	);
}

export default Showtimes;
