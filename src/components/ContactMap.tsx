"use client";

import React from "react";

const ContactMap = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d28837.674036112927!2d68.342629!3d25.381059!3m2!1i1024!2i768!4f13.1!2m1!1sDawood%20Center%2C%20Autobhan%20road%20Hyderabad!5e0!3m2!1sen!2sus!4v1765002728602!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
