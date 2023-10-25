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

function Showtimes() {
	const { appSelector, dispatch } = useRedux();

	const [options, setOption] = useState<SelectOption[]>([]);
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

	const { cinemas } = appSelector((state) => state.cinema);

	const handleOnChange = (e: SelectOption) => {
		setSearchParams({ cinema: e.label });
	};

	const handleOnClick = async () => {
		const { data } = await Axios.axiosGet('landing/cinemas', {
			params: {
				size: 10,
				page: 1,
			},
		});

		console.log(data);

		setOption([...data.data]);
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
					onChange={handleOnChange}
					onClick={handleOnClick}
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
