import React from "react";
import clsx from "clsx";

interface ScheduleButtonProps {
   time: number;
   onClick: () => void;
   small?: boolean;
}

function ScheduleButton({ time, onClick, small }: ScheduleButtonProps) {
   const df = "h-9 w-[75px] px-3 ";
   const mb = "h-6 w-[56px] text-xs px-3";
   return (
      <button
         className={clsx(
            `border rounded text-white/90 outline-0 hover:bg-borderColor`,
            small ? mb : df
         )}
         onClick={onClick}
      >
         <span
            className="
            block
            [text-shadow:1px_1px_2px_var(--tw-shadow-color)]
            shadow-black/50
            text-center
           "
         >
            {time}
         </span>
      </button>
   );
}

export default ScheduleButton;
