"use client";

import React from "react";
import Image from "next/image";

const List1 = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/m1.png"
            alt="Build and publish your rental listing"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* RIGHT: TEXT */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Build and publish your rental listing effortlessly
          </h1>

          <p className="text-black text-lg max-w-xl">
            Avail offers step-by-step guidance and resources to help you build your
            listing with confidence. Publish your listing to 20 of the most popular
            listing syndication sites with a single click.
          </p>
        </div>

      </div>
    </section>
  );
};

export default List1;
