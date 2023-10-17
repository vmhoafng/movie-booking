import React, { useEffect, useMemo, useState } from 'react';
import ShowtimePaper from '../ShowtimePaper';
import SelectInput, {
	SelectOption,
} from '../../../../../app/components/inputs/SelectInput';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useSearchParams } from 'react-router-dom';

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
			<div className="flex w-full lg:flex-row flex-col">
				<SelectInput
					options={options}
					placeholder="Chọn rạp"
					inputClassName="flex-1"
					value={cinema}
					//@ts-ignore
					endIcon={ChevronDownIcon}
					onChange={handleOnChange}
				/>
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
