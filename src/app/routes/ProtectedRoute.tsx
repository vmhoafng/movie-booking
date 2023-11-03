import React from 'react';
import { useRedux } from '../hooks';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PATHS } from '../constants/path';
import authUtils from '../utils/auth';
import { getCurrentUser } from '../redux/auth';

type ProtectedRouteTypes = {
	component: React.ComponentType;
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
	const { user } = appSelector((state) => state.auth);

	useEffect(() => {
		if (!user.role && authUtils.isAuthenticated()) {
			const promise = dispatch(getCurrentUser());
			return () => promise.abort();
		}
	}, []);

	useEffect(() => {
		if (!authUtils.isAuthenticated())
			navigate(`/${PATHS.AUTH.IDENTITY}`, {
				state: {
					from: location.pathname,
				},
			});
	}, [navigate, location.pathname]);

	if (role) {
		const regex = new RegExp(`^${role}$`);

		regex.test(user.role) && (
			<Navigate to={{ pathname: `/${PATHS.HOME.IDENTITY}` }} replace />
		);
	}

	//@ts-ignore
	return <RouteComponent backgroundImage={backgroundImage} />;
}

export default ProtectedRoute;
