import React from 'react';

import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
function Calendar() {
	return (
		<div className="">
			<FullCalendar
				plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
				slotDuration={'00:05'}
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
				height={650}
				editable
				slotMinTime={'07:00:00'}
				slotMaxTime={'27:00:00'}
				// events={showtimes}
				// eventContent={renderEventContent}
				allDaySlot={false}
				droppable
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
	);
}

export default Calendar;
