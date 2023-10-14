import React from 'react';
import Showtimes from './components/Showtimes';
import CinemaDetail from './components/CinemaDetail';

function Cinema() {
	return (
		<div className="p-[15px] bg-bgPrimary text-white flex flex-col border lg:flex-row lg:gap-20  ">
			<Showtimes />
			<CinemaDetail />
		</div>
	);
}

export default Cinema;
