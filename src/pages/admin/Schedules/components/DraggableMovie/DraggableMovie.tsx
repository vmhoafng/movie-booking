import { IMovie } from '@/app/types/movie';
import { Draggable } from '@fullcalendar/interaction';
import { memo, useEffect, useRef } from 'react';

const DraggableMovie = memo(({ movie }: { movie: IMovie }) => {
	let elRef: any = useRef(null);

	useEffect(() => {
		let draggable = new Draggable(elRef.current, {
			eventData: function (event: IMovie) {
				return {
					id: movie.id,
					title: movie.name,
					duration: {
						minute: movie.running_time + 15,
					},
					extendedProps: {
						...movie,
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

export default DraggableMovie;
