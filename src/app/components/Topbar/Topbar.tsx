import React from 'react';
import SearchTopbar from '../inputs/SearchTopbar';
import UserProfile from '../UserProfile';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useRedux } from '@/app/hooks';
import { setOpen } from '@/app/redux/layout';

function Topbar() {
	const { appSelector, dispatch } = useRedux();
	const { isOpen } = appSelector((state) => state.layout);
	return (
		<div className="h-20 relative">
			{!isOpen && (
				<button
					onClick={() => dispatch(setOpen(!isOpen))}
					className=" flex items-center absolute top-0 bottom-0 left-5"
				>
					<div className="border rounded">
						<Bars3Icon className="h-6 w-6" />
					</div>
				</button>
			)}
			<div className=" container mx-auto flex items-center py-4 ">
				<div className="flex-[0_0_42%]">
					<SearchTopbar />
				</div>
				<div className="ml-auto">
					<UserProfile />
				</div>
			</div>
		</div>
	);
}

export default Topbar;
