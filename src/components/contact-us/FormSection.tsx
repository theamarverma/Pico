import React from "react";
import ContactForm from "./ContactForm";

const FormSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 md:mx-20 md:flex-row md:py-12">
        <div className="left text-center md:w-[40%] md:text-start">
          <h1 className="text-xl text-picoTeal md:text-header">
            {" "}
            Crafted with love, served with passion.
          </h1>{" "}
          <h1 className="text-xl text-picoJuteBrown md:text-header">
            {" "}
            Come taste the magic!
          </h1>
        </div>
        <div className="right mx-4 flex-grow">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
