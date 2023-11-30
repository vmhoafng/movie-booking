import Button from '@/app/components/button/Button';
import Input from '@/app/components/inputs/Input';
import LoadingAnimation from '@/app/components/loading/LoadingAnimation';
import { ENDPOINTS } from '@/app/constants/endpoint';
import { Axios } from '@/app/utils/api';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import * as yup from 'yup';
import Error404 from '../Error404';
import { PATHS } from '@/app/constants/path';

const CreatePasswordForm = ({ verify }: { verify: string }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);
	const navigate = useNavigate();

	const validationSchema = yup.object().shape({
		pass: yup.string().required(),
		confirm: yup.string().oneOf([yup.ref('pass')]),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		resolver: yupResolver<FieldValues>(validationSchema),
	});

	useEffect(() => {
		const response = Axios.axiosGet(ENDPOINTS.AUTH.CHECK_FORGOT_PASSWORD, {
			params: {
				verify,
			},
		});
		toast.promise(response, {
			success: () => {
				setLoading(false);
				return '';
			},
			error: () => {
				setIsError(true);
				return '';
			},
		});
	}, [navigate, verify]);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		delete data.confirm;
		const response = Axios.axiosPut(ENDPOINTS.AUTH.RESET_PATH, {
			pass: data.pass,
			verifyToken: verify,
		});
		toast.promise(response, {
			loading: 'Đang tạo mật khẩu mới cho bạn...',
			success: () => {
				setTimeout(
					() =>
						navigate(`/${PATHS.AUTH.IDENTITY}`, {
							replace: true,
						}),
					4000
				);
				return 'Tạo thành công';
			},
			error: (error) => {
				return 'Đã có lỗi xảy ra : ' + error;
			},
		});
	};

	if (isError) {
		return (
			<div className="my-[-60px]">
				<Error404 />
			</div>
		);
	}

	if (loading)
		return (
			<div className="bg-bgPrimary absolute top-0 left-0 bottom-0 right-0 z-[10000]">
				{' '}
				<LoadingAnimation />
			</div>
		);

	return (
		<>
			<Toaster position="top-center" expand gap={10} closeButton richColors />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-[#0A1E5ECC] rounded flex flex-col items-center w-full xl:w-[660px] 2xl:w-[710px] px-5 py-5 md:px-10 md:pb-10 lg:px-[50px] lg:pb-6 border border-borderColor shadow-[4px_4px_30px_0px_rgba(0,0,0,0.50)]"
			>
				<div className="w-full flex flex-col gap-2 pb-4">
					<Input
						id="pass"
						label="Mật khẩu mới"
						col
						errors={errors}
						register={register}
						placeholder=""
						type="password"
						required
					></Input>
					<Input
						id="confirm"
						label="Xác nhận mật khẩu mới"
						col
						errors={errors}
						register={register}
						placeholder=""
						type="password"
						required
					></Input>
				</div>

				<div className="w-full flex flex-col items-center gap-2 font-inter">
					<Button highlight fullWidth type="submit">
						Thay đổi
					</Button>
					<div className="text-lightPrimary font-semibold leading-6 cursor-pointer text-sm">
						Quay lại
					</div>
				</div>
			</form>
		</>
	);
};

export default CreatePasswordForm;
