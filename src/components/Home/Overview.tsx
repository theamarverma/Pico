import Image from "next/image";
import React from "react";
import PicoButton from "../Global/PicoButton";

const Overview = () => {
  return (
    <div className="h-full overflow-hidden bg-bgCreamDark">
      <div className="grid py-14 md:mx-20 md:grid-cols-2 md:gap-14">
        <div className="leftContent flex flex-col justify-evenly gap-4">
          <div className="flex gap-2">
            {" "}
            <div className="mt-3 w-1/6 border-t-2 border-borderGray"></div>
            <h5 className="uppercase">Overview</h5>
          </div>

          <h2>A perfect blend of brews and wood-fired magic</h2>
          <p>
            “Pi” is for pizza, and “Co” is for coffee. Together, it’s a match
            made in heaven. Founded by Prateek Didwania, we’re here nestled in
            South Kolkata near Vivekananda Park, our space is designed for
            those..............
          </p>

          <PicoButton title="Explore" />
          <div className="flex h-12 w-2/3 items-center justify-center border-l-[10px] border-picoTeal bg-picoJuteBrown text-center">
            Pizza. Coffee Happiness. Repeat
          </div>
        </div>
        <div className="right">
          <Image
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
