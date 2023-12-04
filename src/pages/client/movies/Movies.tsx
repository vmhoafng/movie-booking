import React, { useCallback, useEffect, useState } from "react";
import Title from "../../../app/components/Title";
import Poster from "../../../app/components/poster/Poster";
import { useSearchParams } from "react-router-dom";
import { useRedux } from "@/app/hooks";
import { getMovies } from "@/app/redux/movies/movies.slice";
import MovieSkeletion from "../../../app/components/poster/PosterSkeletion";
import { IMovie } from "@/app/types/movie";
function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { appSelector, dispatch } = useRedux();
  const { movies, comingSoon, showingNow } = appSelector(
    (state) => state.movies
  );
  const [movieByStatus, setMovieByStatus] = useState<IMovie[]>([]);
  useEffect(() => {
    setSearchParams({ q: searchParams.get("q") || "showing-now" });
  }, []);
  useEffect(() => {
    !movies.length && dispatch(getMovies());
    searchParams.get("q") === "showing-now" && setMovieByStatus(showingNow);
    searchParams.get("q") === "coming-soon" && setMovieByStatus(comingSoon);
  }, [searchParams, dispatch, showingNow, comingSoon, movies]);
  const renderMovies = useCallback(() => {
    return (
      <>
        {movieByStatus.map((movie) => (
          <Poster
            key={movie.id}
            name={movie.name}
            subname={movie.sub_name}
            src={movie.poster}
            alt={movie.slug}
            onClick={() => {}}
            to={`/movies/${movie.slug}`}
          />
        ))}
      </>
    );
  }, [movieByStatus]);
  return (
    <div className="bg-bgPrimary w-full">
      <div className="mx-auto">
        <div className="flex flex-col gap-10 items-start justify-center py-14 bg-bgPrimary">
          <div className="flex gap-10">
            <Title
              onClick={() => {
                setSearchParams({ q: "showing-now" });
              }}
              active={searchParams.get("q") === "showing-now"}
            >
              Phim đang chiếu
            </Title>
            <Title
              onClick={() => {
                setSearchParams({ q: "coming-soon" });
              }}
              active={searchParams.get("q") === "coming-soon"}
            >
              Phim sắp chiếu
            </Title>
          </div>

          <div className="w-full grid grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
            {!movieByStatus.length ? (
              <>
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <MovieSkeletion key={i} />
                  ))}
              </>
            ) : (
              renderMovies()
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
