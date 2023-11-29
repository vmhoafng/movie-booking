import Title from "@/app/components/Title";
import Button from "@/app/components/button/Button";
import Poster from "@/app/components/poster/Poster";
import { IMovie } from "@/app/types/movie";
import React from "react";

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
         <Button fullWidth medium onClick={() => {}}>
            Xem thêm
         </Button>
      </div>
   );
};

export default IsShowingMovies;
