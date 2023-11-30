import { Axios } from '@/app/utils/api';
import { ENDPOINTS } from '@/app/constants/endpoint';
import { Toaster, toast as t } from 'sonner';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export default function useRegisterForm() {
	const validationSchema = yup.object().shape({
		fullName: yup.string().required('bắt buộc.'),
		email: yup
			.string()
			.email('email không đúng định dạng.')
			.required('bắt buộc.'),
		password: yup.string().required('bắt buộc.').min(6, 'tối thiểu 6 kí tự.'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'mật khẩu không trùng khớp.')
			.required('Không được để trống'),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitted },
	} = useForm<FieldValues>({
		resolver: yupResolver<FieldValues>(validationSchema),
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
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
	};
	return {
		handleRegister: handleSubmit(onSubmit),
		errors,
		isSubmitted,
		register,
		reset,
	};
}
