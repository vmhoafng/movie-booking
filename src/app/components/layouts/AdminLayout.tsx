import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
	return (
		<div className="w-full  text-white bg-bgPrimary flex">
			<Sidebar />

			<div className="w-full ml-[250px] bg-bgPrimary ">
				<Topbar />
				<div className=" container pb-20 bg-bgPrimary mt-6 flex-1 mx-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default AdminLayout;
