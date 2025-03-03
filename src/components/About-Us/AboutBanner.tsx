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

      {/* popup Label*/}
      <div className="absolute bottom-10 left-0 z-[10]">
        <div className="pop w-[400px]">
          <div className="flex h-[72px]">
            <div className="w-[10%] bg-picoTeal"></div>
            <div className="flex-grow bg-picoJuteBrown">
              <h2 className="ml-10 mt-4 text-2xl text-white">
                {" "}
                Slice of Life !
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* poup Middle Image */}
      <div className="absolute -bottom-48 right-32 z-[10]">
        <div className="h-[470px] w-[380px] bg-[url(/images/about/popupCard.png)] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/pico_logo.svg"}
              alt="banner"
              width={242}
              height={242}
            />
            <p className="px-4">
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
