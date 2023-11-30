import Search from '../inputs/Search';
import { ForwardedRef, Fragment, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { useRedux } from '@/app/hooks';
import { setOpen } from '@/app/redux/layout';
import useOutsideClick from '@/app/hooks/useOutsideClick';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { PATHS } from '@/app/constants/path';
import useNavbar from './useNavbar';

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

function MobileNavbar() {
	const { dispatch } = useRedux();

	const { active } = useNavbar();

	const handleClose = () => {
		dispatch(setOpen(false));
	};

	const ref = useOutsideClick(handleClose);

	return createPortal(
		<div className="fixed top-0 left-0 w-full h-screen bg-black/40 z-[100]">
			<div
				className="w-[200px] h-full ml-auto  bg-bgPrimary"
				ref={ref as ForwardedRef<HTMLDivElement>}
			>
				<ul className="flex pt-[40px] text-center flex-col text-white text-[12px]  font-bold items-center gap-4">
					{navigation.map((n) => {
						const regex = new RegExp(`^/${n.to}$`);
						return (
							<li key={n.name} className="py-[18px] w-full">
								<Link
									className={classNames(
										regex.test(active!)
											? ' text-highlight'
											: 'text-gray-300  hover:text-white',
										'block w-full'
									)}
									to={n.to}
								>
									{n.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>,
		document.body
	);
}

export default MobileNavbar;
