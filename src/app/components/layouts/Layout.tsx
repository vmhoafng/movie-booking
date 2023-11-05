import React, { Suspense } from 'react';
import DesktopNavbar from '../Navbar/DesktopNavbar';
import MobileNavbar from '../Navbar/MobileNavbar';
import DesktopFooter from '../Footer/DesktopFooter';
import MobileFooter from '../Footer/MobileFooter';
import { Outlet } from 'react-router-dom';
import LoadingAnimation from '../loading/LoadingAnimation';

const loading = () => <LoadingAnimation />;

type LayoutProps = {
	backgroundImage?: string;
};

function Layout({ backgroundImage }: LayoutProps) {
	return (
		<div className="h-full w-full">
			<DesktopNavbar />
			{/* <MobileNavbar /> */}
			<div
				className="object-cover"
				style={{ backgroundImage: `url('/assets/images/${backgroundImage}')` }}
			>
				<div className={backgroundImage ? 'bg-bgPrimary/80' : 'bg-bgPrimary'}>
					<main className="h-full">
						<div className="container px-[15px] md:px-0 md:mx-auto">
							<Suspense fallback={loading()}>
								<Outlet />
							</Suspense>
						</div>
					</main>
				</div>
			</div>
			<DesktopFooter />
			{/* <MobileFooter /> */}
		</div>
	);
}

export default Layout;
