import Image from "next/image";
import React from "react";

const GalleryBanner = () => {
  return (
    <div className="relative mt-12 px-20">
      <Image
        className="w-full"
        src={"/images/gallery/banner.png"}
        alt="banner"
        width={1000}
        height={500}
      />

      {/* popup Label*/}
      <div className="absolute bottom-10 left-0 z-[10]">
        <div className="pop w-[530px]">
          <div className="flex h-[72px]">
            <div className="w-[10%] bg-picoTeal"></div>
            <div className="flex-grow bg-picoJuteBrown">
              <h2 className="ml-10 mt-4 text-2xl text-white">
                {" "}
                A Glimpse Into Our World
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBanner;
