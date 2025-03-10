import React from "react";
import ContactForm from "./ContactForm";

const FormSection = () => {
  return (
    <div>
      <div className="mx-20 flex gap-10 py-12">
        <div className="left w-[40%]">
          <h1 className="text-header text-picoTeal">
            {" "}
            Crafted with love, served with passion.
          </h1>{" "}
          <h1 className="text-header text-picoJuteBrown">
            {" "}
            Come taste the magic!
          </h1>
        </div>
        <div className="right flex-grow">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
