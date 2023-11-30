import Button from '@/app/components/button/Button';
import Input from '@/app/components/inputs/Input';
import { ENDPOINTS } from '@/app/constants/endpoint';
import { Axios } from '@/app/utils/api';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import * as yup from 'yup';
const EmailAddress = () => {
	const validationSchema = yup.object().shape({
		email: yup.string().email('Vui lòng nhập email hợp lệ').required(),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FieldValues>({
		resolver: yupResolver<FieldValues>(validationSchema),
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const response = Axios.axiosGet(
			ENDPOINTS.AUTH.FORGOT_PASSWORD + '?email=' + data.email
		);
		reset();
		toast.promise(response, {
			loading: 'Đang gửi...',
			success: (data) => {
				return 'Đã gửi liên kết tới email';
			},
			error: (data) => {
				return 'Đã có lỗi xảy ra, vui lòng đợi trong giây lát';
			},
		});
	};

	return (
		<>
			<Toaster position="top-center" expand gap={10} closeButton richColors />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-[#0A1E5ECC] rounded flex flex-col items-center w-full xl:w-[660px] 2xl:w-[710px] px-5 py-5 md:px-10 md:pb-10 lg:px-[50px] lg:pb-6 border border-borderColor shadow-[4px_4px_30px_0px_rgba(0,0,0,0.50)]"
			>
				<Input
					id="email"
					label="Email"
					register={register}
					col
					errors={errors}
					placeholder="example@gmail.com"
				></Input>

				<div className="w-full flex flex-col items-center gap-2 font-inter">
					<div className="w-full text-white/50 font-semibold text-[13px] leading-6">
						*Vui lòng nhập email đã dùng để đăng ký tài khoản. Hệ thống sẽ gửi
						một liên kết
					</div>
					<Button highlight fullWidth type="submit">
						Tiếp tục
					</Button>
					<div className="text-lightPrimary font-semibold leading-6 cursor-pointer text-sm">
						Quay lại
					</div>
				</div>
			</form>
		</>
	);
};

export default EmailAddress;
