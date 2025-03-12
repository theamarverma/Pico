import Image from "next/image";
import React from "react";

const AboutBanner = () => {
  return (
    <div className="relative mt-12 h-[300px] px-6 md:h-full md:px-20">
      <Image
        className="h-[180px] w-full md:h-full"
        src={"/images/about/aboutBanner.png"}
        alt="banner"
        width={1000}
        height={500}
      />

      {/* popup Label*/}
      <div className="absolute bottom-40 left-0 z-[10] mx-6 md:mx-0">
        <div className="pop w-[400px]">
          <div className="flex w-[45%] md:h-[72px] md:w-full">
            <div className="w-[10%] bg-picoTeal"></div>
            <div className="flex-grow bg-picoJuteBrown">
              <h1 className="ml-10 mt-4 text-white md:text-2xl">
                {" "}
                Slice of Life !
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* poup Middle Image */}
      <div className="absolute top-[50%] z-[10] mx-10 md:right-32 md:top-[80%] md:mx-0">
        <div className="bg-[url(/images/about/popupCard.png)] bg-cover bg-center md:w-[350px]">
          <div className="flex flex-col items-center justify-center py-4 md:py-8">
            <Image
              className="hidden h-full brightness-0 invert filter md:block"
              src="/pico_logo.svg"
              alt="banner"
              width={200}
              height={200}
            />

            <p className="px-4 text-sm font-light text-white md:px-8 md:text-base md:leading-[25px]">
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
