"use client";

import React from "react";

const ContactMap = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-md">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11477.236805874003!2d44.340000!3d33.312000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155832e5d531c0b7%3A0x0!2zMzPCsDIwJzUzLjAiTiA0NMKwMjEnNTguMCJF!5e0!3m2!1sen!2sus!4v1765000000000!5m2!1sen!2sus"
  width="100%"
  height="450"
 
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>
    </section>
  );
};

export default ContactMap;
