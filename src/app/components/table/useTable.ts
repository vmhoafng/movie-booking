import { useEffect, useMemo, useState } from 'react';
import useSearchTopbar from '../inputs/SearchTopbar/useSearchTopbar';
import { Axios } from '@/app/utils/api';

export default function useTable(initialState: any[]) {
	const [data, setData] = useState(initialState);

	const { searchParams, setSearchParams } = useSearchTopbar();
	const [currentPage, setCurrentPage] = useState<number>(1);

	const isOnFirstPage = useMemo(() => currentPage - 1 === 0, [currentPage]);
	const isOnLastPage = useMemo(
		() => currentPage + 1 >= data.length,
		[currentPage, data.length]
	);

	useEffect(() => {
		setSearchParams({
			page: `${currentPage}`,
			...(searchParams.get('q') && { q: searchParams.get('q') || '' }),
		});
	}, [currentPage, searchParams]);

	const handlePrev = () => {
		if (isOnFirstPage) {
			return;
		}
		setCurrentPage((prev) => prev - 1);
	};

	const handleNext = () => {
		if (isOnLastPage) {
			return;
		}

		setCurrentPage((prev) => prev + 1);
	};

	const handleOnClickPage = (page: number) => {
		setCurrentPage(page);
	};

	return {
		handleNext,
		handlePrev,
		handleOnClickPage,
		currentPage,
		isOnFirstPage,
		isOnLastPage,
		data,
	};
}
