import api from "@/app/services/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SeatPlan() {
   const { showtimeId } = useParams();
   const [seats, setSeats] = useState();
   const [seatRow, setSeatRow] = useState([]);

   const getSeatPlan = async (showtimeId) => {
      try {
         let res = await api.showtime.getSeatsByShowtime(showtimeId);
         setSeats([res.data.room.seats]);
      } catch (error) {
         console.log(error);
      }
   };

   function splitArrayIntoChunks(arr, chunkSize) {
      const chunkedArray = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
         chunkedArray.push(arr.slice(i, i + chunkSize));
      }
      return chunkedArray;
   }

   useEffect(() => {
      getSeatPlan(showtimeId);
   }, [showtimeId]);

   console.log(seats);

   useEffect(() => {
      let temp = splitArrayIntoChunks(seats, 15);
      setSeatRow([...seatRow, temp]);
   }, [seats]);

   console.log(seatRow);

   return <div>seat plan</div>;
}

export default SeatPlan;
