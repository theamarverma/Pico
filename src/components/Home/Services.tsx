import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="img grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/images/homepage/services/coffee_beans.png"}
            alt="coffee beans"
            width={400}
            height={400}
          />
          <h1 className="mt-3 text-lg">Excellent Ingredients</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          {" "}
          <Image
            src={"/images/homepage/services/food.png"}
            alt="coffee beans"
            width={400}
            height={400}
          />
          <h1 className="mt-3 text-lg"> Made By Professional</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/images/homepage/services/service.png"}
            alt="coffee beans"
            width={400}
            height={400}
          />
          <h1 className="mt-3 text-lg"> With The best Service</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
