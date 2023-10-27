import React, { useEffect } from 'react';
import Showtimes from './components/Showtimes';
import CinemaDetail from './components/CinemaDetail';
import { useRedux } from '@/app/hooks';
import { getCinemas } from '@/app/redux/cinema';

function Cinema() {
	const { appSelector, dispatch } = useRedux();
	const { cinemas } = appSelector((state) => state.cinema);
	useEffect(() => {
		if (!cinemas.length) dispatch(getCinemas());
	}, [dispatch]);
	return (
		<div className=" text-white flex flex-col  xl:flex-row xl:gap-10  ">
			<Showtimes />
			<CinemaDetail />
		</div>
	);
}

export default Cinema;
