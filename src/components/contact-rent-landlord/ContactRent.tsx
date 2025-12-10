"use client";
import React, { useState } from "react";

// Assuming you have a placeholder image or component for the property image
const PropertyImagePlaceholder = () => (
  <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
    {/* Replace with your actual Image component/source */}
    <img
      src="l1.jpg" // Placeholder image
      alt="Property"
      className="w-full h-full object-cover"
    />
  </div>
);

const ContactRent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "", // Used email instead of a separate viewing field
    phone: "",
    inquiryType: "scheduleViewing", // Default value
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Inquiry options for the dropdown
  const inquiryOptions = [
    { value: "scheduleViewing", label: "Schedule a Viewing" },
    { value: "askQuestion", label: "Ask a Question" },
    { value: "requestApplication", label: "Request Application Form" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Simulate API call success
    setIsSubmitted(true);
    // You might want to reset the form data after a few seconds or when the user navigates away
    // setFormData({ name: "", email: "", phone: "", inquiryType: "scheduleViewing", message: "" });
  };

  // --- Property Details (Static for this example) ---
  const propertyDetails = {
    address: "123 Main St, Anytown, USA",
    price: "$1,500/mo",
    details: "2 Bed / 1 Bath",
  };
  // ----------------------------------------------------

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-2xl border border-gray-100">
        
        {/* --- Header & Instructions --- */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Contact the Landlord
          </h1>
          <p className="text-lg text-yellow-600 mt-1 mb-4">
            Inquire about {propertyDetails.address}
          </p>
          <p className="text-sm text-gray-500 max-w-lg">
            Please use the form below for serious inquiries only. Your message will be sent directly to the property manager.
          </p>
        </div>

        {/* --- Main Content Area: Two Columns --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT COLUMN: The Contact Form (2/3 width) */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="py-12 text-center bg-green-50 rounded-lg border border-green-200">
                <p className="text-2xl font-semibold text-green-700 mb-2">
                  🎉 Message Sent Successfully!
                </p>
                <p className="text-gray-600">
                  The landlord has received your inquiry and will respond soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-yellow-600 hover:text-yellow-800 text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Full Name */}
                <div className="grid grid-cols-3 items-center">
                  <label htmlFor="fullName" className="text-gray-600 text-sm">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="col-span-2 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="grid grid-cols-3 items-center">
                  <label htmlFor="email" className="text-gray-600 text-sm">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="col-span-2 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="grid grid-cols-3 items-center">
                  <label htmlFor="phone" className="text-gray-600 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="col-span-2 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Inquiry Type (Dropdown) */}
                <div className="grid grid-cols-3 items-center">
                  <label htmlFor="inquiryType" className="text-gray-600 text-sm">Inquiry Type</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="col-span-2 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    {inquiryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="grid grid-cols-3 gap-y-2">
                  <label htmlFor="message" className="col-span-3 text-gray-600 text-sm lg:col-span-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell the landlord a little about yourself or your specific questions..."
                    rows={4}
                    className="col-span-3 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-yellow-600 text-white font-semibold py-3 rounded-md hover:bg-yellow-700 transition"
                >
                  Send Message
                </button>

                {/* Privacy Policy Link */}
                <p className="text-xs text-gray-500 text-center mt-1">
                  By clicking "Send Message", you agree to our <a href="#" className="text-yellow-600 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: Property Card (1/3 width) */}
          <div className="lg:col-span-1 border-l lg:pl-10 space-y-4">
            <PropertyImagePlaceholder />
            
            <p className="text-sm text-gray-500">{propertyDetails.address}</p>
            
            <h2 className="text-2xl font-bold text-gray-800">
              {propertyDetails.price}
            </h2>
            
            <p className="text-gray-600">{propertyDetails.details}</p>

            <a
              href="#"
              className="block text-yellow-600 hover:text-yellow-800 text-sm font-medium pt-2"
            >
              View Full Listing Details
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactRent;