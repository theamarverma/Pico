import Image from "next/image";
import Link from "next/link"; // Import Link
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      {/* Desktop */}
      <footer className="hidden bg-bgGray md:block">
        <div className="grid grid-cols-6 items-center justify-center gap-10 px-4 pt-10 md:items-start md:px-10">
          <div className="col-span-1">
            <Image
              className="h-[160px] w-[160px]"
              alt=""
              src={"/logo.png"}
              width={160}
              height={160}
            />
          </div>
          <div className="col-span-2 leading-[38px] text-[#6B6B6B]">
            At PICO, we bring together two timeless favorites—authentic
            wood-fired pizza and artisanal coffee—to create an unforgettable
            dining experience. Nestled in South Kolkata near Vivekananda Park,
            our space is designed for those who appreciate great flavors, cozy
            bes, and meaningful conversations.
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-10">
            {" "}
            {/* Services */}
            <div className="col-span-1" id="">
              <h2>Services</h2>
              <ul className="text-picoTextGray">
                <li>
                  <Link
                    className="flex gap-2"
                    href={"/Food_Menu_PICO.pdf"}
                    target="_blank"
                  >
                    <Image
                      src={"/images/footer/pizza.png"}
                      alt="Food Menu"
                      width={20}
                      height={20}
                    />{" "}
                    Food Menu
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1"
                    href={"/Beverage_Menu_PICO.pdf"}
                    target="_blank"
                  >
                    <Image
                      src={"/images/footer/drink.png"}
                      alt="Beverage Menu"
                      width={20}
                      height={20}
                    />
                    Beverage Menu
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social Links */}
            <div className="">
              <h2>Social Links</h2>
              <ul className="footer-ul">
                <li>
                  <Link
                    href={"https://www.instagram.com/picokolkata?utm_source=qr"}
                    target="_blank"
                    className="flex gap-2"
                  >
                    <Image
                      src={"/images/footer/insta.png"}
                      alt="Instagram"
                      width={25}
                      height={25}
                    />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.facebook.com/picokolkata?rdid=u3TXcx2doZstFLZm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E8eWu1vKy%2F"
                    }
                    target="_blank"
                    className="flex gap-2"
                  >
                    <Image
                      src={"/images/footer/fb.png"}
                      alt="Facebook"
                      width={25}
                      height={25}
                    />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.tripadvisor.com/Restaurant_Review-g304558-d28051666-Reviews-Pico_Pizzeria_Coffee_Bar-Kolkata_Calcutta_Kolkata_District_West_Bengal.html"
                    target="_blank"
                    className="flex gap-2"
                  >
                    <FaTripadvisor size={24} className="text-black" />{" "}
                    Tripadvisor
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href={"https://wa.me/918240912328"}
                    target="_blank"
                    className="flex gap-2"
                  >
                    <FaWhatsapp size={24} className="text-black" />
                    Whatsapp
                  </Link>
                </li>
              </ul>
            </div>
            {/* Important Links */}
            <div>
              <h2>Important Links</h2>
              <ul className="footer-ul">
                <li>
                  <Link
                    target="_blank"
                    href="https://www.google.com/search?kgmid=/g/11vwyjrp3w&hl=en-IN&q=Pico+-+Pizzeria+%26+Coffee+Bar&shndl=30&shem=lcuae&source=sh/x/loc/osrp/m5/2&kgs=facea45e0b2316b4"
                    className="flex gap-2"
                  >
                    <Image
                      src={"/images/footer/google.png"}
                      alt="Google"
                      width={25}
                      height={20}
                    />
                    Google
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F903624%3Fsource%3Dsharing"
                    }
                    target="_blank"
                    className="flex gap-2"
                  >
                    <Image
                      src={"/images/footer/dineout.png"}
                      alt="Zomato"
                      width={25}
                      height={20}
                    />
                    Swiggy Dineout
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://zomato.onelink.me/xqzv/xk1kk43l"
                    target="_blank"
                    className="flex gap-2"
                  >
                    <Image
                      src={"/images/footer/dineout.png"}
                      alt="Zomato"
                      width={25}
                      height={20}
                    />
                    Zomato Dine in
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.swiggy.com/menu/962185?source=sharing
"
                    target="_blank"
                    className="flex gap-2"
                  >
                    <Image
                      src={"/images/footer/motorbike.png"}
                      alt="swiggy"
                      width={25}
                      height={20}
                    />
                    Swiggy Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://link.zomato.com/xqzv/rshare?id=82122273633b9531 "
                    target="_blank"
                    className="flex gap-2"
                  >
                    <Image
                      src={"/images/footer/motorbike.png"}
                      alt="Zomato"
                      width={25}
                      height={20}
                    />
                    Zomato Delivery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Order Online */}
        <div className="mt-6 inline-flex w-full justify-end gap-4 pb-8 pr-20">
          <h2 className="self-end text-xl font-semibold">Order Online</h2>
          <Link
            href={"https://zomato.onelink.me/xqzv/xk1kk43l"}
            target="_blank"
          >
            <Image
              src={"/images/zomato.png"}
              alt="Zomato Logo"
              height={64}
              width={64}
            />
          </Link>
          <Link
            href={
              "https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F903624%3Fsource%3Dsharing"
            }
            target="_blank"
          >
            <Image
              src={"/images/swiggy.png"}
              alt="Swiggy Logo"
              height={64}
              width={64}
            />
          </Link>
        </div>

        {/* copyright label */}
        <div className="mt-6 flex h-16 items-center justify-center gap-2 bg-picoTeal font-light text-white">
          <span className="text-picoOrange">© PICO</span> all rights reserved
        </div>
      </footer>
      {/* Mobile */}
      <footer className="md:hidden">
        <div>
          <div className="flex flex-col space-y-4 px-10 py-6">
            <div className="flex items-center justify-center">
              <Image
                className="h-[160px] w-[160px]"
                alt=""
                src={"/footer_logo.png"}
                width={160}
                height={160}
              />
            </div>
            <div className="flex-grow leading-[38px] text-[#6B6B6B]">
              At PICO, we bring together two timeless favorites—authentic
              wood-fired pizza and artisanal coffee—to create an unforgettable
              dining experience. Nestled in South Kolkata near Vivekananda Park,
              our space is designed for those who appreciate great flavors, cozy
              bes, and meaningful conversations.
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Services */}
              <div>
                <h2>Services</h2>
                <ul className="text-picoTextGray">
                  <li>
                    <Link
                      href={"/Food_Menu_PICO.pdf"}
                      target="_blank"
                      className="flex gap-1"
                    >
                      <Image
                        src={"/images/footer/pizza.png"}
                        alt="Food Menu"
                        width={20}
                        height={20}
                      />
                      Food Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/Beverage_Menu_PICO.pdf"}
                      className="flex gap-1"
                      target="_blank"
                    >
                      <Image
                        src={"/images/footer/drink.png"}
                        alt="Beverage Menu"
                        width={20}
                        height={20}
                      />
                      Beverage Menu
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Social Links */}
              <div className="">
                <h2>Social Links</h2>
                <ul className="footer-ul">
                  <li>
                    <Link
                      href={
                        "https://www.instagram.com/picokolkata?utm_source=qr"
                      }
                      target="_blank"
                      className="flex gap-2"
                    >
                      <Image
                        src={"/images/footer/insta.png"}
                        alt="Instagram"
                        width={25}
                        height={25}
                      />
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "https://www.facebook.com/picokolkata?rdid=u3TXcx2doZstFLZm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E8eWu1vKy%2F"
                      }
                      target="_blank"
                      className="flex gap-2"
                    >
                      <Image
                        src={"/images/footer/fb.png"}
                        alt="Facebook"
                        width={25}
                        height={25}
                      />
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.tripadvisor.com/Restaurant_Review-g304558-d28051666-Reviews-Pico_Pizzeria_Coffee_Bar-Kolkata_Calcutta_Kolkata_District_West_Bengal.html"
                      target="_blank"
                      className="flex gap-2"
                    >
                      <FaTripadvisor size={24} className="text-black" />{" "}
                      Tripadvisor
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      href={"https://wa.me/918240912328"}
                      target="_blank"
                      className="flex gap-2"
                    >
                      <FaWhatsapp size={24} className="text-black" />
                      Whatsapp
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex">
              {" "}
              {/* Important Links */}
              <div className="w-[80%]">
                <h2>Important Links</h2>
                <ul className="footer-ul">
                  <li>
                    <Link
                      target="_blank"
                      href="https://www.google.com/search?kgmid=/g/11vwyjrp3w&hl=en-IN&q=Pico+-+Pizzeria+%26+Coffee+Bar&shndl=30&shem=lcuae&source=sh/x/loc/osrp/m5/2&kgs=facea45e0b2316b4"
                      className="flex gap-2"
                    >
                      <Image
                        src={"/images/footer/google.png"}
                        alt="Google"
                        width={25}
                        height={20}
                      />
                      Google
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F903624%3Fsource%3Dsharing"
                      }
                      target="_blank"
                      className="flex gap-2"
                    >
                      <Image
                        src={"/images/footer/dineout.png"}
                        alt="Zomato"
                        width={25}
                        height={20}
                      />
                      Swiggy Dineout
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://zomato.onelink.me/xqzv/xk1kk43l"
                      target="_blank"
                      className="flex gap-2"
                    >
                      <Image
                        src={"/images/footer/dineout.png"}
                        alt="Zomato"
                        width={25}
                        height={20}
                      />
                      Zomato Dine in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.swiggy.com/menu/962185?source=sharing
"
                      target="_blank"
                      className="flex gap-2"
                    >
                      <Image
                        src={"/images/footer/motorbike.png"}
                        alt="swiggy"
                        width={25}
                        height={20}
                      />
                      Swiggy Delivery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://link.zomato.com/xqzv/rshare?id=82122273633b9531 "
                      target="_blank"
                      className="flex gap-2"
                    >
                      <Image
                        src={"/images/footer/motorbike.png"}
                        alt="Zomato"
                        width={25}
                        height={20}
                      />
                      Zomato Delivery
                    </Link>
                  </li>
                </ul>
              </div>
              {/* order online */}
              <div className="flex flex-col">
                <h2 className="font-semibold">Order Online</h2>
                <div className="mt-4 flex gap-2">
                  <Link
                    href={"https://zomato.onelink.me/xqzv/xk1kk43l"}
                    target="_blank"
                  >
                    <Image
                      src={"/images/zomato.png"}
                      alt="Zomato Logo"
                      height={64}
                      width={64}
                    />
                  </Link>
                  <Link
                    href={
                      "https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F903624%3Fsource%3Dsharing"
                    }
                    target="_blank"
                  >
                    <Image
                      src={"/images/swiggy.png"}
                      alt="Swiggy Logo"
                      height={64}
                      width={64}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright label */}
        <div className="flex h-16 items-center justify-center gap-2 bg-picoTeal font-light text-white">
          <span className="text-picoOrange">© PICO</span> all rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
