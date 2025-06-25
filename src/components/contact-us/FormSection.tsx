import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import CancellationForm from "./CancellationForm";

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
      <div className="flex flex-col gap-10 md:mx-20 md:flex-row md:py-12">
        <div className="left text-center md:w-[40%] md:text-start">
          <h1 className="text-xl text-picoJuteBrown md:text-header">
            {" "}
            Secure your table-
          </h1>{" "}
          <h3 className="text-xl italic text-picoTeal md:text-header">
            {" "}
            for an unforgettable experience
          </h3>
          <ul style={listStyle}>
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
        </div>
        <div className="right mx-4 flex-grow">
          <ContactForm />
        </div>
      </div>

      {/* Cancellation Form */}
      <div className="flex flex-col gap-10 md:mx-20 md:flex-row md:py-12">
        <div className="left text-center md:w-[40%] md:text-start"></div>
        <div className="right mx-4 flex-grow">
          <CancellationForm />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
