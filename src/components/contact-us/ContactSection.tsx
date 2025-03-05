"use client";
import React from "react";
import "../../styles/map.css";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicPicoMap = dynamic(
  () => import("@/components/contact-us/PicoMap"),
  {
    ssr: false,
  },
);

const ContactSection = () => {
  return (
    <div>
      <div className="mx-20 flex gap-20">
        <div className="flex flex-col justify-around">
          <div>
            {" "}
            <h3 className="text-lg font-bold uppercase text-picoTeal">
              Get in Touch
            </h3>
            <h1 className="text-subheader uppercase">Visit Pico</h1>
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
        <div className="w-[70%]">
          <DynamicPicoMap />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
