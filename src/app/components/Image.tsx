import clsx from "clsx";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  horizontal?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  horizontal,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(
        "object-cover shadow-[2px_2px_4px_0_rgba(0,0,0,0.5)]",
        horizontal
          ? "w-[220px] h-[145px] xl:w-[250px] xl:h-[165px]"
          : // : "w-[200px] h-[300px] xl:w-[290px] xl:h-[430px]"
            "w-full h-full xl:w-[290px] xl:h-[430px]"
      )}
      style={{ width: width, height: height }}
    />
  );
};

export default Image;
