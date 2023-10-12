import React, { Suspense } from 'react';
import DesktopNavbar from '../Navbar/DesktopNavbar';
import MobileNavbar from '../Navbar/MobileNavbar';
import DesktopFooter from '../Footer/DesktopFooter';
import MobileFooter from '../Footer/MobileFooter';
import { Outlet } from 'react-router-dom';

const loading = () => <div className=""></div>;

function Layout() {
	return (
		<div className="h-full">
			<DesktopNavbar />
			<MobileNavbar />
			<main className="lg:px-60 h-full">
				<Suspense fallback={loading()}>
					<Outlet />
				</Suspense>
			</main>
			<DesktopFooter />
			<MobileFooter />
		</div>
	);
}

export default Layout;
