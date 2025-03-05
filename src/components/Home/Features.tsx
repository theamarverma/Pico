import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="">
      <div className="flex gap-4">
        <div className="w-2/3">
          <h1 className="left text-header flex h-[160px] items-center justify-center rounded-br-[50px] bg-picoTeal p-8 text-white">
            Where flavours <br /> meet{" "}
          </h1>
          <span className="w-1/2 border-t-2 border-borderGray"></span>
        </div>

        <div className="right space-y-6">
          <div className="flex items-center justify-start gap-4">
            <div className="w-1/6 border-t-2 border-borderGray"></div>{" "}
            <h1 className="tracking-label text-lg uppercase">Features</h1>
          </div>
          <p className="">
            We serve up a mix of tradition & innovation—because great food &
            coffee deserve the best.
          </p>
        </div>
      </div>

      <div className="mx-20 mt-10 grid grid-cols-2">
        <div className="left">
          <div className="my-4 flex gap-4">
            <div>
              {" "}
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-picoJuteBrown p-3">
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
              <div className="text-2xl font-medium">Wood-Fired Perfection</div>
              <p>
                Hand-tossed Neapolitan pizzas, baked to crispy perfection in a
                wood-fired oven.
              </p>
            </div>
          </div>
          <div className="my-4 flex gap-4">
            <div>
              {" "}
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-picoJuteBrown p-3">
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
              <h3>Wood-Fired Perfection</h3>
              <p>
                Hand-tossed Neapolitan pizzas, baked to crispy perfection in a
                wood-fired oven.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="my-4 flex gap-4">
            <div>
              {" "}
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-picoJuteBrown p-3">
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
              <h3>Wood-Fired Perfection</h3>
              <p>
                Hand-tossed Neapolitan pizzas, baked to crispy perfection in a
                wood-fired oven.
              </p>
            </div>
          </div>
          <div className="my-4 flex gap-4">
            <div>
              {" "}
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-picoJuteBrown p-3">
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
              <h3>Wood-Fired Perfection</h3>
              <p>
                Hand-tossed Neapolitan pizzas, baked to crispy perfection in a
                wood-fired oven.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
