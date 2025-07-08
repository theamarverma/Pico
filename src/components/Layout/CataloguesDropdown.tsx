"use client";

import { useState } from "react";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
export default function CatalogueDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 text-lg md:text-md"
      >
        Catalogues <MdArrowDropDown className="h-8 w-8 md:h-6 md:w-6" />
      </button>

      {open && (
        <ul className="absolute bottom-10 left-0 z-50 mt-2 w-48 rounded-md border bg-picoTeal shadow-md md:-bottom-44">
          <li className="border-b-2 border-white p-2">
            <Link
              href={"/catalogues/PICOBREWS.pdf"}
              target="_blank"
              className="block px-4 text-white hover:bg-picoJuteBrown"
            >
              Pico Brews
            </Link>
          </li>
          <li className="border-b-2 border-white p-2">
            <Link
              href={"/catalogues/PICOCOFFEE.pdf"}
              target="_blank"
              className="block px-4 text-white hover:bg-picoJuteBrown"
            >
              Pico Coffee
            </Link>
          </li>
          <li className="border-b-2 border-white p-2">
            <Link
              href={"/catalogues/PICOPEOPLES.pdf"}
              target="_blank"
              className="block px-4 text-white hover:bg-picoJuteBrown"
            >
              Pico Peoples
            </Link>
          </li>
          <li className="border-b-2 border-white p-2">
            <Link
              href={"/catalogues/PIcoPizza.pdf"}
              target="_blank"
              className="block px-4 text-white hover:bg-picoJuteBrown"
            >
              Pico Pizza
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
