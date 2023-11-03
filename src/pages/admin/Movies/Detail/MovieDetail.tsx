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
import React, { ChangeEventHandler, FC } from 'react';
import {
	FieldValues,
	SubmitHandler,
	useForm,
	Controller,
} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import CRUDButton from '../../components/buttons/CRUDButton';
import Dropzone, { useDropzone } from 'react-dropzone';
import { TFile } from '@/app/components/FileUploader';
import Icon from '@/app/components/icon/Icon';

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

function MovieDetail() {
	const { movieId } = useParams();

	const options: SelectOption[] = [
		{
			label: 'Đang chiếu',
			value: 'showing-now',
		},
		{
			label: 'Sắp chiếu',
			value: 'coming-soon',
		},
	];

	const validateMovieDetail = yup.object({
		name: yup.string().required('Tên phim không được để trống'),
		sub_name: yup.string().required(),
		description: yup.string().required(),
		country: yup.string().required(),
		language: yup.string().required(),
		producer: yup.string().required(),
		cast: yup.string().required(),
		director: yup.string().required(),
		rated: yup.string().required(),
		trailer: yup.string().required(),
		relase_date: yup.string().required(),
		running_time: yup.string().required(),
		end_date: yup.string().required(),
		status: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		control,
		formState: { isDirty, errors },
	} = useForm({
		resolver: yupResolver(validateMovieDetail),
		mode: 'onChange',
		defaultValues: {
			name: 'A HAUNTING IN VENICE',
			sub_name: 'ÁN MẠNG Ở VENICE',
			description:
				'Án Mạng Ở Venice lấy bối cảnh hậu Thế Chiến II tại thành phố Venice vào đêm Halloween. Thám tử lừng danh Hercule Poirot bất đắc dĩ phải tham dự một buổi cầu hồn với sự xuất hiện của bà đồng “Dương Tử Quỳnh” tại một dinh thự hoang tàn và u ám. Khi một trong những vị khách bị giết chết, vị thám tử này bị ép buộc rơi vào một thế giới đầy bóng tối và ngập tràn những bí mật.',
			country: 'Mỹ',
			producer: '20th Century Studios',
			cast: 'Kenneth Branagh, Kelly Reilly, Dương Tử Quỳnh',
			director: 'Kenneth Branagh',
			rated: '13+',
			status: options[0].label,
			relase_date: '2023-10-23',
			end_date: '2023-10-23',
			trailer: 'test',
			running_time: '180',
			language: 'Anh',
		},
	});

	console.log(errors);
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<form className="relative" onSubmit={handleSubmit(onSubmit)}>
			<div className="absolute top-0 right-0 flex gap-8 items-center">
				<div className="">
					<CRUDButton variant="Cancel">Hủy bỏ</CRUDButton>
				</div>
				<div className="">
					<CRUDButton variant="Save" disabled={!isDirty} type="submit">
						Cập nhật
					</CRUDButton>
				</div>
			</div>
			<div className="flex gap-[30px] py-[25px] border-b-[1px] border-dashed border-borderColor ">
				<div className="">
					<div className="">
						<img src="https://dummyimage.com/180x270/000/fff" alt="" />
					</div>
					<div className="mt-[10px]">
						<img src="https://dummyimage.com/180x120/000/fff" alt="" />
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
							id="sub_name"
							name="sub_name"
							register={register}
						/>
					</div>
					<div className="mt-2">
						<p>
							<span className="text-white/70">Đánh giá:</span> 9.5/10
							<StarIcon className=" ml-1 h-5 w-5 inline-block pb-1 text-yellow-400" />
							<span className="text-white/70">(21)</span>
						</p>
						<div className="">
							<Icon icon="clock" />
							<UnderlineInput
								id="running_time"
								name="running_time"
								variant="time"
								register={register}
							/>
						</div>
					</div>
					<div className="mt-5 flex flex-col gap-4 ">
						<UnderlineInput
							label="Quốc gia"
							id="country"
							name="country"
							register={register}
						/>
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
								{...register('relase_date')}
							/>

							<span className="absolute top-[1px] right-[15px]">
								<CalendarIcon className="h-5 w-5" />
							</span>
						</label>

						<label htmlFor="relase_date" className="flex relative text-[15px] ">
							<p className="flex-[0_0_160px] text-white/70">Ngày khởi chiếu</p>
							<input
								id="end_date"
								type="date"
								className=" pl-[15px] text-[14px] w-[300px] rounded border  bg-[#EFEFEF]/20 outline-none"
								placeholder="YYYY-MM-DD"
								{...register('end_date')}
							/>
							<span className="absolute top-[1px] right-[15px]">
								<CalendarIcon className="h-5 w-5" />
							</span>
						</label>

						<label className="flex">
							<p className="flex-[0_0_160px] text-white/70">Trạng thái</p>
							<SelectInput
								inputClassName="w-[300px]"
								id="status"
								name="status"
								options={options}
								control={control}
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
			<div className=""></div>
		</form>
	);
}

export default MovieDetail;
