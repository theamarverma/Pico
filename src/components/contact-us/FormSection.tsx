import React from "react";
import ContactForm from "./ContactForm";

const FormSection = () => {
  return (
    <div>
      <div className="mx-20 grid grid-cols-2 py-12">
        <div className="left">
          <h2 className="text-picoTeal">
            {" "}
            Crafted with love, served with passion.
          </h2>{" "}
          <h2 className="text-picoJuteBrown"> Come taste the magic!</h2>
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
