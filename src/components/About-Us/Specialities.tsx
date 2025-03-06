import Image from "next/image";
import React from "react";

const Specialities = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex gap-4">
        <div className="left w-[60%] rounded-br-[50px] bg-picoTeal text-white">
          <h1 className="mx-20 flex w-full flex-col text-header">
            Relax, sip, and enjoy in
            <div className="flex w-full items-baseline gap-2">
              PICO style!
              <span className="w-1/3 border-t-2 border-white"></span>
            </div>
          </h1>
        </div>
        <div className="right mx-10 space-y-6">
          <div className="flex items-center justify-start gap-4">
            <div className="w-1/6 border-t-2 border-borderGray"></div>{" "}
            <h1 className="uppercase tracking-label">Our Specialities</h1>
          </div>
          <p className="font-light">
            We offer authentic{" "}
            <i className="font-semibold">Neapolitan pizzas</i> and over 100
            specialty <i className="font-semibold">⁠Artisnal coffee brews.</i>
          </p>
        </div>
      </div>
      {/* Images */}
      <div className="mx-10 mt-10 grid grid-cols-3 gap-10">
        {" "}
        <div className="h-[460px]">
          {" "}
          <Image
            className="h-full"
            src={"/images/about/pizzas.png"}
            alt="best menu"
            width={1000}
            height={600}
          />
          <h1 className="mt-4 text-center text-xl">
            {" "}
            Woodfire Neapolitan Pizzas
          </h1>
        </div>
        <div className="h-[460px]">
          {" "}
          <Image
            className="h-full"
            src={"/images/about/coffees.png"}
            alt="best menu"
            width={1000}
            height={600}
          />
          <h1 className="mt-4 text-center text-xl">Specialty Coffees</h1>
        </div>
        <div className="h-[460px]">
          {" "}
          <Image
            className="h-full"
            src={"/images/about/breads.png"}
            alt="best menu"
            width={1000}
            height={600}
          />
          <h1 className="mt-4 text-center text-xl">
            Artisanal Breads and More
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
