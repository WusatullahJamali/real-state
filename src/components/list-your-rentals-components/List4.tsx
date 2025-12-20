"use client";

import React from "react";
import Image from "next/image";

const List4 = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Get direct applications from partner listing sites
          </h1>

          <p className="text-black text-lg max-w-xl">
            Enable the option for renters to apply directly from your listing on
            Avail partner sites to help applicants complete their applications
            nearly 2x faster than standard leads.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/list4.png"
            alt="Get direct rental applications"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default List4;
