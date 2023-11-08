import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useRedux } from '@/app/hooks';
import { getMovieDetailById, putMovie } from '@/app/redux/movies/movies.slice';
import {
	IMovie,
	IMovieFormat,
	IMovieImage,
	IPutMovieDetails,
} from '@/app/types/movie';
import { useEffect, useRef, useState } from 'react';
import { TFile } from '@/app/components/upload/FileUploader';

export default function useMovieDetail(mode: 'edit' | 'create') {
	const { movieId } = useParams();
	const [poster, setPoster] = useState<TFile>();
	const { dispatch } = useRedux();
	const [movie, setMovie] = useState<IMovie>();
	const [horPoster, setHorPoster] = useState<TFile>();
	const [files, setFiles] = useState<TFile[]>([]);
	const [images, setImages] = useState<IMovieImage[]>();
	const imageInitialState = useRef<IMovieImage[]>();
	const validateMovieDetail = yup.object<IMovie>({
		name: yup.string().required('Tên phim không được để trống'),
		subName: yup.string().required('Tên việt hóa phải được cung cấp'),
		description: yup.string().required('Nội dung phim không được để tróng6'),
		// country: yup.string().required(),
		language: yup.string().required('Ngôn ngữ phim không được để trống'),
		producer: yup.string().required(),
		cast: yup.string().required(),
		director: yup.string().required(),
		rated: yup.number().required('Độ tuổi phim không được để trống'),
		trailer: yup.string().required(),
		releaseDate: yup
			.string()
			.test(
				'test-validReleaseDate',
				'Ngày công chiếu bé hơn ngày hiện tại',
				(value: any) => {
					const currentDate = new Date(Date.now());
					const releaseDate = new Date(value);
					return currentDate < releaseDate;
				}
			)
			.required(),
		endDate: yup
			.string()
			.test({
				name: 'test',
				params: {},
				message: 'Ngày ngưng chiếu phài sau ngày công chiếu 15 ngày',
				exclusive: false,
				test: function (value: any) {
					const releaseDate: Date = new Date(this.parent.releaseDate);
					const endDate: Date = new Date(value);
					const days =
						(endDate.getTime() - releaseDate.getTime()) / (3600 * 1000 * 24);

					return days >= 15;
				},
			})
			.required(),
		runningTime: yup
			.number()
			.typeError('Thời lượng phải là số')
			.required('Test'),
		statusId: yup.number().required(),
		genre: yup
			.array()
			.default([])
			.min(1, 'Ít nhất một thể loại phim phải được chọn')
			.transform((value) => {
				return value.map((v: any) => v.value);
			}),
		formats: yup
			.array()
			.default([])
			.min(1, 'Phim phải có ít nhất 1 định dạng')
			.transform((value) => {
				return value.map((v: any) => v.value);
			}),
	});

	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { isDirty, errors },
	} = useForm({
		resolver: yupResolver<any>(validateMovieDetail),
		mode: 'onChange',
		defaultValues:
			mode === 'create'
				? async () =>
						await dispatch(getMovieDetailById(movieId!)).then((data: any) => {
							setMovie(data.payload);
							setImages([...(data.payload.images || [])]);
							imageInitialState.current = [...(data.payload.images || [])];

							return {
								name: data.payload.name,
								subName: data.payload.sub_name,
								description: data.payload.description,
								producer: data.payload.producer,
								cast: data.payload.cast,
								director: data.payload.director,
								rated: data.payload.rated,
								statusId: data.payload.status.id,
								releaseDate: data.payload.release_date,
								endDate: data.payload.end_date,
								trailer: data.payload.trailer,
								runningTime: data.payload.running_time,
								language: data.payload.language,
								formats: (data.payload.formats || []).map((f: IMovieFormat) => {
									return {
										label: `${f.caption}-${f.version}`,
										value: f.id,
									};
								}),
							};
						})
				: {
						runningTime: 0,
						releaseDate: new Date(Date.now()).toISOString(),
						endDate: new Date(Date.now()).toISOString(),
				  },
	});

	const handleCancel = () => {
		reset({}, { keepDefaultValues: true });
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const deletedIds = (imageInitialState.current || [])
			.filter((image) => {
				console.log((images || []).indexOf(image));

				return (images || []).indexOf(image) === -1;
			})
			.map((i) => i.id);

		const payload: IPutMovieDetails = {
			movie: JSON.stringify({
				...data,
				genre: movie?.genre.id || '',
			}),
			...(poster && { poster }),
			...(horPoster && { horPoster }),
			...(files && { images: files }),
			...(deletedIds?.length && { imageIds: deletedIds }),
		};
		dispatch(putMovie({ id: movieId!, payload }));
	};

	return {
		submitEdit: handleSubmit(onSubmit),
		handleCancel,
		register,
		control,
		poster,
		horPoster,
		errors,
		movie,
		isDirty,
		images,
		files,
		setPoster,
		setHorPoster,
		setFiles,
		setImages,
	};
}
