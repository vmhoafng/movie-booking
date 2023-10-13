import React from 'react';
import { useRedux } from '../hooks';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import path from 'path';
import { PATHS } from '../constants/path';

type ProtectedRouteTypes = {
	component: React.ComponentType;
	role?: string;
};

function ProtectedRoute({
	component: RouteComponent,
	role,
}: ProtectedRouteTypes) {
	const { appSelector } = useRedux();

	const { isAuthenticated } = appSelector((state) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) navigate(`${PATHS.AUTH.IDENTITY}`);
	}, [isAuthenticated, navigate]);

	if (role && role !== 'Admin') {
		// If a role is specified and it's not the expected role, navigate somewhere else.
		return <Navigate to="/" />;
	}

	//@ts-ignore
	return <RouteComponent />;
}

export default ProtectedRoute;
