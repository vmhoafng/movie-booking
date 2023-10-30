import React, { useCallback, useEffect } from "react";
import Title from "../../../app/components/Title";
import Poster from "../../../app/components/poster/Poster";
import { useSearchParams } from "react-router-dom";
import { useRedux } from "@/app/hooks";
import { getByStatus } from "@/app/redux/movies/movies.slice";
import MovieSkeletion from "../../../app/components/poster/PosterSkeletion";
type ParamsType = "coming-soon" | "showing-now";
function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { appSelector, dispatch } = useRedux();

  useEffect(() => {
    setSearchParams({ q: searchParams.get("q") || "showing-now" });
  }, []);
  useEffect(() => {
    dispatch(
      getByStatus({
        status: searchParams.get("q") as ParamsType,
      })
    );
  }, [searchParams, dispatch]);
  const { movies, isLoading } = appSelector((state) => state.movies);
  console.log(movies);
  const renderMovies = useCallback(() => {
    if (isLoading)
      return (
        <>
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <MovieSkeletion key={i} />
            ))}
        </>
      );
    return (
      <>
        {movies.map((movie) => (
          <Poster
            key={movie.id}
            name={movie.name}
            subname={movie.sub_name}
            src={movie.poster}
            alt={movie.slug}
            onClick={() => {}}
            to={`/movies/movieDetail/?q=${movie.slug}`}
          />
        ))}
      </>
    );
  }, [isLoading]);
  return (
    <div className="bg-bgPrimary w-full">
      <div className="mt-24 mx-auto">
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

          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {renderMovies()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
