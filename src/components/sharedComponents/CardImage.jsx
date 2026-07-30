import React from "react";
const CardImage = ({
  src,
  alt,
  className,
  height,
  className1,
  ...aos
}) => {
  return <div {...aos} className={`w-full ${height} overflow-hidden rounded-[10px] xl:rounded-xl ${className}`}>
      <img src={src} alt={alt} className={`w-full h-full ${className1 ? "object-cover xl:object-contain" : "object-cover"} transition-transform duration-300 hover:scale-103 hover:brightness-103`} />
    </div>;
};
export default CardImage;
