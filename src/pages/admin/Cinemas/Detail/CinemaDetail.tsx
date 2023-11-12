import Title from "@/app/components/Title";
import AddItem from "./components/add/AddItem";
import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import CinemaList from "../List";

function CinemaDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({ q: searchParams.get("q") || "add" });
  }, [searchParams]);
  console.log(searchParams.get("q"));

  const components = useCallback(() => {
    switch (searchParams.get("q")) {
      case "add":
        return <AddItem />;
      default:
        return <CinemaList />;
    }
  }, [searchParams]);
  return (
    <div>
      {components()}
    </div>
  );
}

export default CinemaDetail;
