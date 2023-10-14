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
          ? "min-w-[220px] min-h-[145px] xl:min-w-[250px] xl:min-h-[165px]"
          : "min-w-[200px] min-h-[300px] xl:min-w-[290px] xl:min-h-[430px]",
        width && `min-w-[${width}px]`,
        height && `min-h-[${height}px]`
      )}
    />
  );
};

export default Image;
