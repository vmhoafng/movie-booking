import React, { useEffect, useState } from 'react';
import Search from '../inputs/Search';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { PATHS } from '@/app/constants/path';
import { ArrowRightIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useRedux } from '@/app/hooks';
import authUtils from '@/app/utils/auth';
import { getCurrentUser, resetAuth } from '@/app/redux/auth';
import Button from '../button/Button';
import { Axios } from '@/app/utils/api';
import { ENDPOINTS } from '@/app/constants/endpoint';

const navigation = [
	{ name: 'TRANG CHỦ', to: PATHS.HOME.IDENTITY },
	// { name: 'ĐẶT VÉ', to: '' },
	{ name: 'PHIM', to: PATHS.MOVIES.IDENTITY },
	{ name: 'RẠP/VÉ', to: PATHS.CINEMA.IDENTITY },
	// { name: 'THÀNH VIÊN', to: '' },
];
function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ');
}

const Profile = () => {
	const { dispatch, appSelector } = useRedux();
	const { user, userLoggedIn } = appSelector((state) => state.auth);

	useEffect(() => {
		if (!user.role && authUtils.isAuthenticated()) {
			const promise = dispatch(getCurrentUser());
			return () => promise.abort();
		}
	}, [dispatch, userLoggedIn, user]);

	const handleLogout = () => {
		dispatch(resetAuth());
	};

	return (
		<>
			{userLoggedIn ? (
				<div className="hidden md:flex lg:flex-1 max-w-[187px] gap-[10px] items-center">
					<div className="text-[white]/60 hidden lg:block">
						{user.full_name}
					</div>
					<Menu as="div" className="relative ">
						<div>
							<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="text-white w-8 h-8"
								>
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
										clipRule="evenodd"
									/>
								</svg>
							</Menu.Button>
						</div>
						<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
							<Menu.Item>
								{({ active }) => (
									<Link
										to={PATHS.PROFILE.IDENTITY}
										className={classNames(
											active ? 'bg-gray-100' : '',
											'block px-4 py-2 text-sm text-gray-700'
										)}
									>
										Thông tin
									</Link>
								)}
							</Menu.Item>
							{/* <Menu.Item>
								{({ active }) => (
									<a
										href="#"
										className={classNames(
											active ? 'bg-gray-100' : '',
											'block px-4 py-2 text-sm text-gray-700'
										)}
									>
										Cài đặt
									</a>
								)}
							</Menu.Item> */}
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={handleLogout}
										className={classNames(
											active ? 'bg-gray-100' : '',
											'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
										)}
									>
										Đăng xuất
									</div>
								)}
							</Menu.Item>
							{user.role === 'ADMIN' && (
								<Menu.Item>
									{({ active }) => (
										<Link
											to={PATHS.ADMIN.IDENTITY}
											className={classNames(
												active ? 'bg-gray-100' : '',
												'block px-4 py-2 text-sm text-gray-700'
											)}
										>
											Trang ADMIN
										</Link>
									)}
								</Menu.Item>
							)}
						</Menu.Items>
					</Menu>
				</div>
			) : (
				<div className="hidden md:flex items-center gap-5 text-xs md:text-sm lg:text-[15px]  whitespace-nowrap">
					<Link to="/auth" className="">
						<div className="text-white/80 font-inter hover:underline underline-offset-2 hover:text-highlight">
							Đăng ký
						</div>
					</Link>
					<Link to="/auth" className="">
						<Button small>Đăng nhập </Button>
					</Link>
				</div>
			)}
		</>
	);
};

const EmailNotification = () => {
	const handleCallAPi = () => {
		const response = Axios.axiosGetWithToken(
			ENDPOINTS.AUTH.REQUEST_VERIFY_EMAIL
		).catch((err) => {
			console.log(err);
		});
	};

	return (
		<div
			className="bg-yellow-300 px-2 text-center py-1 font-bold text-sm text-bgPrimary  "
			style={{ textShadow: 'none' }}
		>
			<p className="">
				Tài khoản của bạn chưa được xác minh bằng email, xác nhận email để mọi
				thứ xảy ra mượt mà nhất
				<Link
					to={PATHS.AUTH.EMAIL}
					onClick={handleCallAPi}
					className="ml-4 text-yellow-300  rounded-full bg-bgPrimary px-3 py-1"
				>
					Xác minh <ArrowRightIcon className="inline-block h-4 w-4 " />
				</Link>
			</p>
		</div>
	);
};

function DesktopNavbar() {
	const [active, setActive] = useState<string>();
	const location = useLocation();
	const { appSelector } = useRedux();
	const { verify } = appSelector((state) => state.auth.user);
	useEffect(() => {
		setActive(location.pathname);
	}, [location]);

	return (
		<div className="fixed top-0 left-0 right-0 bg-bgPrimaryBar  items-center justify-between w-full z-50 shadow-[0px_30px_120px_0px_rgba(0,0,0,0.3)]">
			<div className="h-[96px] w-full container gap-[27.5px]  md:gap-[75px] items-center flex justify-between mx-auto px-[15px] md:px-0">
				<div className="box-border lg:flex-1 max-w-[96px] md:max-w-[127px] items-center justify-center ">
					<img className="w-full" src={'./assets/images/Logo.png'} alt="" />
				</div>
				<div className=" max-w-[600px] lg:flex-1   ">
					<Search />
				</div>

				<Profile />
				<div className="md:hidden ">
					<Bars3Icon className="h-6 w-6 text-white" />
				</div>
			</div>
			<div className="hidden md:block">
				<div className=" h-[50] md:w-[960] flex justify-center align-center gap-[60px] border-t-2 border-bgPrimary">
					{navigation.map((item) => {
						const regex = new RegExp(`^/${item.to}$`);
						return (
							<Link
								key={item.name}
								to={item.to}
								className={classNames(
									regex.test(active!)
										? ' text-highlight'
										: 'text-gray-300  hover:text-white',
									'rounded-md px-3 py-[15px] text-sm md:text-[15px] lg:text-[16px] font-bold'
								)}
								aria-current={regex.test(active!) ? 'page' : undefined}
							>
								{item.name}
							</Link>
						);
					})}
				</div>
			</div>
			{!verify && <EmailNotification />}
		</div>
	);
}

export default DesktopNavbar;
