import AddItem from "./components/add/AddItem";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import CinemaList from "../List";
import EditItem from "./components/edit/EditItem";
import { Toaster } from "sonner";
import LoadingAnimation from "@/app/components/loading/LoadingAnimation";

function CinemaDetail() {
  const { cinemaId } = useParams();

  const components = useCallback(() => {
    switch (cinemaId) {
      case "add":
        return <AddItem />;
      case "":
        return <CinemaList />;
      default:
        return <EditItem id={cinemaId!} />;
    }
  }, [cinemaId]);
  return (
    <div className="relative">
      <Toaster position="top-center" expand gap={10} closeButton richColors />
      {components()}
    </div>
  );
}

export default CinemaDetail;
