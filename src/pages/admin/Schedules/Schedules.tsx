import React, { useCallback, useEffect, useMemo, useState } from 'react';
import interactionPlugin, { EventReceiveArg } from '@fullcalendar/interaction';
import { IMovie } from '@/app/types/movie';
import { useRedux } from '@/app/hooks';
import { getMovies } from '@/app/redux/movies/movies.slice';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import {
	getAllSchedules,
	setSelectedCinema,
	setSelectedRoom,
} from '@/app/redux/admin/showtime/showtime.admin.slice';
import './style.css';
import { Toaster } from 'sonner';
import ConfirmModal from './components/ConfirmModal';
import CreateShowtimeForm from './components/CreateShowtimeForm';
import DraggableMovie from './components/DraggableMovie/DraggableMovie';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Modal from '@/app/components/Modal';
import DeleteShowtimeForm from './components/DeleteShowtimeForm/DeleteShowtimeForm';

function Schedules() {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const { dispatch, appSelector } = useRedux();
	const { cinemas, isLoading, selectedRoom, showtimes, selectedCinema } =
		appSelector((state) => state.schedule);
	const [events, setEvents] = useState<any>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [currentEvent, setCurrentEvent] = useState(null);

	const start = useMemo(() => {
		const nowDate = new Date();
		return new Date(nowDate.setDate(nowDate.getDate() - nowDate.getDay() + 14));
	}, []);

	const end = useMemo(() => {
		const nowDate = new Date();
		return new Date(nowDate.setDate(nowDate.getDate() - nowDate.getDay() + 22));
	}, []);

	const handleEventsReceived = (eventInfo: any) => {
		setCurrentEvent(eventInfo);
		setIsOpen(true);
	};

	useEffect(() => {
		dispatch(getMovies()).then((data: any) => {
			setMovies(data.payload.data);
		});
		dispatch(getAllSchedules());
	}, []);

	const buttons = useMemo(() => {
		return (cinemas[selectedCinema]?.rooms || []).reduce((acc, room, index) => {
			//@ts-ignore
			// delete room.showtimes;

			return {
				...acc,
				[`room${index}`]: {
					text: room.name.split('-')[0],
					title: room.name,
					click(ev: any, element: HTMLElement) {
						dispatch(setSelectedRoom(index));
					},
				},
			};
		}, {});
	}, [cinemas, dispatch, selectedCinema]);

	useEffect(() => {
		const elButtons = document.querySelectorAll('.fc-toolbar-chunk>.fc-button');
		elButtons?.forEach((el) => {
			el.classList.remove('active');
		});
		const button = document.querySelector(
			`.fc-toolbar-chunk>.fc-room${selectedRoom}-button`
		);
		button?.classList.add('active');
	}, [buttons, selectedRoom]);

	useEffect(() => {
		const data =
			showtimes.map((s) => {
				const start = new Date(s!.start_date + `T${s!.start_time}`);
				const end = new Date(s!.start_date + `T${s!.start_time}`);
				end.setTime(start.getTime() + s!.running_time * 1000 * 60);
				const event: any = {
					allDay: false,

					id: s!.id,
					start: start.toJSON(),
					extendedProps: {
						...s!.movie,
						room_id: s!.room_id,
					},
					end: end.toJSON(),
				};
				return event;
			}) || [];

		setEvents([...data]);
	}, [isLoading, selectedRoom, showtimes]);

	const renderMovieDraggable = useCallback(() => {
		return (
			<div className=" w-full flex flex-wrap gap-4 mt-4">
				{(movies || []).map((movie) => (
					<DraggableMovie key={movie.id} movie={movie} />
				))}
			</div>
		);
	}, [movies]);

	const renderEventContent = useCallback(
		(eventInfo: EventReceiveArg & { timeText: string }) => {
			const { event } = eventInfo;
			const movie = event.toPlainObject({
				collapseExtendedProps: true,
			}) as IMovie & { start: string; room_id: string };

			const startDay = new Date(movie.start);
			const isValid = startDay <= end && startDay >= start;
			return (
				<div
					key={movie.id + movie.room_id + event.id}
					className={`px-2.5 overflow-hidden h-full w-full`}
				>
					<div className="shadow-2xl h-full relative  ">
						<div className="bg-[#0E1946] px-2 flex ">
							<p className="text-lightPrimary truncate">
								{eventInfo.timeText}{' '}
							</p>
							<div className="ml-auto">
								{isValid && (
									<Modal>
										<Modal.Open opens="confirm">
											<XMarkIcon
												className="h-5 w-5 
													hover:cursor-pointer
												text-borderColor"
											/>
										</Modal.Open>
										<Modal.Window name="confirm">
											<DeleteShowtimeForm movie={movie} eventInfo={eventInfo} />
										</Modal.Window>
									</Modal>
								)}
							</div>
						</div>
						<div className="">
							<img
								className="h-full w-full object-contain "
								src={`${movie.poster}`}
								alt=""
							/>
						</div>
						<div className="absolute bg-gradient-to-t pt-3 px-2 from-black bottom-0  left-0 right-0  ">
							<p className="text-white truncate">{movie.name}</p>
							<p className="text-white truncate text-white/60">
								{movie.sub_name}
							</p>
						</div>
					</div>
				</div>
			);
		},
		[selectedRoom, cinemas, selectedCinema]
	);

	return (
		<>
			<Toaster position="top-center" expand gap={10} closeButton richColors />
			<ConfirmModal isOpen={isOpen} setIsOpen={setIsOpen}>
				<CreateShowtimeForm eventInfo={currentEvent} />
			</ConfirmModal>
			<div>
				<div className="">
					<label
						htmlFor="cinema1"
						className=" ml-auto flex justify-end items-center gap-4"
					>
						<span>Rạp: </span>
						<select
							name="cinema"
							id="cinema1"
							title="cinema"
							className="bg-[#EFEFEF]/20 py-[7.5px] px-[15px] text-center block border appearance-none border-[#fff]/80 rounded "
							onChange={(e) => {
								dispatch(setSelectedCinema(+e.target.value));
							}}
						>
							{cinemas.map((c, index) => {
								return (
									<option
										className="bg-[#31375A]  py-[10px]"
										key={c.name}
										value={index}
									>
										{c.name}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				<div className="mt-5">
					<FullCalendar
						plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
						slotDuration={'00:15'}
						locale={'vi'}
						viewClassNames={''}
						eventClassNames={'border-none bg-transparent'}
						dayHeaderClassNames={
							' border  bg-[#0E1946] text-[12px] font-semibold'
						}
						firstDay={1}
						titleFormat={{
							weekday: 'long',
							day: '2-digit',
						}}
						slotLabelClassNames={'text-[12px] font-semibold'}
						dayHeaderFormat={{
							weekday: 'long',
							month: 'numeric',
							day: 'numeric',
							omitCommas: true,
						}}
						dayHeaderContent={(args) => {
							const { text } = args;
							let regex = /(\d{2}\/\d{2})/;
							const newStr = text.replace(regex, '[$1]');
							return newStr;
						}}
						dayCellClassNames={'border-borderColor '}
						editable={false}
						slotMinTime={'07:00:00'}
						slotMaxTime={'27:00:00'}
						eventContent={renderEventContent}
						allDaySlot={false}
						droppable
						height={600}
						stickyHeaderDates
						events={events}
						eventReceive={handleEventsReceived}
						displayEventEnd
						eventDurationEditable={false}
						eventOverlap={false}
						customButtons={buttons}
						headerToolbar={{
							right: `${Object.keys(buttons || {}).join(' ') || ''} prev,next`,
							left: '',
							center: '',
						}}
						eventConstraint={{
							start,
							end,
						}}
						// slotEventOverlap={false}
					/>
				</div>
				{renderMovieDraggable()}
			</div>
		</>
	);
}

export default Schedules;
