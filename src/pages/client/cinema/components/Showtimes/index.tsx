import React, { useEffect, useMemo, useState } from 'react';
import ShowtimePaper from '../ShowtimePaper';
import SelectInput, {
	SelectOption,
} from '../../../../../app/components/inputs/SelectInput';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useSearchParams } from 'react-router-dom';
import { Axios } from '@/app/utils/api';
import api from '@/app/services/api';
import { useRedux } from '@/app/hooks';
import { getCinemas, selectCinema, showtimeByCinema } from '@/app/redux/cinema';

import Input from '@/app/components/inputs/Input';

function Showtimes() {
	const { appSelector, dispatch } = useRedux();
	const { cinemas, selected, isLoading } = appSelector((state) => state.cinema);

	const [options, setOption] = useState<SelectOption[]>([]);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		dispatch(getCinemas());
	}, [dispatch]);

	useEffect(() => {
		const optionized = cinemas.map((c) => {
			return { label: c.name, value: c.id };
		});
		setOption([...optionized]);
	}, [isLoading, cinemas]);

	useEffect(() => {
		const cinemaParams = searchParams.get('cinema');
		if (cinemaParams) {
			const index = options.findIndex(
				(option) => option.label === cinemaParams
			);
			if (index !== -1) {
				// dispatch(selectCinema(index));
				dispatch(
					showtimeByCinema({
						cinemaId: options[index].value,
						date: '2023-10-23',
					})
				);
			}
		}
	}, [dispatch, searchParams, options, selected]);

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
					value={options[selected!]}
					//@ts-ignore
					endIcon={ChevronDownIcon}
					onChange={handleOnChange}
				/>
				<Input id="calendar" type="date" label="" endIcon="./calendar.svg" />
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
