import React, { Suspense } from 'react';
import DesktopNavbar from '../Navbar/DesktopNavbar';
import MobileNavbar from '../Navbar/MobileNavbar';
import DesktopFooter from '../Footer/DesktopFooter';
import MobileFooter from '../Footer/MobileFooter';
import { Outlet } from 'react-router-dom';

const loading = () => <div className=""></div>;

function Layout() {
	return (
		<div className="h-full w-full ">
			{/* <DesktopNavbar /> */}
			{/* <MobileNavbar /> */}
			<main className="h-full">
				<div className="container sm:mx-auto">
					<Suspense fallback={loading()}>
						<Outlet />
					</Suspense>
				</div>
			</main>
			{/* <DesktopFooter /> */}
			{/* <MobileFooter /> */}
		</div>
	);
}

export default Layout;
