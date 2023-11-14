import React from 'react';
import { useRedux } from '../hooks';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PATHS } from '../constants/path';
import authUtils from '../utils/auth';
import { getCurrentUser } from '../redux/auth';
import LoadingAnimation from '../components/loading/LoadingAnimation';

type ProtectedRouteTypes = {
	component?: React.ComponentType;
	role?: string;
	backgroundImage?: string;
};

function ProtectedRoute({
	component: RouteComponent,
	role,
	backgroundImage,
}: ProtectedRouteTypes) {
	const { dispatch, appSelector } = useRedux();
	const location = useLocation();
	const navigate = useNavigate();
	const { user, isLoading } = appSelector((state) => state.auth);
	console.log(isLoading);

	useEffect(() => {
		if (!user.role && authUtils.isAuthenticated()) {
			const promise = dispatch(getCurrentUser());
			return () => promise.abort();
		}
	}, [dispatch, user.role]);

	useEffect(() => {
		if (!authUtils.isAuthenticated())
			navigate(`/${PATHS.AUTH.IDENTITY}`, {
				state: {
					from: location.pathname,
				},
			});
	}, [navigate, location.pathname]);

	if (!user.role) {
		return (
			<div className="bg-bgPrimary w-screen h-screen">
				{' '}
				<LoadingAnimation />
			</div>
		);
	}

	if (role && user.role) {
		const regex = new RegExp(`^${role}$`);

		if (!regex.test(user.role)) {
			return <Navigate to={{ pathname: `/${PATHS.HOME.IDENTITY}` }} replace />;
		}
	}

	//@ts-ignore
	return <RouteComponent backgroundImage={backgroundImage} />;
}

export default ProtectedRoute;
