import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import Calendar from '../components/Calendar';
import { Draggable } from '@fullcalendar/interaction';
import { IMovie } from '@/app/types/movie';
import { useRedux } from '@/app/hooks';
import { getByStatus } from '@/app/redux/movies/movies.slice';

function Schedules() {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const { dispatch } = useRedux();

	const DraggleMovie = memo(({ movie }: { movie: IMovie }) => {
		let elRef: any = useRef(null);

		useEffect(() => {
			let draggable = new Draggable(elRef.current, {
				eventData: function (event) {
					return {
						id: movie.id,
						title: movie.name,
						duration: {
							minute: movie.running_time,
						},
						extendedProps: {
							sub_title: movie.sub_name,
							src: movie.poster,
						},
						create: true,
					};
				},
			});
			return () => draggable.destroy();
		}, [movie]);

		return (
			<div
				ref={elRef}
				id={movie.id}
				className="fc-event relative h-[290px] flex-[0_0_190px]  fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event bg-black"
			>
				<img
					className="h-full object-cover"
					src={`${movie.poster}`}
					alt={movie.name}
				/>
				<div className="absolute bg-gradient-to-t h-[20%] pt-3 px-2 from-black to-black/50  bottom-0  left-0 right-0  ">
					<p className="text-white truncate">{movie.name}</p>
					<p className="text-white truncate text-white/60">{movie.sub_name}</p>
				</div>
			</div>
		);
	});

	useEffect(() => {
		dispatch(getByStatus({ status: 'showing-now' })).then((data) => {
			setMovies(data.payload.data[0].movies);
		});
	}, [dispatch]);

	const renderMovieDraggable = useCallback(() => {
		return (
			<div className="flex gap-4 mt-4">
				{(movies || []).map((movie) => (
					<DraggleMovie movie={movie} />
				))}
			</div>
		);
	}, [movies, DraggleMovie]);

	return (
		<div>
			<Calendar />
			{renderMovieDraggable()}
		</div>
	);
}

export default Schedules;
