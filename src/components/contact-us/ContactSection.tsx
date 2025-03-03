import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div>
      <div className="grid">
        <div className="left">
          Crafted with love, served with passion. Come taste the magic!
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
