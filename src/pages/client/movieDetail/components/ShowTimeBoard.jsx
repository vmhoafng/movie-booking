import React from "react";
import ScheduleButton from "../../../../app/components/button/ScheduleButton";

const ShowTimeBoard = ({ times, cinema }) => {
   return (
      <div className="flex flex-col py-5 border-b border-borderColor gap-5 last:border-0">
         <h2 className="font-bold text-lightPrimary text-base uppercase">
            {cinema}
         </h2>
         <div className="flex flex-wrap gap-2">
            {times?.map((time) => {
               return <ScheduleButton time={time?.start_time} to="/payment" />;
            })}
         </div>
      </div>
   );
};

export default ShowTimeBoard;
