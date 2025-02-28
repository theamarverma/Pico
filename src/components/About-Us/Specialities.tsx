import Image from "next/image";
import React from "react";

const Specialities = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex gap-4">
        <h2 className="left flex h-[160px] w-2/3 items-center justify-center rounded-br-[50px] bg-picoTeal p-8 text-white">
          Relax, sip, and enjoy in PICO style!
          <span className="w-1/6 border-t-2 border-borderGray"></span>
        </h2>
        <div className="right">
          <div className="flex items-center justify-start gap-4">
            <div className="w-1/6 border-t-2 border-borderGray"></div>{" "}
            <h5 className="uppercase">Our Specialities</h5>
          </div>
          <p>
            We offer authentic Neapolitan pizzas and over 100 specialty
            ⁠Artisnal coffee brews.
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
          <h6 className="mt-4 text-center"> Woodfire Neapolitan Pizzas</h6>
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
          <h6 className="mt-4 text-center">Specialty Coffees</h6>
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
          <h6 className="mt-4 text-center">Artisanal Breads and More</h6>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
