import Image from "next/image";
import React from "react";

const Specialities = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex gap-4">
        <h1 className="left flex h-[160px] w-2/3 items-center justify-center rounded-br-[50px] bg-picoTeal p-8 px-10 text-white">
          <h1 className="text-header flex">
            Relax, sip, and enjoy in PICO style!{" "}
          </h1>
        </h1>
        <div className="right mx-10 space-y-6">
          <div className="flex items-center justify-start gap-4">
            <div className="w-1/6 border-t-2 border-borderGray"></div>{" "}
            <h1 className="tracking-label uppercase">Our Specialities</h1>
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
