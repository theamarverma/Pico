"use client";
import React from "react";
// import "../../styles/map.css";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";

import Link from "next/link";

// const DynamicPicoMap = dynamic(
//   () => import("@/components/contact-us/PicoMap"),
//   {
//     ssr: false,
//   },
// );

const ContactSection = () => {
  return (
    <div>
      <div className="mx-4 flex flex-col gap-8 md:mx-20 md:flex-row md:gap-20">
        <div className="flex flex-col gap-4 md:justify-around">
          <div>
            {" "}
            <h3 className="text-lg uppercase text-picoTeal md:font-bold">
              Get in Touch
            </h3>
            <h1 className="text-xl uppercase md:text-subheader">Visit Pico</h1>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-picoJuteBrown">
                <IoCallOutline color="white" size={32} />
              </div>
              <div className="flex flex-col justify-center">
                {" "}
                <div className="text-sm text-black"> Phone Number</div>
                <div>+91 8240912328</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-picoJuteBrown">
                <IoMailOutline color="white" size={32} />
              </div>
              <div className="flex flex-col justify-center">
                {" "}
                <div className="text-sm"> Email</div>
                <div>info@picokolkata.com</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-picoJuteBrown">
                <LuClock9 color="white" size={32} />
              </div>
              <div className="flex flex-col justify-center">
                {" "}
                <div className="text-sm"> Opening Hours</div>
                <div>Everyday from 11 AM - 11 PM</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-picoJuteBrown">
                <IoLocationOutline color="white" size={32} />
              </div>
              <div className="flex flex-col justify-center">
                {" "}
                <div className="text-sm"> Map Street</div>
                <Link
                  href={"https://maps.app.goo.gl/xoLKckSdLAG375uFA"}
                  target="_blank"
                  className="w-[1/2] underline hover:cursor-pointer hover:underline"
                >
                  559, Lake Rd, Southern
                  <br /> Avenue , Kolkata - 700029 <br /> (Opp. Sabyasachi
                  Showroom)
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Google Map */}
        <div className="md:w-[70%]">
          <div className="h-[400px] w-full overflow-hidden bg-none md:h-[900px]">
            <iframe
              className="h-[400px] w-full md:h-[900px]"
              src="https://maps.google.com/maps?width=626&height=900&hl=en&q=pico cafe kolkata&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
            <a
              href="https://embed-googlemap.com"
              className="absolute bottom-0 right-0 text-xs" //Optional styling, adjust as needed.
            >
              {/* Pico - Pizzeria & Coffee Bar <br /> পিকো - পিজ্জেরিয়া & কফি বার */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
