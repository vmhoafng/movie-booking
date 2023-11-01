import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
	const { movieId } = useParams();
	return (
		<div>
			<div className="flex">
				<div className="">
					<div className="">
						<img src="https://dummyimage.com/180x270/000/fff" alt="" />
					</div>
					<div className="mt-[10px]">
						<img src="https://dummyimage.com/180x120/000/fff" alt="" />
					</div>
				</div>
				<div className="">
					<div className=""></div>
				</div>
			</div>
			<div className=""></div>
			<div className=""></div>
			<div className=""></div>
		</div>
	);
}

export default MovieDetail;
