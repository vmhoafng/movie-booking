import React from "react";
import Title from "../../../app/components/Title";
import { useParams } from "react-router";
import Poster from "../../../app/components/Poster";
function Movies() {
  const { params } = useParams();
  return (
    <div className="mt-24 mx-auto w-[395px] md:w-[640px] lg:w-[790px] xl:w-[960px] 2xl:w-[1200px]">
      <div className="flex flex-col gap-10 items-start justify-center py-14 px-4 bg-bgPrimary">
        <div className="flex gap-10">
          <Title active={params === "showing"}>Phim đang chiếu</Title>
          <Title active={params === "coming-soon"}>Phim sắp chiếu</Title>
        </div>
        <div className="w-fit grid grid-cols-2 md:grid-cols-3 lg:flex lg:gap-5 xl:gap-[30px] auto-cols-max">
          <Poster name={"gaygaygaygaygaygaygaygaygaygaygaygay"} subname="gay" />
          <Poster name={"gay"} subname="gay" />
          <Poster name={"gay"} subname="gay" />
          <Poster name={"gay"} subname="gay" />
          <Poster name={"gay"} subname="gay" />
          <Poster name={"gay"} subname="gay" />
        </div>
      </div>
    </div>
  );
}

export default Movies;
