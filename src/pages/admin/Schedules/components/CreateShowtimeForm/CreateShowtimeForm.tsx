import React from 'react';
import { CreateShowtimeFormProps } from './CreateShowtimeForm.type';
import CRUDButton from '@/pages/admin/components/buttons/CRUDButton';
import { useRedux } from '@/app/hooks';
import { createShowtime } from '@/app/redux/admin/showtime/showtime.admin.slice';
import * as yup from 'yup';
import { toast } from 'sonner';
import { IMovie } from '@/app/types/movie';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SelectInput from '@/app/components/inputs/SelectInput';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
function CreateShowtimeForm({
	eventInfo,
	onCloseModal,
}: CreateShowtimeFormProps) {
	const { event } = eventInfo;
	const movie = event.toPlainObject({
		collapseExtendedProps: true,
	}) as IMovie & { start: string; end: string };

	const { dispatch, appSelector } = useRedux();
	const { selectedRoom, cinemas, selectedCinema } = appSelector(
		(s) => s.schedule
	);

	const room = cinemas[selectedCinema]?.rooms![selectedRoom];
	const startDate = new Date(movie.start);
	const endDate = new Date(movie.end);
	const formatter = new Intl.DateTimeFormat('vi-VN', {
		hour: '2-digit',
		minute: '2-digit',
		day: '2-digit',
		month: 'numeric',
	});
	const handleConfirmModal: SubmitHandler<FieldValues> = (data) => {
		const date = movie.start.split('T');
		const start_date = date[0];
		const start_time = date[1].split('+')[0];

		toast.promise(
			dispatch(
				createShowtime({
					format_id: data.format_id,
					movie_id: movie.id,
					room_id: room.id,
					start_date,
					start_time,
				})
			),
			{
				loading: 'Đang thêm xuất chiếu...',
				success: () => {
					onCloseModal!();
					return 'Đã thêm xuất chiếu ';
				},
			}
		);
	};

	const validationSchema = yup.object().shape({
		format_id: yup.string().required(),
	});

	const {
		register,
		control,
		handleSubmit,
		formState: { isSubmitted },
	} = useForm<FieldValues>({
		resolver: yupResolver<FieldValues>(validationSchema),
	});

	console.log(movie);

	return (
		<form onSubmit={handleSubmit(handleConfirmModal)}>
			<div className="relative  flex gap-4 flex-col rounded">
				<div className="bg-[#0E1946]">
					<div className="  gap-5 flex items-center ">
						<img
							src={movie?.poster}
							className="h-[220px] w-[180px] object-contain "
							alt=""
						/>
						<div className="">
							<div className="text-white">
								<h2 className="text-xl text-white">{movie?.name}</h2>
								<div className="flex flex-col gap-4">
									<p>Rạp: {room.name}</p>
									<p>
										{formatter.format(startDate)} - {formatter.format(endDate)}
									</p>
									<p>Định dạng:</p>
									<select
										{...register('format_id')}
										className="bg-[#EFEFEF]/20 w-full min-w-[260px] py-[7.5px] px-[15px] appearance-none text-white block border ml-auto border-[#fff]/80 rounded "
									>
										{movie.formats.map((c) => {
											return (
												<option
													className="bg-[#31375A] py-[10px]"
													key={c.id}
													value={c.id}
												>
													{c.caption} - {c.version}
												</option>
											);
										})}
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex gap-5 justify-center items-center">
					<CRUDButton variant="Add" type="submit">
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
		</form>
	);
}

export default CreateShowtimeForm;
