import Image from "next/image";
import React from "react";

const Specialities = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="left w-[90%] rounded-br-[50px] bg-picoTeal text-white md:w-[60%]">
          <h1 className="mx-4 flex w-full flex-col text-xl md:mx-20 md:text-header">
            Relax, sip, and enjoy in
            <div className="flex w-full items-baseline gap-2">
              PICO style!
              <span className="w-1/3 border-t-2 border-white"></span>
            </div>
          </h1>
        </div>
        <div className="right mx-4 space-y-3 md:mx-10 md:space-y-6">
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
      <div className="mx-4 grid md:mx-10 md:mt-10 md:grid-cols-3 md:gap-10">
        {" "}
        <div className="h-[460px]">
          {" "}
          <Image
            className="h-[90%] object-cover md:h-full"
            src={
              "https://res.cloudinary.com/dzpuwffzh/image/upload/v1751557623/DOC-20250703-WA0001_yma7tv.jpg"
            }
            alt="best menu"
            width={1000}
            height={600}
          />
          <h1 className="text-center text-xl md:mt-4">
            {" "}
            Woodfire Neapolitan Pizzas
          </h1>
        </div>
        <div className="h-[460px]">
          {" "}
          <Image
            className="h-[90%] object-cover md:h-full"
            src={"/images/about/coffees.png"}
            alt="best menu"
            width={1000}
            height={600}
          />
          <h1 className="text-center text-xl md:mt-4">Specialty Coffees</h1>
        </div>
        <div className="h-[460px]">
          {" "}
          <Image
            className="h-[90%] object-cover md:h-full"
            src={"/images/about/breads.png"}
            alt="best menu"
            width={1000}
            height={600}
          />
          <h1 className="text-center text-xl md:mt-4">
            Artisanal Breads and More
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
