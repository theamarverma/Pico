"use client";

import { useState } from "react";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
export default function MenuDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center text-lg md:text-md"
      >
        Menus <MdArrowDropDown className="h-8 w-8 md:h-6 md:w-6" />
      </button>

      {open && (
        <ul className="absolute bottom-10 left-0 z-50 mt-2 w-36 rounded-md border bg-picoTeal shadow-md md:-bottom-28">
          <li className="border-b-2 border-white p-2">
            <Link
              href={"/Food_Menu_PICO.pdf"}
              target="_blank"
              className="block px-4 text-white hover:bg-picoJuteBrown"
            >
              Food Menu
            </Link>
          </li>
          <li className="border-b-2 border-white p-2">
            <Link
              href={"/Beverage_Menu_PICO.pdf"}
              target="_blank"
              className="block px-4 text-white hover:bg-picoJuteBrown"
            >
              Beverage Menu
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
