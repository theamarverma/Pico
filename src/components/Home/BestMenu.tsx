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
              <h6> Crange Coffee Concoction</h6>
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
              <h6 className="">Pulled Cheese Garlic Bread</h6>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="flex h-full flex-col justify-end gap-3">
            {" "}
            <div className="flex items-center justify-start gap-3">
              {" "}
              <div className="w-[20%] border-t-2 border-picoTeal"></div>
              <h5 className="uppercase text-picoTeal">Best Menu</h5>
            </div>
            <h4>What do you like the Most ?</h4>
            <p>
              check the menu that is most liked and ordered by our loyal
              customers every day
            </p>
            <div className="flex gap-2">
              {" "}
              <PicoButton title="Food Menu" />
              <PicoButton title="Beverage Menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestMenu;
