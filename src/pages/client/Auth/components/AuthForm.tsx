// import axios from "axios";
// import { signIn, useSession } from "auth/react";
import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import LoadingAnimation from '../../../../app/components/loading/LoadingAnimation';
import AuthSocialButton from '../../../../app/components/button/AuthSocialButton';
import LoginForm from './form/LoginForm';
import RegisterForm from './form/RegisterForm';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { PATHS } from '@/app/constants/path';
import { createPortal } from 'react-dom';

type Variant = 'LOGIN' | 'REGISTER';

const variants = {
    [`/auth/${PATHS.REGISTER.IDENTITY}`]: {
        to: `/auth/${PATHS.LOGIN.IDENTITY}`,
        linkText: 'Đăng nhập',
        text: 'Đã có tài khoản?',
    },
    [`/auth/${PATHS.LOGIN.IDENTITY}`]: {
        to: `/auth/${PATHS.REGISTER.IDENTITY}`,
        linkText: 'Tạo tài khoản',
        text: 'Chưa có tài khoản?',
    },
};

const loading = () => <LoadingAnimation />;

const AuthForm = () => {
    // const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    // const toggleVariant = useCallback(() => {
    //     setIsLoading(true);
    //     setTimeout(() => {
    //         if (variant === 'LOGIN') {
    //             setVariant('REGISTER');
    //         } else {
    //             setVariant('LOGIN');
    //         }
    //         setIsLoading(false);
    //     }, 2000);
    // }, [variant]);

    const socialAction = (action: string) => {
        setIsLoading(true);

        // signIn(action, { redirect: false })
        //   .then((callback) => {
        //     if (callback?.error) {
        //       toast.error("Invalid credentials!");
        //     }

        //     if (callback?.ok) {
        //       navigate("/");
        //     }
        //   })
        //   .finally(() => setIsLoading(false));
    };

    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [location.pathname]);

    const variant = useMemo(() => location.pathname, [location.pathname]);

    return (
        <>
            {isLoading && createPortal(<LoadingAnimation />, document.body)}
            <div className="mx-auto w-full md:w-[540px] shadow-2xl shadow-black/50">
                <div className="absolute p-4 top-0 left-0">
                    <Link to={'/'} className="text-white" replace>
                        Quay lại trang chủ
                    </Link>
                </div>
                <div className="bg-primaryBar px-10 py-16 rounded-lg px-10 w-full">
                    <div className="mx-auto w-full max-w-md ">
                        <h2 className="flex flex-col justify-center items-center text-center font-bold tracking-tighter pb-8">
                            <div className="mb-3 text-highlight text-2xl [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)] shadow-black/50">
                                Welcome
                            </div>
                            <div className="uppercase text-white/90 text-4xl [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)] shadow-black/50">
                                TO CINEMA
                            </div>
                        </h2>
                    </div>
                    {/* {variant === 'LOGIN' ? <LoginForm /> : <RegisterForm />} */}
                    <Suspense fallback={loading()}>
                        <Outlet />
                    </Suspense>
                    <div className="flex flex-col gap-8 justify-center items-center text-sm mt-8 px-2 text-white/90">
                        <div className="flex gap-2">
                            <div>
                                {/* {variant === 'LOGIN'
                                ? 'Chưa có tài khoản?'
                                : 'Đã có tài khoản?'} */}
                                {variants[variant]?.text || ''}
                            </div>
                            <Link
                                to={variants[variant]?.to || ''}
                                replace
                                // onClick={toggleVariant}
                                className="cursor-pointer text-highlight hover:underline"
                            >
                                {/* {variant === 'LOGIN'
                                ? 'Tạo tài khoản'
                                : 'Đăng nhập'} */}
                                {variants[variant]?.linkText || ''}
                            </Link>
                        </div>
                    </div>
                    <div className="mt-6">
                        {/* <div className="absolute inset-0 flex items-center">
                     <div className="w-full border-t border-white/70" />
                  </div> */}
                        <div className="relative flex justify-center text-sm overflow-hidden">
                            <span
                                className="relative uppercase font-bold text-white/70 
                  before:block before:w-[150px] before:h-[2px] before:absolute before:top-[8px] before:right-[80px] before:bg-white/20
                  after:block after:w-[150px] after:h-[2px] after:absolute after:top-[8px] after:left-[80px] after:bg-white/20"
                            >
                                Hoặc
                            </span>
                        </div>

                        <div className="mt-4 flex justify-center gap-4">
                            <AuthSocialButton
                                icon={'/assets/icons/twitter.svg'}
                                onClick={() => socialAction('github')}
                            />
                            <Link
                                to="https://booking-movie-backend-3a547b1ac2e9.herokuapp.com/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth2/redirect"
                                // onClick={(e) => {
                                // 	e.preventDefault();
                                // 	var wd = window.open(
                                // 		'https://booking-movie-backend-3a547b1ac2e9.herokuapp.com/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth2/redirect',
                                // 		'newwindow',
                                // 		'width=400, height=550'
                                // 	);
                                // 	setTimeout(() => {
                                // 		// @ts-ignore
                                // 		wd && wd.close();
                                // 	}, 10000);
                                // 	return false;
                                // }}
                            >
                                <AuthSocialButton
                                    icon={'/assets/icons/google.svg'}
                                    onClick={() => socialAction('google')}
                                />
                            </Link>
                            <AuthSocialButton
                                icon={'/assets/icons/facebook.svg'}
                                onClick={() => socialAction('facebook')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthForm;
