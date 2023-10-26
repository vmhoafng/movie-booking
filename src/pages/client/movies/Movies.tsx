import React, { useCallback, useEffect, useState } from "react";
import Title from "../../../app/components/Title";
import { useParams } from "react-router";
import Poster from "../../../app/components/Poster";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSearchParams } from "react-router-dom";
import { useRedux } from "@/app/hooks";
import { getByStatus } from "@/app/redux/movies/movies.slice";
import MovieSkeletion from "./MovieSkeletion";
type ParamsType = "coming-soon" | "showing-now";
function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { appSelector, dispatch } = useRedux();
  const { movies, isLoading } = appSelector((state) => state.movies);
  useEffect(() => {
    dispatch(
      getByStatus({
        status: searchParams.get("q") as ParamsType,
      })
    );
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({ q: "showing-now" });
  }, []);
  const renderMovies = useCallback(() => {
    if (true)
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
          />
        ))}
      </>
    );
  }, [isLoading]);
  return (
    <div className="bg-bgPrimary w-full">
      <div className="mt-24 mx-auto w-[395px] md:w-[640px] lg:w-[790px] xl:w-[960px] 2xl:w-[1200px] overflow-hidden">
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
