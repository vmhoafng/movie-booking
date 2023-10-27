//@ts-nocheck

import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Layout from '../components/layouts/Layout';
import { PATHS } from '../constants/path';
import LoadingAnimation from '../components/loading/LoadingAnimation';
import AdminLayout from '../components/layouts/AdminLayout';

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
const Cinema = React.lazy(() => import('../../pages/client/cinema'));
//profile
const profile = React.lazy(() => import('../../pages/client/profile/Profile'));
//payment
const payment = React.lazy(() => import('../../pages/client/payment/Payment'));
//tickets
const tickets = React.lazy(
	() => import('../../pages/client/seatPlan/SeatPlan')
);
//Admin -

//Movie
const movieListAdmin = React.lazy(
	() => import('../../pages/admin/Movies/List/MovieList')
);

//Cinema

const cinemaListAdmin = React.lazy(
	() => import('../../pages/admin/Cinemas/List')
);
const cinemaDetailAdmin = React.lazy(
	() => import('../../pages/admin/Cinemas/Detail')
);

//Loading
const loading = () => <LoadingAnimation />;

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

//Admin
const movieManageRoutes = {
	path: PATHS.ADMIN.MOVIES.IDENTITY,
	children: [
		{
			path: PATHS.ADMIN.MOVIES.LIST,
			element: <LoadComponent component={movieListAdmin} />,
		},
	],
};

const cinemaManageRoutes = {
	path: PATHS.ADMIN.CINEMA.IDENTITY,
	children: [
		{
			path: PATHS.ADMIN.CINEMA.LIST,
			element: <LoadComponent component={cinemaListAdmin} />,
		},
		{
			path: PATHS.ADMIN.CINEMA.DETAIL,
			element: <LoadComponent component={cinemaDetailAdmin} />,
		},
	],
};

function AllRoutes() {
	return useRoutes([
		authRoute,
		{
			path: '/',
			element: <Layout />,
			children: [homeRoute, movieRoutes],
		},
		{
			path: '/',
			element: <Layout backgroundImage="bg-03.jpg" />,
			children: [cinemaRoutes],
		},
		{
			path: '/',
			element: (
				<ProtectedRoute component={Layout} backgroundImage="bg-01.jpg" />
			),

			children: [ticketRoute],
		},
		{
			path: '/',
			element: (
				<ProtectedRoute component={Layout} backgroundImage="bg-03.jpg" />
			),
			children: [profileRoutes],
		},
		{
			path: '/',
			element: (
				<ProtectedRoute component={Layout} backgroundImage="bg-04.jpg" />
			),
			children: [paymentRoute],
		},
		{
			path: PATHS.ADMIN.IDENTITY,
			element: <ProtectedRoute role="ADMIN" component={AdminLayout} />,
			children: [movieManageRoutes, cinemaManageRoutes],
		},
	]);
}

export default AllRoutes;
