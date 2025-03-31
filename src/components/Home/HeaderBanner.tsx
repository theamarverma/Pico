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
          <p className="text-picoTextGray md:text-lg">
            your cozy corner for specialty coffee and hand-tossed
            Neapolitan-style pizzas. Good vibes, great food, —what more could
            you ask for?
          </p>
        </div>
      </div>

      {/* Laptop screen */}
      <div className="parent relative hidden w-full flex-col justify-end bg-[url('/images/homepage/header.png')] bg-cover bg-center md:flex md:h-[540px]">
        {/* gradient */}
        <div className="absolute inset-x-0 h-36 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />

        {/* /----------------popup card---------------- */}
        <div className="absolute -top-1/3 right-16">
          <div className="parent flex h-[400px] w-[340px] flex-col justify-start bg-[url('/images/homepage/card.png')] bg-cover bg-center">
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
      </div>
      {/* Mobile screen */}

      <div className="relative h-[220px] md:hidden">
        <Image
          src={"/images/homepage/header.png"}
          alt="header"
          width={1000}
          height={540}
        />
        <div className="absolute top-1/4 mx-10 w-[80%]">
          <div className="flex flex-col justify-start bg-picoTeal">
            <div className="mx-4 my-4 flex flex-col gap-2">
              <div className="mt-2 space-y-4 text-white">
                <Link
                  href={"tel:+918240912328"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <IoCallOutline color="white" />
                  <div className="text-sm">+91 8240912328</div>
                </Link>
                <Link
                  href={"mailto:info@picokolkata.com"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <CiMail color="white" />
                  <div className="text-sm underline">info@picokolkata.com</div>
                </Link>

                <Link
                  href={"https://maps.app.goo.gl/xoLKckSdLAG375uFA"}
                  target="_blank"
                  className="flex gap-2 text-sm underline hover:cursor-pointer"
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
