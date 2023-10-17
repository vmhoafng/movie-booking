import React from "react";
import Image from "./Image";
import clsx from "clsx";
import Button from "./button/Button";

interface PosterProps {
   src?: string;
   alt?: string;
   horizontal?: boolean;
   name: string;
   subname: string;
}

function Poster({ src, alt, horizontal, name, subname }: PosterProps) {
   return (
      <div
         className="
        w-fit
        flex
        flex-col
        border-transparent
        rounded
        [box-shadow:_2px_2px_4px_0px_rgba(0, 0, 0, 0.50);]
        overflow-hidden group"
      >
         <div
            className={clsx(
               `relative`,
               horizontal
                  ? "w-[220px] h-[145px] xl:w-[250px] xl:h-[165px]"
                  : "w-[190px] h-[300px] xl:w-[290px] xl:h-[430px]"
            )}
         >
            <Image
               horizontal={horizontal}
               src={src || "assets/images/poster.png"}
               alt={alt || "assets/images/poster.png"}
            />
            <div
               className="
            flex
            absolute 
            bg-black/60
            h-full
            w-full
            top-0
            items-center
            justify-center
            transition-all
            duration-100
            ease-linear
            opacity-0
            group-hover:opacity-100
            "
            >
               <Button
                  highlight
                  rounded
                  uppercase
                  borderWhite
                  small={horizontal}
                  medium={!horizontal}
               >
                  buy ticket
               </Button>
            </div>
         </div>
         <div
            className={clsx(
               `relative
          flex
          flex-col
          gap-[10px]
          py-5`,
               horizontal ? "w-[220px] xl:w-[250px]" : "w-[190px] xl:w-[290px]"
            )}
         >
            <div
               className="
          absolute 
          bg-white/60
          h-full
          w-full
          top-0
          transition-all
          duration-100
          ease-linear
          opacity-0
          group-hover:opacity-100
        "
            ></div>
            <div
               className={clsx(
                  "uppercase text-white font-bold transition-all duration-100 ease-linear group-hover:px-[10px] truncate",
                  horizontal && "text-[15px] xl:text-base"
               )}
            >
               {name}
            </div>
            <div
               className={clsx(
                  "uppercase text-white/60 font-bold transition-all duration-100 ease-linear group-hover:px-[10px]",
                  horizontal ? "text-xs xl:text-[13px]" : "text-sm "
               )}
            >
               {subname}
            </div>
         </div>
      </div>
   );
}

export default Poster;
