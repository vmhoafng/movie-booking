import { SelectOption } from '@/app/components/inputs/SelectInput';
import { useRedux } from '@/app/hooks';
import { selectCinemaAndDate, selectDate } from '@/app/redux/cinema';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useShowtimes = () => {
	const { appSelector, dispatch } = useRedux();
	const { cinemas, selected, movies, isLoading, date } = appSelector(
		(state) => state.cinema
	);

	const [options, setOption] = useState<SelectOption[]>([]);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const optionized = cinemas.map((c) => {
			return { label: c.name, value: c.id };
		});
		setOption([...optionized]);
	}, [isLoading, cinemas]);

	useEffect(() => {
		const cinemaParams = searchParams.get('cinema');
		const dateParams = searchParams.get('date');
		if (cinemaParams) {
			dispatch(selectCinemaAndDate(cinemaParams));
		}

		if (dateParams) {
			dispatch(selectDate(dateParams));
		}
	}, [dispatch, searchParams, options]);

	const handleOnChange = (e: SelectOption) => {
		setSearchParams((prev: URLSearchParams) => ({
			date: prev.get('date') || date,
			cinema: e.label,
		}));
	};

	const handleOnPickDate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchParams((prev: URLSearchParams) => ({
			date: e.target.value,
			cinema: prev.get('cinema') || '',
		}));
	};

	return {
		date,
		options,
		selected,
		movies,
		handleOnChange,
		handleOnPickDate,
		isLoading,
	};
};
