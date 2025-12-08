"use client";

import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Tracker: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-white pb-10 px-4">
      <div className="w-full max-w-7xl bg-white p-6 md:p-10 rounded-3xl">
        {/* Header Section */}
        <div className="text-center mb-6">
          <p className="text-sm font-extrabold uppercase text-yellow-500 tracking-widest">
            Data Insights
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-[#301366]">
            Track Your Home Value
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* LEFT — TEXT + BUTTON */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl">
              Our
              <span className="font-bold text-[#301366]">
                {" "}RealEstimate<sup>SM</sup>
              </span>{" "}
              data is sourced from multiple valuation providers independent of
              Realtor.com and trusted by the lending industry. Stay updated on
              how your property value changes over time using our advanced
              valuation tools integrated with leading data providers.
            </p>

           <Link
  href="/add-property"
  className={`
    relative flex items-center justify-center gap-2
    px-6 py-3 w-[220px] md:w-[250px] h-12
    font-semibold text-sm cursor-pointer overflow-hidden shadow-md transition-all duration-300
    active:translate-x-[5px] active:translate-y-[5px] group

    bg-yellow-500 text-black        /* MOBILE BUTTON FULL YELLOW */
    md:bg-gray-900 md:text-white    /* DESKTOP BUTTON BLACK */
  `}
  style={{ borderRadius: "0px" }}
>
  {/* Yellow hover animation (only on desktop) */}
  <span
    className="
      absolute w-[250px] h-[250px] bg-yellow-500 -left-full top-0
      transition-all duration-300
      group-hover:translate-x-full group-hover:-translate-y-1/2 group-hover:rounded-none
      hidden md:block   /* HIDE ON MOBILE */
    "
  ></span>

  <MoveRight className="w-4 h-4 relative z-10" />
  <span className="relative z-10">ADD PROPERTY</span>
</Link>

          </div>

          {/* RIGHT — Google Map iframe */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086317898177!2d-122.42324668468166!3d37.77492927975901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3edb7f35%3A0x2a4f548c54f4b557!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1701871738561!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "hue-rotate(190deg) saturate(1.2) brightness(0.95)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Home Value Map"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tracker;
