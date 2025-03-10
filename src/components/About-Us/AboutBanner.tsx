import Image from "next/image";
import React from "react";

const AboutBanner = () => {
  return (
    <div className="relative mt-12 px-8 md:px-20">
      <Image
        className="w-full"
        src={"/images/about/aboutBanner.png"}
        alt="banner"
        width={1000}
        height={500}
      />

      {/* popup Label*/}
      <div className="absolute bottom-10 left-0 z-[10]">
        <div className="pop w-[400px]">
          <div className="flex md:h-[72px]">
            <div className="w-[10%] bg-picoTeal"></div>
            <div className="flex-grow bg-picoJuteBrown">
              <h1 className="ml-10 mt-4 text-lg text-white md:text-2xl">
                {" "}
                Slice of Life !
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* poup Middle Image */}
      <div className="absolute z-[10] mx-10 md:-bottom-48 md:right-32 md:mx-0">
        <div className="bg-[url(/images/about/popupCard.png)] bg-cover bg-center md:h-[470px] md:w-[380px]">
          <div className="flex flex-col items-center justify-center">
            <Image
              className="hidden"
              src={"/pico_logo.svg"}
              alt="banner"
              width={242}
              height={242}
            />
            <p className="px-4 font-light text-white">
              From hand-stretched dough to freshly roasted beans, every element
              at PICO is about authenticity and taste. We serve up a mix of
              tradition and innovation—because great food and coffee deserve the
              best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
