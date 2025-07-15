import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import CancellationForm from "./CancellationForm";
import Image from "next/image";

const FormSection = () => {
  const listStyle = {
    listStyleImage: 'url("/images/contact/pizza.png")',
    marginLeft: "20px",
    display: "flex",
    gap: "10px",
    fontWeight: "bold",
  };
  return (
    <div>
      <div className="mx-6 flex flex-col gap-10 md:mx-20 md:flex-row md:pt-12">
        <div className="left md:w-[40%] md:text-start">
          <h1 className="text-center text-xl text-picoJuteBrown md:text-start md:text-header">
            {" "}
            Secure your table-
          </h1>{" "}
          <h3 className="text-center text-lg italic text-picoTeal md:text-start md:text-header">
            {" "}
            for an unforgettable experience
          </h3>
          <ul style={listStyle} className="my-6 flex-col">
            <li className="pl-2">
              {" "}
              No bookings available on weekends and{" "}
              <div className="italic text-picoTeal underline">
                <Link href={"/public-holidays"}>Public Holidays.</Link>
              </div>
            </li>{" "}
            <li className="pl-2">
              Reservations can be made up to one week in advance.
            </li>{" "}
            <li className="pl-2">
              Minimum of 1 guest, maximum of 6 guests per booking.
            </li>{" "}
            <li className="pl-2">
              Tables will be held for 15 minutes from the booking time.
            </li>{" "}
            <li className="pl-2"> Maximum table time is 1.5 hours.</li>
          </ul>
          {/* online dineouts */}
          {/* desktop */}
          <div className="hidden md:block">
            {" "}
            <h1 className="text-center text-xl text-picoJuteBrown md:text-start md:text-header">
              {" "}
              You can also reserve-
            </h1>{" "}
            <h3 className="text-center text-lg italic text-picoTeal md:text-start md:text-header">
              {" "}
              your table online!
            </h3>
          </div>
        </div>
        <div className="right mx-0 flex-grow md:mx-4">
          <ContactForm />
        </div>
      </div>

      {/* Cancellation Form */}
      <div className="flex flex-col gap-10 py-6 md:mx-20 md:flex-row md:py-6">
        <div className="left md:w-[40%] md:text-start">
          {/* Desktop only */}
          <div className="hidden gap-4 text-center md:flex">
            <Link
              href={
                "https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F903624%3Fsource%3Dsharing"
              }
              target="_blank"
            >
              <Image
                src={"/images/contact/swiggy.png"}
                alt="swiggy"
                height={100}
                width={100}
              />
            </Link>
            <Link
              href={"https://link.district.in/DSTRKT/drestpage?res_id=21234347"}
              target="_blank"
            >
              <Image
                src={"/images/contact/zomato.png"}
                alt="zomato"
                height={100}
                width={100}
              />
            </Link>
            <Link
              href={"https://link.district.in/DSTRKT/drestpage?res_id=21234347"}
              target="_blank"
              className="relative flex h-[100px] items-center justify-center"
            >
              <Image
                src={"/images/contact/district.png"}
                alt="District by Zomato"
                height={150}
                width={150}
                className=""
              />
            </Link>
          </div>

          {/* Mobile  */}

          <div className="md:hidden">
            <div className="mb-4">
              <h1 className="text-center text-xl text-picoTeal md:text-start md:text-header">
                {" "}
                You can also reserve-
              </h1>{" "}
              <h1 className="text-center text-lg text-picoTeal md:text-start md:text-header">
                {" "}
                your table online!
              </h1>
            </div>
            {/* dineouts */}
            <div className="mx-6 flex max-w-full justify-between">
              <Link
                href={
                  "https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F903624%3Fsource%3Dsharing"
                }
                target="_blank"
              >
                <Image
                  src={"/images/contact/swiggy.png"}
                  alt="swiggy"
                  height={70}
                  width={70}
                />
              </Link>
              <Link
                href={
                  "https://link.district.in/DSTRKT/drestpage?res_id=21234347"
                }
                target="_blank"
              >
                <Image
                  src={"/images/contact/zomato.png"}
                  alt="zomato"
                  height={70}
                  width={70}
                />
              </Link>
              <Link
                href={
                  "https://link.district.in/DSTRKT/drestpage?res_id=21234347"
                }
                target="_blank"
                className="relative flex h-[70px] items-center justify-center"
              >
                <Image
                  src={"/images/contact/district.png"}
                  alt="District by Zomato"
                  height={70}
                  width={150}
                  className=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="right mx-4 flex-grow">
          <CancellationForm />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
