import Image from "next/image";
import React from "react";
import PicoButton from "../Global/PicoButton";

const Overview = () => {
  return (
    <div className="h-full">
      <div className="grid md:mx-20 md:grid-cols-2 md:gap-14">
        <div className="leftContent flex flex-col justify-evenly gap-4">
          <div className="flex gap-2">
            {" "}
            <div className="mt-3 w-1/6 border-t-2 border-borderGray"></div>
            <h1 className="tracking-label text-lg uppercase">Overview</h1>
          </div>

          <h1 className="text-subheader">
            A perfect blend of brews and wood-fired magic
          </h1>
          <p className="font-light">
            “Pi” is for pizza, and “Co” is for coffee. Together, it’s a match
            made in heaven. Founded by Prateek Didwania, we’re here nestled in
            South Kolkata near Vivekananda Park, our space is designed for
            those..............
          </p>

          <PicoButton title="Learn More" />
          <h1 className="flex h-12 w-2/3 items-center justify-center border-l-[10px] border-picoTeal bg-picoJuteBrown text-center text-white">
            Pizza. Coffee Happiness. Repeat
          </h1>
        </div>
        <div className="right">
          <Image
            className="h-full"
            alt="overview"
            src={"/images/homepage/overview.png"}
            width={1000}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
