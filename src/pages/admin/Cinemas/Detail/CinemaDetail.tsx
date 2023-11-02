import React from "react";
import useSearchTopbar from "../../../../app/components/inputs/SearchTopbar/useSearchTopbar";
import CinemaForm from "./components/CinemaForm";
import RoomForm from "./components/RoomForm";

function CinemaDetail() {
  const { searchParams } = useSearchTopbar();
  return (
    <div>
      <CinemaForm />
      <RoomForm />
    </div>
  );
}

export default CinemaDetail;
