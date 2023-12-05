import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useRedux } from '@/app/hooks';
import {
    createMovie,
    getMovieDetailById,
    putMovie,
} from '@/app/redux/movies/movies.slice';
import {
    IMovie,
    IMovieFormat,
    IMovieGenre,
    IMovieImage,
    IPutMovieDetails,
} from '@/app/types/movie';
import { useEffect, useRef, useState } from 'react';
import { TFile } from '@/app/components/upload/FileUploader';
import { toast } from 'sonner';

export default function useMovieDetail(mode: 'edit' | 'create') {
    const { movieId } = useParams();
    const navigation = useNavigate();
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
        description: yup.string().required('Nội dung phim không được để trống'),
        // country: yup.string().required(),
        language: yup.string().required('Ngôn ngữ phim không được để trống'),
        producer: yup.string().required('Nhà sản xuất không được để trống'),
        cast: yup.string().required('Vai diễn không được để trống'),
        director: yup.string().required('Đạo diễn không được để trống'),
        rated: yup
            .number()
            .typeError('Độ tuổi phim không được để trống')
            .required('Độ tuổi phim không được để trống'),
        trailer: yup.string().required('Trailer không được để trống'),
        releaseDate: yup.string().required(),
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
                        (endDate.getTime() - releaseDate.getTime()) /
                        (3600 * 1000 * 24);

                    return days >= 15;
                },
            })
            .required(),
        runningTime: yup
            .number()
            .typeError('Thời lượng phải là số và không được để trống')
            .required(''),
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
        setError,
        clearErrors,
        control,
        formState: { isDirty, errors, isLoading },
    } = useForm({
        resolver: yupResolver<any>(validateMovieDetail),
        mode: 'onChange',
        defaultValues:
            mode === 'edit'
                ? async () =>
                      await dispatch(getMovieDetailById(movieId!)).then(
                          (data: any) => {
                              setMovie(data.payload);
                              setImages([...(data.payload.images || [])]);
                              imageInitialState.current = [
                                  ...(data.payload.images || []),
                              ];

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
                                  formats: (data.payload.formats || []).map(
                                      (f: IMovieFormat) => {
                                          return {
                                              label: `${f.caption}-${f.version}`,
                                              value: f.id,
                                          };
                                      },
                                  ),
                                  genre: (data.payload.genre || []).map(
                                      (f: IMovieGenre) => {
                                          return {
                                              label: `${f.name}`,
                                              value: f.id,
                                          };
                                      },
                                  ),
                              };
                          },
                      )
                : {
                      runningTime: 0,
                      releaseDate: new Date(Date.now()).toISOString(),
                      endDate: new Date(Date.now()).toISOString(),
                  },
    });

    const handleCancel = () => {
        navigation('../');
    };

    const onSubmitEdit: SubmitHandler<FieldValues> = (data) => {
        if (!movie?.poster && !poster) {
            setError('poster', { message: 'Thiếu ảnh dọc của phim' });
            return;
        }
        if (!movie?.horizontal_poster && !horPoster) {
            setError('hor_poster', { message: 'Thiếu ảnh ngang của phim' });
            return;
        }
        if (!images?.length && !files?.length) {
            setError('images', { message: 'Phải có ít nhất một ảnh của phim' });
            return;
        }

        const deletedIds = (imageInitialState.current || [])
            .filter((image) => {
                return (images || []).indexOf(image) === -1;
            })
            .map((i) => i.id);

        const payload: IPutMovieDetails = {
            movie: JSON.stringify({
                ...data,
            }),
            ...(poster && { poster }),
            ...(horPoster && { horPoster }),
            ...(files && { images: files }),
            ...(deletedIds?.length && { imageIds: deletedIds }),
        };
        toast.promise(dispatch(putMovie({ id: movieId!, payload })), {
            loading: 'Phim đang được cập nhật...',
            success: () => {
                setTimeout(() => navigation('../'), 2000);
                return 'Cập nhật thành công';
            },
            error: (err) => {
                return 'Cập nhật thất bại ' + err;
            },
        });
    };

    const onSubmitAdd: SubmitHandler<FieldValues> = (data) => {
        if (!poster) {
            setError('poster', { message: 'Thiếu ảnh dọc của phim' });

            return;
        }
        if (!horPoster) {
            setError('hor_poster', { message: 'Thiếu ảnh ngang của phim' });
            return;
        }
        if (!files?.length) {
            setError('images', { message: 'Phải có ít nhất một ảnh của phim' });
            return;
        }
        const payload: IPutMovieDetails = {
            movie: JSON.stringify({
                ...data,
            }),
            ...(poster && { poster }),
            ...(horPoster && { horPoster }),
            ...(files && { images: files }),
        };
        toast.promise(dispatch(createMovie(payload)), {
            loading: 'Phim đang được cập nhật...',
            success: () => {
                return 'Thêm thành công';
            },
            error: (err) => {
                return 'Thêm thất bại ' + err;
            },
        });
    };

    return {
        submitEdit: handleSubmit(onSubmitEdit),
        submitCreate: handleSubmit(onSubmitAdd),
        handleCancel,
        register,
        control,
        poster,
        horPoster,
        errors,
        movie,
        isDirty,
        images,
        clearErrors,
        files,
        setPoster,
        setHorPoster,
        setFiles,
        setImages,
    };
}
