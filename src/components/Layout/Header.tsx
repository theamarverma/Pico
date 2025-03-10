"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const MobileNavLinks = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Link href="/" className="block text-lg hover:text-picoTeal">
        Home
      </Link>
      <Link href="/about-us" className="block text-lg hover:text-picoTeal">
        About Us
      </Link>
      <Link href="/gallery" className="block text-lg hover:text-picoTeal">
        Gallery
      </Link>
      <Link href="/contact-us" className="block text-lg hover:text-picoTeal">
        Contact Us
      </Link>
    </div>
  );
};

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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="fixed z-[100000] w-full">
      {/* Desktop Header */}
      <div className="hidden border-b border-picoJuteBrown bg-bgCream md:block">
        <div className="flex justify-between px-20 py-4">
          <Link href="/" className="flex items-center justify-center">
            <Image src="/logo.png" alt="logo" width={80} height={80} />
          </Link>
          <Nav />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex items-center justify-between border-picoJuteBrown bg-bgCream px-4 py-4 md:hidden">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </Link>
        <button
          onClick={() => setMobileNavOpen(true)}
          className="text-picoTeal"
        >
          <GiHamburgerMenu className="h-6 w-6" />
          <span className="sr-only">Open navigation menu</span>
        </button>
      </div>

      {/* Mobile Navigation Backdrop */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-[100001] bg-black bg-opacity-50"
          onClick={() => setMobileNavOpen(false)}
        ></div>
      )}

      {/* Mobile Navigation Panel (slides in from the left) */}
      <div
        className={`fixed left-0 top-0 z-[100002] h-full w-64 transform bg-bgCream shadow-lg transition-transform duration-300 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setMobileNavOpen(false)}
            className="mb-4 text-picoTeal"
          >
            <IoMdClose className="h-6 w-6" />
            <span className="sr-only">Close navigation menu</span>
          </button>
          <MobileNavLinks />
        </div>
      </div>
    </div>
  );
};

export default Header;
