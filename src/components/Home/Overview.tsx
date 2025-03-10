import Image from "next/image";
import React from "react";
import PicoButton from "../Global/PicoButton";

const Overview = () => {
  return (
    <div className="h-full">
      <div className="mx-4 grid gap-4 md:mx-20 md:grid-cols-2 md:gap-14">
        <div className="leftContent flex flex-col justify-evenly gap-4">
          <div className="flex gap-2">
            {" "}
            <div className="mt-3 w-1/6 border-t-2 border-borderGray"></div>
            <h1 className="text-sm uppercase tracking-label md:text-lg">
              Overview
            </h1>
          </div>

          <h1 className="text-xl md:text-subheader">
            A perfect blend of brews and wood-fired magic
          </h1>
          <p className="text-sm font-light md:text-base">
            “Pi” is for pizza, and “Co” is for coffee. Together, it’s a match
            made in heaven. Founded by Prateek Didwania, we’re here nestled in
            South Kolkata near Vivekananda Park, our space is designed for
            those..............
          </p>

          <PicoButton title="Learn More" />
          <h1 className="hidden h-12 items-center justify-center border-l-[10px] border-picoTeal bg-picoJuteBrown text-center text-white md:flex md:w-2/3">
            Pizza. Coffee Happiness. Repeat
          </h1>
        </div>
        <div className="right">
          <div className="mx-4 md:mx-0">
            <Image
              className=""
              alt="overview"
              src={"/images/homepage/overview.png"}
              width={1000}
              height={600}
            />
          </div>
          {/* Only for mobile Label over the image */}
          <h1 className="flex h-14 items-center justify-center border-l-[15px] border-picoTeal bg-picoJuteBrown text-center font-light uppercase tracking-label text-white md:hidden">
            Pizza. Coffee
            <br />
            Happiness. Repeat!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Overview;
