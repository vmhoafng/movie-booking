import React from 'react';
import { CreateShowtimeFormProps } from './CreateShowtimeForm.type';
import CRUDButton from '@/pages/admin/components/buttons/CRUDButton';
import { useRedux } from '@/app/hooks';
import { createShowtime } from '@/app/redux/admin/showtime/showtime.admin.slice';

function CreateShowtimeForm({
	eventInfo,
	onCloseModal,
}: CreateShowtimeFormProps) {
	console.log(eventInfo);
	const { event } = eventInfo;
	const movie = event.toPlainObject({
		collapseExtendedProps: true,
	});

	const { dispatch, appSelector } = useRedux();
	const { selectedRoom, cinemas, selectedCinema } = appSelector(
		(s) => s.schedule
	);
	const handleConfirmModal = () => {
		const date = movie.start.split('T');
		const start_date = date[0];
		const start_time = date[1].split('+')[0];

		dispatch(
			createShowtime({
				format_id: 1,
				movie_id: movie.id,
				room_id: cinemas[selectedCinema]?.rooms![selectedRoom].id,
				start_date,
				start_time,
			})
		).then(() => {
			onCloseModal!();
		});
	};

	console.log(movie);

	return (
		<form>
			<div className="relative  flex flex-col">
				<div className="w-full ">
					<img
						src={movie?.horizontal_poster}
						className=" w-full object-cover h-[340px]"
						alt=""
					/>
				</div>
				<div className="bg-white h-fit">
					<div className=" h-[220px] gap-5 flex  ml-2 mt-[-15%]   items-end ">
						<img
							src={movie?.poster}
							className=" border w-[180px]   rounded-lg"
							alt=""
						/>
						<div className="bg-white p-6 ">
							<h1 className="text-4xl">{movie?.name}</h1>
						</div>
					</div>
					<div className=" flex gap-5">
						<CRUDButton
							variant="Add"
							onClick={() => {
								handleConfirmModal();
							}}
						>
							Thêm
						</CRUDButton>
						<CRUDButton
							variant="Cancel"
							onClick={() => {
								onCloseModal!();
								eventInfo.revert();
							}}
						>
							Hủy
						</CRUDButton>
					</div>
				</div>
			</div>
		</form>
	);
}

export default CreateShowtimeForm;
