import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
	return (
		<div className="w-full  text-white bg-bgPrimary h-full flex">
			<Sidebar />

			<div className="w-full">
				<Topbar />
				<div className="container mt-6 mx-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default AdminLayout;
