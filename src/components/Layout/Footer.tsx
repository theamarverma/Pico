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
        <div className="w-[20%] flex-grow leading-[38px] text-[#6B6B6B]">
          At PICO, we bring together two timeless favorites—authentic wood-fired
          pizza and artisanal coffee—to create an unforgettable dining
          experience. Nestled in South Kolkata near Vivekananda Park, our space
          is designed for those who appreciate great flavors, cozy bes, and
          meaningful conversations.
        </div>
        <div id="">
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
        <div id="footer-style">
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
        <div id="footer-style">
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
      <div className="flex h-16 items-center justify-center gap-2 bg-picoTeal font-light text-white">
        <span className="text-picoOrange">© PICO</span> all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
