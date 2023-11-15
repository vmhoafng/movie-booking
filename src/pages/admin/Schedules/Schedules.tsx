import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { IMovie } from '@/app/types/movie';
import { useRedux } from '@/app/hooks';
import { getByStatus, getMovies } from '@/app/redux/movies/movies.slice';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventImpl } from '@fullcalendar/core/internal';
import { EventApi, EventInput } from '@fullcalendar/core';

function Schedules() {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const { dispatch } = useRedux();
	const [events, setEvents] = useState<EventApi[]>([]);
	const DraggleMovie = memo(({ movie }: { movie: IMovie }) => {
		let elRef: any = useRef(null);

		useEffect(() => {
			let draggable = new Draggable(elRef.current, {
				eventData: function (event: IMovie) {
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
				<div className=" flex gap-2 items-center absolute top-2  rounded-full py-1  bg-white left-2  px-2">
					<span className="relative flex h-3 w-3">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
					</span>
					<span className="text-sky-500">{movie.status.description}</span>
				</div>
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

	const handleEventsReceived = (eventInfo: EventApi[]) => {
		setEvents(eventInfo);
	};

	useEffect(() => {
		dispatch(getMovies()).then((data: any) => {
			setMovies(data.payload.data);
		});
	}, [dispatch]);

	const renderMovieDraggable = useCallback(() => {
		return (
			<div className=" w-full flex flex-wrap gap-4 mt-4">
				{/* <Swiper
					className=""
					modules={[Navigation, Pagination, A11y]}
					breakpoints={{
						900: {
							width: 790,
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1024: {
							width: 960,
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1366: {
							width: 1200,
							slidesPerView: 3.8,
							spaceBetween: 30,
						},
					}}
				>
					{(movies || []).map((movie) => (
						<SwiperSlide className="flex">
							<DraggleMovie key={movie.id} movie={movie} />
						</SwiperSlide>
					))}
				</Swiper> */}
				{(movies || []).map((movie) => (
					<DraggleMovie key={movie.id} movie={movie} />
				))}
				{/* <Swiper
					slidesPerView={3}
					spaceBetween={3}
					wrapperClass="flex"
					modules={[Navigation, Pagination, A11y]}
					width={1200}
				>
					{(movies || []).map((movie) => (
						<SwiperSlide className="">
							<DraggleMovie key={movie.id} movie={movie} />
						</SwiperSlide>
					))}
				</Swiper> */}
			</div>
		);
	}, [movies, DraggleMovie]);

	function renderEventContent(eventInfo: any) {
		return (
			<div className="rounded-lg p-2 relative h-full w-full bg-black">
				<img
					className="h-full w-full object-contain"
					src={`${eventInfo.event.extendedProps.src}`}
					alt=""
				/>
				<div className="absolute p-2 left-0 right-0 bottom-0">
					<p className="text-white text-lg">{eventInfo.event.title}</p>
					<p className="text-white text-lg">{eventInfo.event.sub_title}</p>
					<select>
						<option value="A">Phòng A</option>
						<option value="B">Phòng B</option>
						<option value="C">Phòng C</option>
					</select>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="">
				<FullCalendar
					plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
					// slotDuration={'00:05'}
					// dayCellClassNames={'border-none'}
					locale={'vi'}
					viewClassNames={''}
					dayHeaderClassNames={' border rounded bg-lightPrimary'}
					firstDay={1}
					titleFormat={{
						weekday: 'long',
						day: '2-digit',
					}}
					dayHeaderFormat={{
						weekday: 'long',
					}}
					height={500}
					editable
					slotMinTime={'07:00:00'}
					slotMaxTime={'27:00:00'}
					// initialEvents={events}
					eventContent={renderEventContent}
					allDaySlot={false}
					droppable
					// eventReceive={handleEventsReceived}
					// eventsSet={handleEventsReceived}
					displayEventEnd
					eventDurationEditable={false}
					// validRange={(nowDate) => {
					// 	const endday = new Date(nowDate);
					// 	endday.setDate(nowDate.getDate() + 2 * 7);
					// 	return {
					// 		start: nowDate,
					// 		end: endday,
					// 	};
					// }}
				/>
			</div>
			{renderMovieDraggable()}
			<button onClick={() => console.log(events)}>Test</button>
		</div>
	);
}

export default Schedules;
