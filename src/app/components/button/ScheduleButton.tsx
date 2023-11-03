import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface ScheduleButtonProps {
  time: number;
  to?: string;
  small?: boolean;
}

function ScheduleButton({ time, to, small }: ScheduleButtonProps) {
  const df = "h-9 w-[75px] px-3 ";
  const mb = "h-6 w-[56px] text-xs px-3";
  return (
    <Link to={to!}>
      <button
        className={clsx(
          `border rounded text-white/90 outline-0 lg:hover:bg-borderColor`,
          small ? mb : df
        )}
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
      </Link>
   );
}

export default ScheduleButton;
