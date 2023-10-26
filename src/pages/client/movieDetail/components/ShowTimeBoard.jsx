import React from "react";
import ScheduleButton from "../../../../app/components/button/ScheduleButton";

const ShowTimeBoard = ({ showtimes, cinema }) => {
   console.log(showtimes);
   return (
      <div className="flex flex-col py-5 border-b border-borderColor gap-5 last:border-0">
         <h2 className="font-bold text-lightPrimary text-base uppercase">
            {cinema}
         </h2>
         <div className="flex flex-wrap gap-2">
            {showtimes?.map((showtime) => {
               return (
                  <ScheduleButton
                     time={showtime?.start_time}
                     id={showtime.id}
                     to="/ticket"
                  />
               );
            })}
         </div>
      </div>
   );
};

export default ShowTimeBoard;
