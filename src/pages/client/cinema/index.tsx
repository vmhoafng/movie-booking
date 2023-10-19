import React from 'react';
import Showtimes from './components/Showtimes';
import CinemaDetail from './components/CinemaDetail';
import Table from '../../../app/components/table';

function Cinema() {
	return (
		<div className="h-full bg-bgPrimary text-white flex flex-col xl:flex-row xl:gap-10  ">
			{/* <Showtimes />
			<CinemaDetail /> */}
			<Table />
		</div>
	);
}

export default Cinema;
