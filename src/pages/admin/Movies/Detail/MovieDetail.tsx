import Title from '@/app/components/Title';
import Input from '@/app/components/inputs/Input';
import SelectInput, { SelectOption } from '@/app/components/inputs/SelectInput';
import UnderlineInput from '@/app/components/inputs/UnderlineInput';
import {
	CalendarIcon,
	ChevronDownIcon,
	StarIcon,
} from '@heroicons/react/24/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import CRUDButton from '../../components/buttons/CRUDButton';
import Dropzone, { useDropzone } from 'react-dropzone';
import FileUploader, { TFile } from '@/app/components/upload/FileUploader';
import Icon from '@/app/components/icon/Icon';
import { useRedux } from '@/app/hooks';
import { getMovieDetailById, putMovie } from '@/app/redux/movies/movies.slice';
import { IMovie, IPutMovieDetails } from '@/app/types/movie';
import { useEffect, useState } from 'react';
import ImageHolder from '@/app/components/upload/ImageHolder/ImageHolder';
import useFileUploader from '@/app/components/upload/FileUploader/useFileUploader';

// const Dropzone: React.FC<{
// 	multiple?: boolean;
// 	onChange?: ChangeEventHandler<HTMLInputElement>;
// }> = ({ multiple, onChange }) => {
// 	const { getInputProps, getRootProps, acceptedFiles } = useDropzone({
// 		multiple,
// 	});
// 	console.log(acceptedFiles);

// 	return (
// 		<div className="bg-black w-[120px] h-[450px]" {...getRootProps()}>
// 			<input
// 				{...getInputProps({
// 					onChange: onChange,
// 				})}
// 			/>
// 		</div>
// 	);
// };

const statusOptions: SelectOption[] = [
	{
		label: 'Đang chiếu',
		value: 2,
	},
	{
		label: 'Sắp chiếu',
		value: 1,
	},
];

function MovieDetail() {
	const { movieId } = useParams();
	const [poster, setPoster] = useState<TFile>();
	const { dispatch } = useRedux();
	const [movie, setMovie] = useState<IMovie>();
	const [horPoster, setHorPoster] = useState<TFile>();
	const [images, setImages] = useState<TFile[]>([]);

	const validateMovieDetail = yup.object({
		name: yup.string().required('Tên phim không được để trống'),
		subName: yup.string().required(),
		description: yup.string().required(),
		// country: yup.string().required(),
		language: yup.string().required(),
		producer: yup.string().required(),
		cast: yup.string().required(),
		director: yup.string().required(),
		rated: yup.number().required(),
		trailer: yup.string().required(),
		releaseDate: yup.string().required(),
		endDate: yup.string().required(),
		runningTime: yup.number().required(),
		statusId: yup.number().required(),
	});

	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { isDirty, errors },
	} = useForm({
		resolver: yupResolver(validateMovieDetail),
		mode: 'onChange',
		defaultValues: {
			name: movie?.name || '',
			subName: movie?.sub_name || '',
			description: movie?.description || '',
			producer: movie?.producer || '',
			cast: movie?.cast || '',
			director: movie?.director || '',
			rated: movie?.rated || 0,
			statusId: movie?.status.id || 1,
			releaseDate: movie?.release_date || new Date(Date.now()).toISOString(),
			endDate: movie?.end_date || new Date(Date.now()).toISOString(),
			trailer: movie?.trailer || '',
			runningTime: movie?.running_time || 0,
			language: movie?.language || '',
		},
	});

	useEffect(() => {
		dispatch(getMovieDetailById(movieId!)).then((data: any) => {
			reset({
				name: data.payload.name || '',
				subName: data.payload.sub_name || '',
				description: data.payload.description || '',
				producer: data.payload.producer || '',
				cast: data.payload.cast || '',
				director: data.payload.director || '',
				rated: data.payload.rated || 0,
				statusId: data.payload.status.id || 1,
				releaseDate:
					data.payload.release_date || new Date(Date.now()).toISOString(),
				endDate: data.payload.end_date || new Date(Date.now()).toISOString(),
				trailer: data.payload.trailer || '',
				runningTime: data.payload.running_time || 0,
				language: data.payload.language || '',
			});
			setMovie(data.payload);
		});
	}, [dispatch, movieId, reset]);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);

		const payload: IPutMovieDetails = {
			movie: JSON.stringify({
				...data,
				formats: [1],
				genre: movie?.genre.id || '',
			}),
			...(poster && { poster }),
			...(horPoster && { horPoster }),
			...(images && { images }),
		};
		dispatch(putMovie({ id: movieId!, payload }));
	};

	return (
		<form className="relative" onSubmit={handleSubmit(onSubmit)}>
			<div className="absolute top-0 right-0 flex gap-8 items-center">
				<div className="">
					<CRUDButton variant="Cancel">Hủy bỏ</CRUDButton>
				</div>
				<div className="">
					<CRUDButton variant="Save" type="submit">
						Cập nhật
					</CRUDButton>
				</div>
			</div>
			<div className="flex gap-[30px] py-[25px] border-b-[1px] border-dashed border-borderColor ">
				<div className="">
					<Dropzone
						onDrop={(acceptedFiles) => {
							const file = acceptedFiles[0];
							Object.assign(file, {
								preview: URL.createObjectURL(file),
							});
							setPoster(file);
						}}
						accept={{
							'image/jpeg': [],
							'image/png': [],
						}}
						maxFiles={1}
					>
						{({ getInputProps, getRootProps }) => (
							<div
								className="w-[180px] hover:cursor-pointer h-[270px]"
								{...getRootProps()}
							>
								<input {...getInputProps()} />
								{poster?.preview || movie?.poster ? (
									<img
										className="h-full w-full border"
										src={poster?.preview || movie?.poster}
										alt=""
									/>
								) : (
									<ImageHolder>Poster</ImageHolder>
								)}
							</div>
						)}
					</Dropzone>
					<div className="mt-[10px]">
						<Dropzone
							onDrop={(acceptedFiles) => {
								const file: TFile = acceptedFiles[0];
								Object.assign(file, {
									preview: URL.createObjectURL(file),
								});
								setHorPoster(file);
							}}
							accept={{
								'image/jpeg': [],
								'image/png': [],
							}}
							maxFiles={1}
						>
							{({ getInputProps, getRootProps }) => (
								<div
									className="w-[180px] hover:cursor-pointer h-[120px]"
									{...getRootProps()}
								>
									<input {...getInputProps()} />
									{horPoster?.preview || movie?.horizontal_poster ? (
										<img
											className="h-full w-full border"
											src={horPoster?.preview || movie?.horizontal_poster}
											alt=""
										/>
									) : (
										<ImageHolder>Poster</ImageHolder>
									)}
								</div>
							)}
						</Dropzone>
					</div>
				</div>
				<div className="">
					<div className="flex flex-col gap-2 ">
						<UnderlineInput
							variant="primary"
							id="name"
							name="name"
							register={register}
						/>
						<UnderlineInput
							variant="secondary"
							id="subName"
							name="subName"
							register={register}
						/>
					</div>
					<div className="mt-2">
						<p>
							<span className="text-white/70">Đánh giá:</span> 9.5/10
							<StarIcon className=" ml-1 h-5 w-5 inline-block pb-1 text-yellow-400" />
							<span className="text-white/70">(21)</span>
						</p>
						<div className=" mt-1 flex gap-1 items-center ">
							<Icon icon="clock" className="pb-1" />
							<UnderlineInput
								id="runningTime"
								name="runningTime"
								variant="time"
								register={register}
							/>
							<p className="text-sm text-lightPrimary">phút</p>
						</div>
					</div>
					<div className="mt-5 flex flex-col gap-4 ">
						<UnderlineInput
							label="Ngôn ngữ"
							id="language"
							name="language"
							register={register}
						/>
						<UnderlineInput
							label="Nhà sản xuất"
							id="producer"
							name="producer"
							register={register}
						/>
						<UnderlineInput
							label="Diễn viên"
							id="cast"
							name="cast"
							register={register}
						/>
						<UnderlineInput
							label="Đạo diễn"
							id="director"
							name="director"
							register={register}
						/>
						<UnderlineInput
							label="Độ tuổi"
							id="rated"
							name="rated"
							register={register}
						/>
						{/* @ts-ignore */}
						<label htmlFor="relase_date" className="flex relative text-[15px] ">
							<p className="flex-[0_0_160px] text-white/70">Ngày khởi chiếu</p>
							<input
								id="relase_date"
								type="date"
								className=" pl-[15px] text-[14px] w-[300px] rounded border  bg-[#EFEFEF]/20 outline-none"
								placeholder="YYYY-MM-DD"
								{...register('releaseDate')}
							/>
							<span className="absolute top-[1px] right-[15px]">
								<CalendarIcon className="h-5 w-5" />
							</span>
						</label>
						<label htmlFor="relase_date" className="flex relative text-[15px] ">
							<p className="flex-[0_0_160px] text-white/70">Ngày ngừng chiếu</p>
							<input
								id="end_date"
								type="date"
								className=" pl-[15px] text-[14px] w-[300px] rounded border  bg-[#EFEFEF]/20 outline-none"
								placeholder="YYYY-MM-DD"
								{...register('endDate')}
							/>
							<span className="absolute top-[1px] right-[15px]">
								<CalendarIcon className="h-5 w-5" />
							</span>
						</label>
						<label className="flex">
							<p className="flex-[0_0_160px] text-white/70">Trạng thái</p>
							<SelectInput
								inputClassName="w-[300px]"
								id="statusId"
								name="statusId"
								options={statusOptions}
								control={control}
								value={statusOptions.find(
									(o) => o.value === (movie?.status.id || 1)
								)}
								//@ts-ignore
								endIcon={ChevronDownIcon}
							/>
						</label>
					</div>
				</div>
			</div>
			<div className="py-[25px]  border-dashed border-b-[1px] border-borderColor">
				<Title active={true}>Nội dung phim</Title>
				<label htmlFor="description" className="block mt-4">
					<textarea
						id="description"
						placeholder="Nội dụng"
						className="text-white/60 text-[15px] h-[200px]  bg-transparent w-full resize-none border-white/10 border-b-[1px] outline-none focus:border-highlight"
						{...register('description')}
					/>
				</label>
			</div>
			<div className="mt-[30px]">
				<Title active={true}>Trailer</Title>
				<label
					htmlFor="trailer"
					className="bg-white/10 py-4 px-[10px] block border mt-4 rounded border-white/10"
				>
					<input
						id="trailer"
						{...register('trailer')}
						className="bg-transparent outline-none w-full "
						type="text"
					/>
				</label>
			</div>
			<div className="mt-[50px]">
				<Title active={true}>Hình ảnh</Title>
				<div className="mt-5">
					<FileUploader
						maxFiles={8}
						showPreview
						onFileUpload={(acceptedFiles) => {
							setImages(acceptedFiles);
						}}
					/>
				</div>
			</div>
		</form>
	);
}

export default MovieDetail;
