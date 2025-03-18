import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex items-center gap-10">
      <Link
        href="/"
        className="group relative mt-2 inline-block hover:text-picoTeal"
      >
        Home
        <span className="absolute -bottom-2 left-1/2 hidden h-[2px] w-0 -translate-x-1/2 transform bg-picoTeal transition-all duration-300 group-hover:flex group-hover:w-[40px] group-hover:items-center group-hover:justify-center md:block"></span>
      </Link>

      <Link
        href="/about-us"
        className="group relative mt-2 inline-block hover:text-picoTeal"
      >
        About Us
        <span className="absolute -bottom-2 left-1/2 hidden h-[2px] w-0 -translate-x-1/2 transform bg-picoTeal transition-all duration-300 group-hover:flex group-hover:w-[40px] group-hover:items-center group-hover:justify-center md:block"></span>
      </Link>

      <Link
        href="/gallery"
        className="group relative mt-2 inline-block hover:text-picoTeal"
      >
        Gallery
        <span className="absolute -bottom-2 left-1/2 hidden h-[2px] w-0 -translate-x-1/2 transform bg-picoTeal transition-all duration-300 group-hover:flex group-hover:w-[40px] group-hover:items-center group-hover:justify-center md:block"></span>
      </Link>

      <Link
        href="/contact-us"
        className="group relative mt-2 inline-block hover:text-picoTeal"
      >
        Contact Us
        <span className="absolute -bottom-2 left-1/2 hidden h-[2px] w-0 -translate-x-1/2 transform bg-picoTeal transition-all duration-300 group-hover:flex group-hover:w-[40px] group-hover:items-center group-hover:justify-center md:block"></span>
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div className="fixed z-[100000] w-full">
      <div className="hidden border-b border-picoJuteBrown bg-bgCream md:block">
        <div className="flex justify-between px-20 py-4">
          <Link href="/" className="flex items-center justify-center">
            <Image
              className=""
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
          <Nav />
        </div>
      </div>
      {/* mobile nav */}
      <div className="md:hidden">
        <div className="fixed inset-0 z-[100000] bg-bgCream"></div>
        <div className="fixed inset-0 z-[100000] flex items-center justify-center">
          <div className="w-full max-w-[400px] rounded-lg bg-bgCream p-10 shadow-xl">
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
