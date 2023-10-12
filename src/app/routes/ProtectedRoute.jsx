import React from 'react';
import { useRedux } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ProtectedRoute({ RouteComponent, role }) {
	const { appSelector } = useRedux();

	const { isAuthenticated } = appSelector((state) => state.user);

	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) navigate('/login');
	}, [isAuthenticated, navigate]);

	if (isAuthenticated) return <RouteComponent />;
}

export default ProtectedRoute;
