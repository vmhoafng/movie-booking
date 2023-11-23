import React, {
	memo,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import interactionPlugin, {
	Draggable,
	EventReceiveArg,
} from '@fullcalendar/interaction';
import { IMovie } from '@/app/types/movie';
import { useRedux } from '@/app/hooks';
import { getMovies } from '@/app/redux/movies/movies.slice';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { getAllSchedules } from '@/app/redux/admin/showtime/showtime.admin.slice';

import { Toaster, toast as t } from 'sonner';
import Modal from '@/app/components/Modal';
import CRUDButton from '../components/buttons/CRUDButton';
import CreateShowtimeForm from './components/CreateShowtimeForm';
import DraggableMovie from './components/DraggableMovie/DraggableMovie';

function Schedules() {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const { dispatch, appSelector } = useRedux();
	const { cinemas } = appSelector((state) => state.schedule);
	const [events, setEvents] = useState<any>([]);

	const handleEventsReceived = (eventInfo: any) => {
		const { event } = eventInfo;

		const collapsedEvent = event.toPlainObject({
			collapseExtendedProps: true,
		});
		const date = collapsedEvent.start.split('T');
		const start_date = date[0];
		const start_time = date[1];
	};

	useEffect(() => {
		dispatch(getMovies()).then((data: any) => {
			setMovies(data.payload.data);
		});
		!cinemas.length && dispatch(getAllSchedules());
	}, [dispatch, cinemas]);

	useEffect(() => {
		const data =
			cinemas[0]?.rooms[0]?.showtimes.map((s) => {
				const start = new Date(s.start_date + `T${s.start_time}`);
				const end = new Date(s.start_date + `T${s.start_time}`);
				end.setTime(start.getTime() + s.running_time * 1000 * 60);
				const event: any = {
					// title: s.movie.name,
					allDay: false,
					// sub_title: s.movie.sub_name,
					start: start.toJSON(),
					extendedProps: {
						...s.movie,
					},
					end: end.toJSON(),
				};
				return event;
			}) || [];
		setEvents([...data]);
	}, [cinemas]);

	const renderMovieDraggable = useCallback(() => {
		return (
			<div className=" w-full flex flex-wrap gap-4 mt-4">
				{(movies || []).map((movie) => (
					<DraggableMovie key={movie.id} movie={movie} />
				))}
			</div>
		);
	}, [movies]);

	function renderEventContent(
		eventInfo: EventReceiveArg & { timeText: string }
	) {
		const { event } = eventInfo;
		const movie = event.toPlainObject({
			collapseExtendedProps: true,
		}) as IMovie;
		return (
			<div className="rounded-lg p-2 relative h-full w-full bg-black">
				<img
					className="h-full w-full object-contain"
					src={`${movie.poster}`}
					alt=""
				/>
				<div className="absolute bg-gradient-to-t h-[20%] pt-3 px-2 from-black bottom-0 top-0  left-0 right-0  ">
					<p className="text-white truncate">{eventInfo.timeText} </p>

					<p className="text-white truncate">{eventInfo.event.title}</p>
					<p className="text-white truncate text-white/60">{movie.sub_name}</p>
				</div>
			</div>
		);
	}

	return (
		<>
			<Modal>
				<Modal.Open opens="test">
					<CRUDButton variant="Add">Open</CRUDButton>
				</Modal.Open>
				<Modal.Window name="test">
					<CreateShowtimeForm movie={movies[0]} />
				</Modal.Window>
			</Modal>
			<Toaster position="top-center" expand gap={10} closeButton richColors />
			<div>
				<div className="">
					<FullCalendar
						plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
						slotDuration={'00:15'}
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
						editable={false}
						slotMinTime={'07:00:00'}
						slotMaxTime={'27:00:00'}
						eventContent={renderEventContent}
						allDaySlot={false}
						droppable
						events={events}
						eventReceive={handleEventsReceived}
						displayEventEnd
						eventDurationEditable={false}
						eventOverlap={false}
					/>
				</div>
				{renderMovieDraggable()}
			</div>
		</>
	);
}

export default Schedules;
