import React from 'react';
import Input from '../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../../../../app/components/button/Button';
import { useRedux } from '@/app/hooks';
import { login } from '@/app/redux/auth';
import { IPostLoginPayload } from '@/app/types/auth';
import { Navigate, useLocation, useNavigation } from 'react-router-dom';
import { PATHS } from '@/app/constants/path';
import { Toaster, toast } from 'sonner';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('email không đúng định dạng.')
        .required('bắt buộc.'),
    password: yup.string().required('bắt buộc.').min(6, 'tối thiểu 6 kí tự.'),
});

const LoginForm = () => {
    const { dispatch, appSelector } = useRedux();

    const { userLoggedIn } = appSelector((state) => state.auth);

    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        resolver: yupResolver<FieldValues>(validationSchema),
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        toast.promise(
            dispatch(login(data as IPostLoginPayload)).then((res) => {
                if (res.meta.requestStatus === 'rejected') {
                    return new Promise((resolve, reject) => {
                        return reject();
                    });
                }
            }),
            {
                loading: 'Kiểm tra thông tin đăng nhập',
                error: () => {
                    return 'Thông tin đăng nhập không hợp lệ';
                },
                success: (data) => {
                    console.log(data);

                    return 'Đăng nhập thành công';
                },
            },
        );
    };

    return (
        <>
            {userLoggedIn && (
                <Navigate
                    to={{
                        pathname:
                            location.state?.from || `/${PATHS.HOME.IDENTITY}`,
                    }}
                    replace
                />
            )}
            <Toaster
                position="top-center"
                expand
                gap={10}
                closeButton
                richColors
            />

            <form
                className="w-full space-y-6"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <div className="w-full flex justify-end mt-4 ">
                    <span className="text-right text-sm text-borderColor hover:cursor-pointer hover:text-lightPrimary transition-colors duration-200">
                        Quên mật khẩu?
                    </span>
                </div>
                <div>
                    <Button large type="submit">
                        Đăng nhập
                    </Button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
