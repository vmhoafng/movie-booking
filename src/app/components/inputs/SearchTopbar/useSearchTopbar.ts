import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../../hooks';

export default function useSearchTopbar() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchValue, setSearchValue] = useState<string>('');
	const debouncedValue = useDebounce(searchValue);
	const location = useLocation();
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		setSearchValue(() => '');
	}, [location.pathname]);

	useEffect(() => {
		setSearchParams(searchValue && { ...searchParams, q: searchValue });
	}, [debouncedValue]);

	return { handleOnChange, searchParams, setSearchParams, searchValue };
}
