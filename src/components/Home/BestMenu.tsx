import Image from "next/image";
import React from "react";
import PicoButton from "../Global/PicoButton";
import Link from "next/link";

const BestMenu = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden h-full w-full gap-10 md:flex">
        <div className="w-[60%]">
          <div className="flex gap-4">
            <div>
              {" "}
              <Image
                className="h-full"
                src={"/images/homepage/menu/coffee.png"}
                alt="best menu"
                width={1000}
                height={600}
              />
              <h1 className="mt-2 flex items-center justify-center text-xl">
                {" "}
                Crange Coffee Concoction
              </h1>
            </div>
            <div>
              {" "}
              <Image
                className="h-full"
                src={"/images/homepage/menu/garlicBread.png"}
                alt="best menu"
                width={1000}
                height={600}
              />
              <h1 className="mt-2 flex items-center justify-center text-xl">
                {" "}
                Pulled Cheese Garlic Bread
              </h1>
            </div>
          </div>
        </div>
        <div className="mr-10 w-[40%]">
          <div className="flex h-full flex-col justify-end gap-10">
            {" "}
            <div className="flex items-center justify-start gap-3">
              {" "}
              <div className="w-[20%] border-t-2 border-picoTeal"></div>
              <h1 className="text-lg uppercase tracking-label text-picoTeal">
                Best Menu
              </h1>
            </div>
            <h1 className="text-xl text-black md:text-header">
              What do you like the Most?
            </h1>
            <p className="text-lg font-light">
              Check the menu that is most liked and ordered by our loyal
              customers every day
            </p>
            <div className="flex gap-2">
              {/* {" todo links pdf"} */}
              <Link href={"/Food_Menu_PICO.pdf"} target="_blank">
                <PicoButton title="Food Menu" classname="underline" />
              </Link>
              <Link href={"/Beverage_Menu_PICO.pdf"} target="_blank">
                <PicoButton title="Beverage Menu" classname="underline" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex flex-col gap-6 md:hidden">
        <h1 className="mx-4 text-sm uppercase tracking-label text-picoTeal">
          BEST Menu
        </h1>
        <h1 className="mx-4 text-xl">
          What do you like <br /> the Most ?
        </h1>
        <div className="flex">
          <Image
            className="h-full"
            src={"/images/homepage/menu/coffee.png"}
            alt="best menu"
            width={600}
            height={500}
          />
          <div className="mx-4">
            <p className="font-light">
              Check the menu that is most liked and ordered by our loyal
              customers every day
            </p>
            <div className="flex flex-col gap-2">
              {/* {" todo links pdf"} */}
              <PicoButton title="Food Menu" classname="underline" />
              <PicoButton title="Beverage Menu" classname="underline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestMenu;
