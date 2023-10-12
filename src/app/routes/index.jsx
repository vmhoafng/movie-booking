import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Layout from '../components/layouts/Layout';
import { PATHS } from '../constants/path';

//Lazy loading pages
const Movies = React.lazy(() => import('../../pages/Movie/List'));
const MovieDetail = React.lazy(() => import('../../pages/Movie/Detail'));

const loading = () => <div className="">loading</div>;

const LoadComponent = ({ component: Component }) => {
	return (
		<Suspense fallback={loading()}>
			<Component />
		</Suspense>
	);
};

const homeRoute = {
	path: PATHS.HOME.IDENTITY,
	element: <></>,
};

const movieRoutes = {
	path: PATHS.MOVIES.IDENTITY,
	children: [
		{
			path: PATHS.MOVIES.LIST,
			element: <LoadComponent component={Movies} />,
		},
		{
			path: PATHS.MOVIES.DETAIL,
			element: <LoadComponent component={MovieDetail} />,
		},
	],
};

function AllRoutes() {
	return useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [homeRoute, movieRoutes],
		},
		{
			path: '/',
			element: <ProtectedRoute />,
			// element: <ProtectedRoute role={"Admin"} RouteComponent={AdminLayout} />,
			children: [],
			// children: [ {
			// 	path: 'dashboard',
			//	element :<LoadComponent component={Dashboard}/>,
			// }],
		},
	]);
}

export default AllRoutes;
