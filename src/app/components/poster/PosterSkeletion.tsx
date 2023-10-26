import clsx from "clsx";
import React from "react";
type MovieSkeletionProps = {
  horizontal?: boolean;
};
function MovieSkeletion({ horizontal }: MovieSkeletionProps) {
  return (
    <div role="status" className="w-fit shadow animate-pulse">
      <div
        className="
        w-fit
        flex
        flex-col
        border-transparent
        rounded
        [box-shadow:_2px_2px_4px_0px_rgba(0,0,0,0.50)] group"
      >
        <div
          className={clsx(
            `relative flex items-center justify-center mb-4 bg-gray-300 rounded dark:bg-gray-700`,
            horizontal
              ? "w-[220px] h-[145px] xl:w-[250px] xl:h-[165px]"
              : "w-[190px] h-[300px] xl:w-[290px] xl:h-[430px]"
          )}
        >
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div
          className={clsx(
            `relative
          flex
          flex-col
          gap-[10px]
          py-5
          px-3`,
            horizontal ? "w-[220px] xl:w-[250px]" : "w-[190px] xl:w-[290px]"
          )}
        >
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}

export default MovieSkeletion;
