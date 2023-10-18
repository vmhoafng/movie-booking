import React from 'react';
import Showtimes from './components/Showtimes';
import CinemaDetail from './components/CinemaDetail';

function Cinema() {
	return (
		<div className=" text-white flex flex-col  xl:flex-row xl:gap-10  ">
			<Showtimes />
			<CinemaDetail />
		</div>
	);
}

export default Cinema;
