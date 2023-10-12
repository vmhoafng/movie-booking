import React from 'react';
import { ROUTE_PARAMS } from '../../../app/constants/path';
import { useParams } from 'react-router-dom';

function MovieDetail() {
	const params = useParams();

	const movieId = params[`${ROUTE_PARAMS.MOVIE_ID.split(':')[1]}`];
	return <div>{movieId}</div>;
}

export default MovieDetail;
