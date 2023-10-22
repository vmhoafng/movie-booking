import React, { useEffect } from 'react';
import Input from '../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../../../../app/components/button/Button';
import { useRedux } from '../../../../../app/hooks';
import { login } from '../../../../../app/redux/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { PATHS } from '../../../../../app/constants/path';

const validationSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(1),
});

const LoginForm = () => {
	const { dispatch, appSelector } = useRedux();

	const { userLoggedIn } = appSelector((state) => state.auth);

	const location = useLocation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	function onSubmit(data) {
		dispatch(login(data));
	}

	return (
		<>
			{userLoggedIn && <Navigate to={`/${location.state.from}`} replace />}

			<form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<Input
					// disabled={isLoading}
					register={register}
					errors={errors}
					required
					id="email"
					label="Email"
					type="text"
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
				<span className="block w-full mt-4 text-right text-sm text-borderColor hover:cursor-pointer hover:text-lightPrimary transition-colors duration-200">
					Quên mật khẩu?
				</span>
				<div>
					<Button lg type="submit">
						Đăng nhập
					</Button>
				</div>
			</form>
		</>
	);
};

export default LoginForm;
