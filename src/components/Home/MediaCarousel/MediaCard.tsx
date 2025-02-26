import { ArrowBigLeft, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const MediaCard = () => {
  return (
    <div className="rounded-2xl bg-bgCreamDark p-2">
      <div className="relative">
        <Image
          src={"/images/homepage/media/image.png"}
          alt="media"
          width={1000}
          height={500}
        />
        <h4>The Telegraph Online My Kolkata</h4>
        <p className="text-xs">9 July 2024</p>
        {/* popup arrow  */}
        <div className="absolute right-2 top-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bgCreamDark p-3">
            <Image
              src={"/images/homepage/media/arrowIcon.png"}
              alt="arrow"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
