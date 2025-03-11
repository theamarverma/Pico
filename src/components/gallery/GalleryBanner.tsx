import Image from "next/image";
import React from "react";

const GalleryBanner = () => {
  return (
    <div className="relative mt-12 px-4 md:px-20">
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
          <div className="flex w-[60%] md:h-[72px] md:w-full">
            <div className="w-[10%] bg-picoTeal"></div>
            <div className="flex-grow bg-picoJuteBrown">
              <h1 className="mt-4 text-white md:ml-10 md:text-3xl">
                {" "}
                A Glimpse Into Our World
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBanner;
