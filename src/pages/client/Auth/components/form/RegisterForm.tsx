// @ts-nocheck
import React from 'react';
import Input from '../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../../../../app/components/button/Button';
import { Axios } from '@/app/utils/api';
import { ENDPOINTS } from '@/app/constants/endpoint';
import { Toaster, toast as t } from 'sonner';

const validationSchema = yup.object().shape({
	fullName: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().required().min(6),
	confirmPassword: yup.string().oneOf([yup.ref('password')]),
});

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitted },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	function onSubmit(data) {
		delete data.confirmPassword;
		const response = Axios.axiosPost(ENDPOINTS.AUTH.REGISTER, data);

		t.promise(response, {
			loading: 'Loading...',
			success(data) {
				reset();
				return 'Đăng ký thành công';
			},
			error(error) {
				reset(
					{},
					{
						keepDirtyValues: true,
					}
				);
				return error;
			},
		});
	}

	return (
		<>
			<Toaster position="top-center" expand gap={10} closeButton richColors />
			<form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<Input
					// disabled={isLoading}
					register={register}
					errors={errors}
					required
					id="fullName"
					label="Họ tên"
					placeholder="Enter your name"
				/>
				<Input
					// disabled={isLoading}
					register={register}
					errors={errors}
					required
					id="email"
					label="Email"
					type="email"
					placeholder="example@gmail.com"
				/>
				<Input
					// disabled={isLoading}
					register={register}
					errors={errors}
					required
					id="password"
					label="Mật khẩu"
					type="password"
					min="6"
					placeholder="Password"
				/>
				<Input
					// disabled={isLoading}
					register={register}
					errors={errors}
					required
					id="confirmPassword"
					label="Xác nhận mật khẩu"
					type="password"
					placeholder="Password"
				/>
				<div>
					<Button disabled={isSubmitted} medium type="submit">
						Đăng kí
					</Button>
				</div>
			</form>
		</>
	);
};

export default RegisterForm;
