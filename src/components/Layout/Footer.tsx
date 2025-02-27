import Image from "next/image";
import Link from "next/link"; // Import Link
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bgGray">
      <div className="flex gap-10 px-20 py-10">
        <div>
          <Image
            className="h-[160px] w-[160px]"
            alt=""
            src={"/logo.png"}
            width={160}
            height={160}
          />
        </div>
        <div className="w-[20%] flex-grow text-xs text-[#6B6B6B]">
          At PICO, we bring together two timeless favorites—authentic wood-fired
          pizza and artisanal coffee—to create an unforgettable dining
          experience. Nestled in South Kolkata near Vivekananda Park, our space
          is designed for those who appreciate great flavors, cozy bes, and
          meaningful conversations.
        </div>
        <div id="footer-style">
          <h3>Services</h3>
          <ul>
            <li>
              <Link href="/service1">Coffee & Food</Link>
            </li>
            <li>
              <Link href="/service2">Merchandise</Link>
            </li>
            <li>
              <Link href="/service3">Birthday Party</Link>
            </li>
            <li>
              <Link href="/service4">Working Space</Link>
            </li>
          </ul>
        </div>
        <div id="footer-style">
          <h3>Social Links</h3>
          <ul>
            <li>
              <Link href="/service5">Instagram</Link>
            </li>
            <li>
              <Link href="/service6">Facebook</Link>
            </li>
          </ul>
        </div>
        <div id="footer-style">
          <h3>Important Links</h3>
          <ul>
            <li>
              <Link href="/service9">Google</Link>
            </li>
            <li>
              <Link href="/service10">Zomato Dine in</Link>
            </li>
            <li>
              <Link href="/service11">Swiggy Dine Out</Link>
            </li>
            <li>
              <Link href="/service12">Trip Advisor</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex h-16 items-center justify-center bg-picoTeal">
        © PICO all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
