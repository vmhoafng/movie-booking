import React from 'react';
import { CreateShowtimeFormProps } from './CreateShowtimeForm.type';
import CRUDButton from '@/pages/admin/components/buttons/CRUDButton';

function CreateShowtimeForm({ movie, onCloseModal }: CreateShowtimeFormProps) {
	console.log(movie);

	return (
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
				<div className="mt-1 px-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut
					incidunt nemo consequuntur animi nihil adipisci delectus error eveniet
					facere sint, autem itaque consectetur consequatur, numquam placeat
					quasi ullam. Doloribus?
				</div>
			</div>
		</div>
	);
}

export default CreateShowtimeForm;
