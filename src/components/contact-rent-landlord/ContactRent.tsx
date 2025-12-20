"use client";
import React, { useState } from "react";
import Image from "next/image";

// Property Image
const PropertyImagePlaceholder = () => (
  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
    <Image
      src="/l1.jpg"
      alt="Property"
      width={150}
      height={150}
      className="w-full h-full object-cover"
    />
    <span className="absolute top-3 left-3 bg-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
      For Rent
    </span>
  </div>
);

const ContactRent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "scheduleViewing",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryOptions = [
    { value: "scheduleVisit", label: "Schedule a Visit" },
    { value: "askQuestion", label: "Ask Questions" },
    // { value: "requestApplication", label: "Request Application Form" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const propertyDetails = {
    address: "123 Main St, Anytown, USA",
    price: "$1,500 / month",
    details: "2 Beds • 1 Bath • 1,050 sqft",
  };

  return (
    <section className="bg-white py-20 px-4 text-black">
      <div className="max-w-5xl mx-auto bg-white p-8 lg:p-12">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#1a2940]">
            Contact the Landlord
          </h1>
          <p className="text-yellow-600 font-medium mt-1">
            Inquire about this property
          </p>
          <p className="text-black mt-3 max-w-xl">
            Fill out the form below to reach the landlord directly. Serious
            inquiries only — responses are typically quick.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* FORM */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center bg-green-50 border border-green-200 rounded-xl p-10">
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                  🎉 Message Sent!
                </h2>
                <p className="text-gray-600 mb-6">
                  The landlord will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-yellow-600 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
                    required
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 555 123 4567"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
                  />
                </div>

                {/* INQUIRY TYPE */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
                  >
                    {inquiryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell the landlord about yourself or your questions..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
                    required
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 cursor-pointer text-white font-semibold py-4 rounded-xl transition shadow-md"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-yellow-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* PROPERTY CARD */}
          <div className="lg:col-span-1 space-y-5">
            <PropertyImagePlaceholder />

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2">
              <p className="text-sm text-gray-500">{propertyDetails.address}</p>

              <h3 className="text-2xl font-bold text-gray-900">
                {propertyDetails.price}
              </h3>

              <p className="text-gray-600 text-sm">
                {propertyDetails.details}
              </p>

              <a
                href="#"
                className="inline-block text-yellow-600 font-medium text-sm hover:underline pt-2"
              >
                View full listing →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactRent;
