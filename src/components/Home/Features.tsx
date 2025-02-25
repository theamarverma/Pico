import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="">
      <div className="flex gap-4">
        <h2 className="left flex h-[160px] w-1/2 items-center justify-center rounded-br-3xl bg-picoTeal p-8 text-white">
          Where flavours meet{" "}
          <span className="w-1/6 border-t-2 border-borderGray"></span>
        </h2>
        <div className="right">
          <div className="flex items-center justify-start gap-4">
            <div className="w-1/6 border-t-2 border-borderGray"></div>{" "}
            <h4 className="uppercase">Features</h4>
          </div>
          <p>
            we serve up a mix of tradition & innovation- because great food &
            coffee deserve the best.
          </p>
        </div>
      </div>

      <div className="mx-20 grid grid-cols-2">
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
