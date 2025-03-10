import Image from "next/image";
import React from "react";

import Link from "next/link";
import {
  IoLocationOutline,
  IoCallOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";

import { CiMail } from "react-icons/ci";
const HeaderBanner = () => {
  return (
    <div>
      <div className="mx-4 md:mx-20 md:w-[790px]">
        <h1 className="text-xl md:md:text-header">
          <span className="text-picoTeal"> Welcome to PICO –</span> <br />{" "}
          <span className="text-picoJuteBrown">Where Pizza Meets Coffee</span>
        </h1>

        <div className="flex gap-2 p-4">
          <div className="mt-3 w-1/2 border-t-2 border-borderGray md:w-2/4"></div>
          <p className="text-picoTextGray">
            your cozy corner for speciality coffee and hand-tossed
            Neapolitan-style pizzas. Good vibes, great food, —what more could
            you ask for?
          </p>
        </div>
      </div>

      {/* Laptop screen */}
      <div className="parent hidden w-full flex-col justify-end bg-[url('/images/homepage/header.png')] bg-cover bg-center md:flex md:h-[540px]">
        {/* /----------------popup card---------------- */}
        <div className="absolute right-16 top-1/4">
          <div className="parent flex h-[433px] w-[344px] flex-col justify-start bg-[url('/images/homepage/card.png')] bg-cover bg-center">
            <div className="mt-10 flex flex-col items-center justify-center">
              <h1 className="text-2xl text-white">Cafe Timings:</h1>
              <h3 className="text-2xl text-white">11am - 11 pm</h3>
              <div className="mt-6 space-y-4 text-white">
                <Link
                  href={"tel:+918240912328"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <IoCallOutline color="white" size={32} />
                  <div className="">+91 8240912328</div>
                </Link>
                <Link
                  href={"mailto:info@picokolkata.com"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <CiMail color="white" size={32} />
                  <div className="underline">info@picokolkata.com</div>
                </Link>
                <Link
                  href={"https://api.whatsapp.com/send?phone=+918240912328"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <IoLogoWhatsapp color="white" size={32} />
                  <div className="underline">+91 8240912328</div>
                </Link>

                <Link
                  href={"https://maps.app.goo.gl/xoLKckSdLAG375uFA"}
                  target="_blank"
                  className="flex gap-2 underline hover:cursor-pointer"
                >
                  <IoLocationOutline color="white" size={32} /> P,559, Lake Rd,
                  Southern
                  <br /> Avenue , Kolkata - 700029 <br /> (Opp. Sabyasachi
                  Showroom)
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Image content */}
        <div className="mx-20 mb-8 hidden justify-between gap-8 text-white md:flex">
          <div className="pizza flex gap-4">
            <Image
              alt="pizza"
              src={"/images/homepage/pizza.svg"}
              width={80}
              height={60}
            />
            <h1 className="text-xl text-white md:text-header">
              Pizza Sold: 5000+
            </h1>
          </div>
          <div className="rounded-xl border-l-8 border-picoJuteBrown text-picoJuteBrown"></div>
          <div className="coffee flex gap-4">
            <h1 className="text-xl text-white md:text-header">
              Coffee Sold: 6000+
            </h1>
            <Image
              alt="coffee"
              src={"/images/homepage/cup.svg"}
              width={80}
              height={60}
            />
          </div>
        </div>
      </div>
      {/* Mobile screen */}

      <div className="md:hidden">
        <Image
          src={"/images/homepage/header.png"}
          alt="header"
          width={1000}
          height={540}
        />
        <div className="top-1/4 mx-4">
          <div className="flex flex-col justify-start bg-picoTeal">
            <div className="mx-4 my-4 flex flex-col gap-2">
              <h1 className="text-sm text-white">PRODUCTS</h1>
              <p className="text-sm text-white">
                Overall we provide food and drinks as well as a comfortable
                place for you to relax
              </p>
              <div className="w-full border-t border-borderGray"></div>
              <div className="mt-6 space-y-4 text-white">
                <Link
                  href={"tel:+918240912328"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <IoCallOutline color="white" />
                  <div className="text-xs">+91 8240912328</div>
                </Link>
                <Link
                  href={"mailto:info@picokolkata.com"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <CiMail color="white" />
                  <div className="text-xs underline">info@picokolkata.com</div>
                </Link>

                <Link
                  href={"https://maps.app.goo.gl/xoLKckSdLAG375uFA"}
                  target="_blank"
                  className="flex gap-2 text-xs underline hover:cursor-pointer"
                >
                  <IoLocationOutline color="white" /> P,559, Lake Rd, Southern
                  <br /> Avenue , Kolkata - 700029 <br /> (Opp. Sabyasachi
                  Showroom)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
