import Image from "next/image";
import React from "react";
import PicoButton from "../Global/PicoButton";

const BestMenu = () => {
  return (
    <div>
      <div className="flex h-full w-full gap-10">
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
              <h1 className="tracking-label text-lg uppercase text-picoTeal">
                Best Menu
              </h1>
            </div>
            <h1 className="text-header text-black">
              What do you like the Most ?
            </h1>
            <p className="text-lg font-light">
              Check the menu that is most liked and ordered by our loyal
              customers every day
            </p>
            <div className="flex gap-2">
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
