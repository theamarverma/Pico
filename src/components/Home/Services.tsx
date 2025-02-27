import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="img mt-20 grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/images/homepage/services/coffee_beans.png"}
            alt="coffee beans"
            width={400}
            height={400}
          />
          Excellent Ingredients
        </div>
        <div className="flex flex-col items-center justify-center">
          {" "}
          <Image
            src={"/images/homepage/services/food.png"}
            alt="coffee beans"
            width={400}
            height={400}
          />
          Made By Professional
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/images/homepage/services/service.png"}
            alt="coffee beans"
            width={400}
            height={400}
          />
          With The best Service
        </div>
      </div>
    </div>
  );
};

export default Services;
