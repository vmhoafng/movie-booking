import Title from "@/app/components/Title";
import AddItem from "./components/add/AddItem";
import { useParams, useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import CinemaList from "../List";

function CinemaDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  // useEffect(() => {
  //   setSearchParams({ q: searchParams.get("q") || "" });
  // }, [searchParams]);
  const { cinemaId } = useParams();
  console.log(cinemaId);

  const components = useCallback(() => {
    switch (cinemaId) {
      case "add":
        return <AddItem />;
      default:
        return <CinemaList />;
    }
  }, [searchParams]);
  return <div>{components()}</div>;
}

export default CinemaDetail;
