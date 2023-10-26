import { getSeatsByShowtime } from "../../../app/redux/slices/showtimeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function SeatPlan() {
   const dispatch = useDispatch();
   const seatPlan = useSelector((state) => state.showtime);
   useEffect(() => {
      dispatch(getSeatsByShowtime("123"));
   }, [dispatch]);

   console.log(seatPlan);
   return <div>SeatPlan</div>;
}

export default SeatPlan;
