import React, { Suspense, useEffect, useLayoutEffect } from 'react';
import DesktopNavbar from '../Navbar/DesktopNavbar';
import MobileNavbar from '../Navbar/MobileNavbar';
import DesktopFooter from '../Footer/DesktopFooter';
import MobileFooter from '../Footer/MobileFooter';
import { Outlet, useLocation } from 'react-router-dom';
import LoadingAnimation from '../loading/LoadingAnimation';
import HeroSection from './HeroSection';
import { useRedux } from '@/app/hooks';
import useWindowDimensions from '@/app/hooks/useWindowDimensions';

const loading = () => <LoadingAnimation />;

type LayoutProps = {
	backgroundImage?: string;
	landing?: boolean;
};

function Layout({ backgroundImage, landing = false }: LayoutProps) {
	const { appSelector } = useRedux();
	const { isOpen } = appSelector((state) => state.layout);
	const { width } = useWindowDimensions();
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<div className="h-full w-full relative bg-bgPrimary">
			<DesktopNavbar />
			{width < 680 && <MobileNavbar />}
			<div className="relative h-fit w-full">
				<div
					className="object-cover md:mt-[146px] mt-[96px]"
					style={{
						backgroundImage: `url('/assets/images/${backgroundImage}')`,
					}}
				>
					{landing && <HeroSection />}

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
		</div>
	);
}

export default Layout;
