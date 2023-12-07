import { PATHS } from '@/app/constants/path';
import { useRedux } from '@/app/hooks';
import { resetAuth } from '@/app/redux/auth';
import { Menu } from '@headlessui/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(' ');
}

function UserProfile() {
	const { appSelector, dispatch } = useRedux();
	const navigate = useNavigate();

	const { full_name, role } = appSelector((state) => state.auth.user);
	const handleLogout = () => {
		navigate(`/${PATHS.HOME.IDENTITY}`);
		dispatch(resetAuth());
	};
	return (
		<div className="flex justify-end items-center my-auto gap-[10px]">
			<div className="text-sm">
				<span className="block">{full_name}</span>
				<span className="block text-right text-white/60">{role}</span>
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
								to={`/${PATHS.PROFILE.IDENTITY}`}
								replace
								className={classNames(
									active ? 'bg-gray-100' : '',
									'block px-4 py-2 text-sm text-gray-700'
								)}
							>
								Thông tin
							</Link>
						)}
					</Menu.Item>
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
					{role === 'ADMIN' && (
						<Menu.Item>
							{({ active }) => (
								<Link
									to={`/${PATHS.HOME.IDENTITY}`}
									replace
									className={classNames(
										active ? 'bg-gray-100' : '',
										'block px-4 py-2 text-sm text-gray-700'
									)}
								>
									Trang Chủ
								</Link>
							)}
						</Menu.Item>
					)}
				</Menu.Items>
			</Menu>
		</div>
	);
}

export default UserProfile;
