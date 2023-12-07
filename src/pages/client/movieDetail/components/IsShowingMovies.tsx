import Title from '@/app/components/Title';
import Button from '@/app/components/button/Button';
import Poster from '@/app/components/poster/Poster';
import { IMovie } from '@/app/types/movie';
import React from 'react';
import { Link } from 'react-router-dom';

const IsShowingMovies = ({ showingNow }: { showingNow: IMovie[] }) => {
    return (
        <div className="w-fit hidden xl:flex xl:flex-col gap-5 justify-start items-start py-6 xl:py-8">
            <Title active>Phim đang chiếu</Title>
            <div className="flex flex-col w-fit gap-4">
                {showingNow.map((movie) => {
                    return (
                        <Poster
                            horizontal
                            key={movie.id}
                            src={movie.poster}
                            name={movie.name}
                            subname={movie.sub_name}
                            to={`/movies/${movie.slug}`}
                        />
                    );
                })}
            </div>
            <Link to={'/movies?q=showing-now'} className="w-full">
                <Button fullWidth medium>
                    Xem thêm
                </Button>
            </Link>
        </div>
    );
};

export default IsShowingMovies;
