import Image from "next/image";
import React from "react";

const AboutBanner = () => {
  return (
    <div className="relative mt-12 px-20">
      <Image
        className="w-full"
        src={"/images/about/aboutBanner.png"}
        alt="banner"
        width={1000}
        height={500}
      />

      {/* popup */}
      <div className="absolute bottom-10 left-0">
        <div className="pop w-[430px]">
          <div className="flex h-[72px]">
            <div className="w-[15%] bg-picoTeal"></div>
            <div className="flex-grow bg-picoJuteBrown">
              <h2 className="ml-10 mt-4 text-2xl text-white">
                {" "}
                Slice of Life !
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
