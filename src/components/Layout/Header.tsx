import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex items-center gap-10">
      <Link
        href="/"
        className="hover:text-picoTeal group relative mt-2 inline-block"
      >
        Home
        <span className="bg-picoTeal absolute -bottom-2 left-1/2 hidden h-[2px] w-0 -translate-x-1/2 transform transition-all duration-300 group-hover:flex group-hover:w-[40px] group-hover:items-center group-hover:justify-center md:block"></span>
      </Link>

      <Link
        href="/about"
        className="hover:text-picoTeal group relative mt-2 inline-block"
      >
        About Us
        <span className="bg-picoTeal absolute -bottom-2 left-1/2 hidden h-[2px] w-0 -translate-x-1/2 transform transition-all duration-300 group-hover:flex group-hover:w-[40px] group-hover:items-center group-hover:justify-center md:block"></span>
      </Link>

      <Link
        href="/gallery"
        className="hover:text-picoTeal group relative mt-2 inline-block"
      >
        Gallery
        <span className="bg-picoTeal absolute -bottom-2 left-1/2 hidden h-[2px] w-0 -translate-x-1/2 transform transition-all duration-300 group-hover:flex group-hover:w-[40px] group-hover:items-center group-hover:justify-center md:block"></span>
      </Link>

      <Link
        href="/contact"
        className="hover:text-picoTeal group relative mt-2 inline-block"
      >
        Contact Us
        <span className="bg-picoTeal absolute -bottom-2 left-1/2 hidden h-[2px] w-0 -translate-x-1/2 transform transition-all duration-300 group-hover:flex group-hover:w-[40px] group-hover:items-center group-hover:justify-center md:block"></span>
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div className="border-picoJuteBrown bg-bgCream border-b">
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
  );
};

export default Header;
