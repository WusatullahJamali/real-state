"use client";
import React from "react";
import Link from "next/link";

const FContact = () => {
  return (
    <section className="w-full py-16 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">

        {/* LEFT  */}
        <div className="flex flex-col justify-center">
          <p className="text-yellow-600 font-semibold mb-2">Contact us</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            If Any Inquiry, <br /> Feel Free To Ask Something
          </h1>

          <p className="mt-4 text-gray-600">
            Feel free to reach out with any questions, feedback, or inquiries
            you may have. Our team is always here to assist you.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">

            <div>
              <label className="block mb-1 font-medium">Your Name*</label>
              <input
                type="text"
                placeholder="Jackson Mile"
                className="w-full border px-4 py-3 rounded focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Your Email*</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full border px-4 py-3 rounded focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Type Your Question*</label>
              <textarea
                placeholder="Type Your Question..."
                rows={4}
                className="w-full border px-4 py-3 rounded focus:outline-none focus:ring focus:ring-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Submit Now
            </button>
          </form>

          {/* BACK BUTTON */}
          <div className="mt-6 text-center md:hidden">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FContact;
