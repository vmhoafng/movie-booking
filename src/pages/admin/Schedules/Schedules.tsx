import React, { memo, useEffect, useRef } from 'react';
import Calendar from '../components/Calendar';
import  { Draggable } from '@fullcalendar/interaction';
import { IMovie } from '@/app/types/movie';
function Schedules() {

	const DraggleMovie = memo(({ movie }:{movie:IMovie}) => {
		let elRef:any = useRef(null);
	
		useEffect(() => {
			let draggable = new Draggable(elRef.current, {
				eventData: function (event) {
					console.log(event);
					return {
						id: movie.id,
						title: movie.name,
						duration: {
							minute: 110,
						},
						// url: 'https://cdn.galaxycine.vn/media/2023/10/11/dat-rung-sneak-4_1697007647619.jpg',
						extendedProps: {
							sub_title: movie.sub_name,
							src: movie.poster,
						},
						create: true,
					};
				},
			});
			return () => draggable.destroy();
		}, []);
	}
	return (
		<div>
			<Calendar />
		</div>
	);
}

export default Schedules;
