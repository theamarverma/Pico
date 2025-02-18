import Image from "next/image";
import React from "react";
import "../../styles/home.css";
const HeaderBanner = () => {
  return (
    <div>
      <div className="mx-20 w-[790px]">
        <h1>Welcome to PICO – Where Pizza Meets Coffee</h1>

        <div className="flex gap-2">
          <div className="mt-3 w-2/3 border-t-2 border-borderGray"></div>
          <p>
            your cozy corner for speciality coffee and hand-tossed
            Neapolitan-style pizzas. Good vibes, great food, —what more could
            you ask for?
          </p>
        </div>
      </div>
      <div className="parent flex h-[540px] w-screen flex-col justify-end bg-[url('/images/headerBg.png')] bg-cover bg-center">
        {/* /----------------absolute card---------------- */}
        <div className="absolute right-24 top-1/4">
          <div className="parent flex h-[433px] w-[344px] flex-col justify-start bg-[url('/images/homepage/card.png')] bg-cover bg-center">
            <div className="mt-6 flex flex-col items-center justify-center">
              <h4 className="text-white">Cafe Timings:</h4>
              <h4 className="text-white">11am - 11 pm</h4>
              <div className="contact-details text-white">
                <p>Phone: +1 (555) 555-5555</p>
                <p>Email: info@pico.com</p>
                <p>Whatsapp Us</p>
                <p>Address: 123 Main Street, Anytown USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-20 mb-8 flex gap-4 text-white">
          <div className="pizza flex gap-4">
            <Image
              alt="pizza"
              src={"/images/homepage/pizza.svg"}
              width={80}
              height={60}
            />
            <h1 className="text-white">Pizza Sold: 5000+</h1>
          </div>
          <div className="border-l-4 border-picoJuteBrown text-picoJuteBrown"></div>
          <div className="coffee flex gap-4">
            <h1 className="text-white">Coffee Sold: 6000+</h1>
            <Image
              alt="coffee"
              src={"/images/homepage/cup.svg"}
              width={80}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
