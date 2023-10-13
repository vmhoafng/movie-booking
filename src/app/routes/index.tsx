//@ts-nocheck

import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Layout from '../components/layouts/Layout';
import { PATHS } from '../constants/path';

//Lazy loading pages

//landing
const Landing = React.lazy(() => import('../../pages/client/landing/Landing'));

//auth
const Auth = React.lazy(() => import('../../pages/client/Auth/Authentication'));

//movies
const Movies = React.lazy(() => import('../../pages/client/movies/Movies'));
const MovieDetail = React.lazy(
	() => import('../../pages/client/movieDetail/MovieDetail')
);

//cinema
const Cinema = React.lazy(() => import('../../pages/client/cinema/Cinema'));
//profile
const profile = React.lazy(() => import('../../pages/client/profile/Profile'));
//payment
const payment = React.lazy(() => import('../../pages/client/payment/Payment'));
//tickets
const tickets = React.lazy(
	() => import('../../pages/client/seatPlan/SeatPlan')
);
//

const loading = () => <div className="">loading</div>;

type LoadComponentProps = {
	component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => {
	return (
		//@ts-ignore
		<Suspense fallback={loading()}>
			{/* @ts-ignore */}
			<Component />
		</Suspense>
	);
};

const homeRoute = {
	path: PATHS.HOME.IDENTITY,
	element: <LoadComponent component={Landing} />,
};

const authRoute = {
	path: PATHS.AUTH.IDENTITY,
	element: <LoadComponent component={Auth} />,
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

const cinemaRoutes = {
	path: PATHS.CINEMA.IDENTITY,
	children: [
		{
			path: PATHS.CINEMA.LIST,
			element: <LoadComponent component={Cinema} />,
		},
	],
};

const profileRoutes = {
	path: PATHS.PROFILE.IDENTITY,
	children: [
		{
			path: PATHS.PROFILE.DETAIL,
			element: <LoadComponent component={profile} />,
		},
		{
			path: PATHS.PROFILE.EXCHANGE,
			element: <LoadComponent component={profile} />,
		},
	],
};

const paymentRoute = {
	path: PATHS.PAYMENT.IDENTITY,
	children: [
		{
			path: PATHS.PAYMENT.DETAIL,
			element: <LoadComponent component={payment} />,
		},
	],
};

const ticketRoute = {
	path: PATHS.TICKETS.IDENTITY,
	children: [
		{
			path: PATHS.TICKETS.DETAIL,
			element: <LoadComponent component={tickets} />,
		},
	],
};

function AllRoutes() {
	return useRoutes([
		authRoute,
		{
			path: '/',
			element: <Layout />,
			children: [homeRoute, movieRoutes, cinemaRoutes],
		},
		{
			path: '/',
			element: <ProtectedRoute component={Layout} />,
			children: [paymentRoute, profileRoutes, ticketRoute],
		},
		{
			path: '/',
			// element: <ProtectedRoute />,
			element: <ProtectedRoute role={'Admin'} component={Layout} />,
			children: [],
			// children: [ {
			// 	path: 'dashboard',
			//	element :<LoadComponent component={Dashboard}/>,
			// }],
		},
	]);
}

export default AllRoutes;
