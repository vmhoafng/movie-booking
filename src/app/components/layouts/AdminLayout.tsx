import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { Outlet } from 'react-router-dom';
import { useRedux } from '@/app/hooks';

function AdminLayout() {
	const { appSelector } = useRedux();
	const { isOpen } = appSelector((state) => state.layout);

	return (
		<div className="w-full  text-white bg-bgPrimary h-full">
			{isOpen && <Sidebar />}

			<div className="w-full  bg-bgPrimary">
				<Topbar />
				<div className=" container pb-20  bg-bgPrimary mt-6 flex-1 mx-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default AdminLayout;
