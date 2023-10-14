import React from "react";
import Title from "../../../app/components/Title";
import { useParams } from "react-router";
import Poster from "../../../app/components/Poster";
function Movies() {
  const { params } = useParams();
  return (
    <div className="mt-24">
      <div className="flex flex-col items-start justify-center py-12 px-4 bg-bgPrimary">
        <div className="flex gap-10">
          <Title active={params === "showing"}>Phim đang chiếu</Title>
          <Title active={params === "coming-soon"}>Phim sắp chiếu</Title>
        </div>
        <div>
          <Poster  name={"gay"} subname="gay"/>
        </div>
      </div>
    </div>
  );
}

export default Movies;
