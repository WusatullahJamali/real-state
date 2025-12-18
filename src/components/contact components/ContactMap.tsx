"use client";

import React from "react";

const ContactMap = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-6 md:mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Visit Our Office
          </h2>
          <p className="mt-2 text-black text-sm md:text-base">
            Baghdad, Iraq
          </p>
        </div>

        {/* Map Container */}
        <div className="relative group rounded-2xl overflow-hidden transition-all duration-500  hover:-translate-y-1">
          {/* Overlay Border Glow */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-black/10 transition"></div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213393.01538966986!2d44.19109134784831!3d33.3118642006585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2sBaghdad%2C%20Baghdad%20Governorate%2C%20Iraq!5e0!3m2!1sen!2s!4v1766038225244!5m2!1sen!2s"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[320px] md:h-[480px] border-0"
          />

          {/* Optional Bottom Gradient for polish */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
