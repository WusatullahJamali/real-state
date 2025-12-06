"use client";
import React, { useState } from "react";
import { Contact, X } from "lucide-react";

const ContactInformation = () => {
  const [socials, setSocials] = useState([{ platform: "", url: "" }]);

  const addMore = () => setSocials([...socials, { platform: "", url: "" }]);

  type Social = { platform: string; url: string };

const updateSocial = (index: number, field: keyof Social, value: string) => {
  const newSocials = [...socials];
  newSocials[index][field] = value;
  setSocials(newSocials);
};


  const removeSocial = (index: number) => {
    const newSocials = socials.filter((_, i) => i !== index);
    setSocials(newSocials);
  };

  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT ICON */}
         <div className="flex justify-center md:justify-start items-start pt-10">
          <div className=" bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-full shadow-sm">
            <Contact size={80} className="text-white" />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
          <p className="text-gray-600">Contact Information</p>

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block font-semibold mb-2">Full Name*</label>
              <input
                type="text"
                placeholder="Daniel Scoot"
                className="w-full border rounded-lg p-3 shadow-sm"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="block font-semibold mb-2">Designation*</label>
              <input
                type="text"
                placeholder="Property Manager"
                className="w-full border rounded-lg p-3 shadow-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2">Email Address*</label>
              <input
                type="email"
                placeholder="info@gmail.com"
                className="w-full border rounded-lg p-3 shadow-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold mb-2">Phone Number*</label>
              <input
                type="text"
                placeholder="+123 456 7890"
                className="w-full border rounded-lg p-3 shadow-sm"
              />
            </div>

            {/* Social Network */}
            <div>
              <label className="block font-semibold mb-2">Social Network</label>

              {socials.map((item, index) => (
  <div key={index} className="mb-4 flex gap-3 items-center">

    {/* Platform Dropdown */}
    <select
      value={item.platform || ""}
      onChange={(e) => updateSocial(index, "platform", e.target.value)}
      className="w-1/3 border rounded-lg p-3 shadow-sm bg-white"
    >
      <option value="">Select Platform</option>
      <option value="Facebook">Facebook</option>
      <option value="Twitter">Twitter</option>
      <option value="LinkedIn">LinkedIn</option>
      <option value="Instagram">Instagram</option>
    </select>

    {/* URL Input */}
    <input
      type="text"
      value={item.url || ""}
      placeholder="https://example.com"
      onChange={(e) => updateSocial(index, "url", e.target.value)}
      className="flex-1 border rounded-lg p-3 shadow-sm"
    />

    {/* Remove Button */}
    <button
      type="button"
      onClick={() => removeSocial(index)}
      className="bg-red-500 hover:bg-red-600 p-2 rounded-full text-white"
    >
      <X size={16} />
    </button>
  </div>
))}


              <button
                type="button"
                onClick={addMore}
                className="text-yellow-600 font-semibold hover:underline"
              >
                Add More +
              </button>
            </div>
          </div>

          {/* Post Property Button */}
          <button
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded shadow-lg transition w-full md:w-auto"
          >
            Post Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
