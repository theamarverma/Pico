import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-[90%] md:w-2/3">
          <div className="left flex items-center rounded-br-[50px] bg-picoTeal px-3 text-white md:justify-center md:px-0">
            <h1 className="flex flex-col text-xl md:text-header">
              Where flavours{" "}
              <div className="flex w-full items-center gap-6">
                meet <span className="w-1/2 border-t-2 border-white"></span>
              </div>
            </h1>
          </div>
        </div>

        <div className="right mx-4 space-y-6 md:mx-0">
          <div className="flex items-center justify-start gap-4">
            <div className="w-1/6 border-t-2 border-borderGray"></div>{" "}
            <h1 className="text-lg uppercase tracking-label">Features</h1>
          </div>
          <p className="text-lg font-light leading-[38px]">
            We serve up a mix of tradition & innovation—because great food &
            coffee deserve the best.
          </p>
        </div>
      </div>

      <div className="mx-4 grid md:mx-20 md:mt-10 md:grid-cols-2">
        <div className="left md:space-y-12">
          <div className="my-4 flex gap-4">
            <div>
              {" "}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-picoJuteBrown p-3 md:h-24 md:w-24">
                <Image
                  className=""
                  src={"images/svgs/fire.svg"}
                  alt="fire"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div>
              <div className="text-base font-medium text-picoTextGray md:text-2xl">
                Wood-Fired Perfection
              </div>
              <p className="text-sm font-light md:text-base">
                Hand-tossed Neapolitan pizzas, baked to crispy perfection in a
                wood-fired oven.
              </p>
            </div>
          </div>
          <div className="my-4 flex gap-4">
            <div>
              {" "}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-picoJuteBrown p-3 md:h-24 md:w-24">
                <Image
                  className=""
                  src={"images/svgs/cozy.svg"}
                  alt="cozy"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div>
              <div className="text-base font-medium text-picoTextGray md:text-2xl">
                Cozy Ambiance
              </div>
              <p className="text-sm font-light md:text-lg">
                A warm, inviting space perfect for good food and great
                conversations.
              </p>
            </div>
          </div>
        </div>
        <div className="right md:space-y-12">
          <div className="my-4 flex gap-4">
            <div>
              {" "}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-picoJuteBrown p-3 md:h-24 md:w-24">
                <Image
                  className=""
                  src={"images/svgs/coffee.svg"}
                  alt="coffee"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div>
              <div className="text-base font-medium text-picoTextGray md:text-2xl">
                Speciality Coffee
              </div>
              <p className="text-sm font-light md:text-base">
                Freshly brewed, single-origin coffee with rich aroma and bold
                flavors.
              </p>
            </div>
          </div>
          <div className="my-4 flex gap-4">
            <div>
              {" "}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-picoJuteBrown p-3 md:h-24 md:w-24">
                <Image
                  className=""
                  src={"images/svgs/quality.svg"}
                  alt="quality"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div>
              <div className="text-base font-medium text-picoTextGray md:text-2xl">
                Quality Ingredients
              </div>
              <p className="text-sm font-light md:text-base">
                Only the freshest, finest ingredients for an authentic taste in
                every bite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
