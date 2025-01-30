import { Image } from "@heroui/react";
import React from "react";

const FashionArtistGroup = ({ title = "title", text, img }) => {
  return (
    <div className="space-y-4">
      <Image className="w-7 h-7" src={img} disableSkeleton alt={title} />
      <p className="text-2xl font-medium text-customTextWhite">{title}</p>
      <p className="text-[#888888]">{text}</p>
    </div>
  );
};

export default FashionArtistGroup;
