import Search from '../inputs/Search';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import React, { useState } from 'react';

const navigation = [
	{ name: 'TRANG CHỦ', href: '#', current: true },
	{ name: 'ĐẶT VÉ', href: '#', current: false },
	{ name: 'PHIM', href: '#', current: false },
	{ name: 'RẠP/VÉ', href: '#', current: false },
	{ name: 'THÀNH VIÊN', href: '#', current: false },
];
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function MobileNavbar() {
	let [open, setOpen] = useState(false);
	return (
		<div className="bg-primary h-[96px] items-center justify-between w-full">
			<div className="h-[96px] md:w-[1200px] items-center flex justify-between mx-auto">
				<div className="box-border flex w-[96px] min-w-[80px] max-w-[200px] px-[10px] items-center shrink-0 border-spacing-[50px] justify-center align-center">
					<img className="" src={'./assets/images/Logo.png'} />
				</div>
				<div className=" box-border md:w-[220px] py-[0px] px-[16px] h-[30px] max-w-[800px] min-w-[300px] flex items-center border-spacing-[32px] ">
					<Search />
				</div>

				<div
					onClick={() => setOpen(!open)}
					className="cursor-pointer md:hidden"
				>
					{open ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="text-white w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="text-white w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					)}
				</div>
				{open && (
					<div className=" flex items-center  ">
						<div className="md:static ml-0 md:min-h-fit absolute bg-primary min-h-[60vh] left-0 top-[96px] h-full w-[200px] px-5  md:w-auto flex  justify-center list-none">
							<div className="flex md:flex-row flex-col md:item-center md:gap-[4vw] gap-2">
								{navigation.map((item) => (
									<li key={item.name} className=" ">
										<a
											href={item.href}
											className={classNames(
												item.current
													? ' text-highlight'
													: 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'rounded-md px-5 py-[15px] text-sm duration-500 flex md:flex-row flex-col items-center'
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</a>
									</li>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default MobileNavbar;
