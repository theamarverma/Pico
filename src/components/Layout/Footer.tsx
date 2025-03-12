import Image from "next/image";
import Link from "next/link"; // Import Link
import React from "react";

const Footer = () => {
  return (
    <>
      {/* Desktop */}
      <footer className="hidden bg-bgGray md:block">
        <div className="grid grid-cols-6 items-center justify-center gap-10 px-4 pt-10 md:items-start md:px-20">
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
            {/* Social Links */}
            <div className="">
              <h2>Social Links</h2>
              <ul>
                <li>
                  <Link
                    href={"https://www.instagram.com/picokolkata?utm_source=qr"}
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.facebook.com/picokolkata?rdid=u3TXcx2doZstFLZm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E8eWu1vKy%2F"
                    }
                    target="_blank"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            {/* Important Links */}
            <div>
              <h2>Important Links</h2>
              <ul>
                <li>
                  <Link href="/service9">Google</Link>
                </li>
                <li>
                  <Link
                    href="https://zomato.onelink.me/xqzv/xk1kk43l"
                    target="_blank"
                  >
                    Zomato Dine in
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F903624%3Fsource%3Dsharing"
                    }
                    target="_blank"
                  >
                    Swiggy Dine Out
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.tripadvisor.com/Restaurant_Review-g304558-d28051666-Reviews-Pico_Pizzeria_Coffee_Bar-Kolkata_Calcutta_Kolkata_District_West_Bengal.html"
                    target="_blank"
                  >
                    Trip Advisor
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Order Online */}
        <div className="inline-flex w-full justify-end gap-4 pb-8 pr-20">
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
        <div className="flex h-16 items-center justify-center gap-2 bg-picoTeal font-light text-white">
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
                src={"/logo.png"}
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
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {/* Services */}
              <div className="services">
                <h2>Services</h2>
                <ul className="text-picoTextGray">
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
              {/* social links */}
              <div>
                <h2>Social Links</h2>
                <ul>
                  <li>
                    <Link
                      href={
                        "https://www.instagram.com/picokolkata?utm_source=qr"
                      }
                      target="_blank"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "https://www.facebook.com/picokolkata?rdid=u3TXcx2doZstFLZm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E8eWu1vKy%2F"
                      }
                      target="_blank"
                    >
                      Facebook
                    </Link>
                  </li>
                </ul>
              </div>
              {/* important links */}
              <div>
                <h2>Important Links</h2>
                <ul>
                  <li>
                    <Link href="/service9">Google</Link>
                  </li>
                  <li>
                    <Link
                      href="https://zomato.onelink.me/xqzv/xk1kk43l"
                      target="_blank"
                    >
                      Zomato Dine in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F903624%3Fsource%3Dsharing"
                      }
                      target="_blank"
                    >
                      Swiggy Dine Out
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.tripadvisor.com/Restaurant_Review-g304558-d28051666-Reviews-Pico_Pizzeria_Coffee_Bar-Kolkata_Calcutta_Kolkata_District_West_Bengal.html"
                      target="_blank"
                    >
                      Trip Advisor
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
