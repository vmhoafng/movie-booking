import React from "react";

function Poster() {
  return (
    <div className="flex flex-col rounded">
      <img src={"/assets/images/VerticalPoster03.png"} alt="" />
      <div className="flex flex-col gap-3 px-5">
        <div className="uppercase text-white font-bold hidden"></div>
        <div></div>
      </div>
    </div>
  );
}

export default Poster;
