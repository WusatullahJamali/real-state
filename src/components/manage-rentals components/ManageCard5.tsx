"use client";

import React from "react";
import Image from "next/image";

const ManageCard5 = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT CONTENT */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
            Secure Online Rent Collection
          </h1>

          <p className="text-black text-lg max-w-xl mb-6">
            Simplify payment collection by managing all rental payments, deposits, and fees through a single site. Feel secure knowing your payments are protected with Avail via Plaid and Stripe, while staying tax compliant.
          </p>

          <button className="inline-flex cursor-pointer items-center justify-center px-8 py-4 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-colors shadow-lg">
            Learn More
          </button>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/m5.png"
            alt="Secure Online Rent Collection Illustration"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default ManageCard5;
