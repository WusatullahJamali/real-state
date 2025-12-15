"use client";

import React, { useState } from "react";

/* ============================
   Types
============================ */
interface FormFieldProps {
  id: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  placeholder?: string;
  isRequired?: boolean;
}

/* ============================
   Reusable Form Field
============================ */
const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  icon: Icon,
  placeholder = "",
  isRequired = true,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          className="w-full pl-3 pr-10 py-3 border border-red-500 rounded-lg outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-gray-800 transition"
        />

        {Icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-500" />
          </div>
        )}
      </div>

      {isRequired && (
        <p className="mt-1 text-xs text-red-500 italic">
          This is a required field
        </p>
      )}
    </div>
  );
};

/* ============================
   Icons
============================ */
const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-4.148a2 2 0 01-1.956-1.365L9 16.5"
    />
  </svg>
);

const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

/* ============================
   Main Component
============================ */
const ContactAgentForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <section className="min-h-screen flex items-center bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        {/* Image */}
        <div className="lg:w-1/2 w-full rounded-3xl overflow-hidden">
          <img
            src="/local1.png"
            alt="Local agent illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="lg:w-1/2 w-full bg-white p-10 rounded-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Let Realtor.com help you find a local real estate agent
          </h1>

          <p className="text-gray-600 mb-6">
            A local expert can answer questions, give guidance, and schedule home tours.
          </p>

          <form>
            {/* Help Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What do you need help with? <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                required
                className="w-full border border-red-500 rounded-lg py-3 px-4 focus:ring-1 focus:ring-red-600 focus:border-red-600"
              >
                <option value="" disabled>
                  Select option
                </option>
                <option value="buy">I want to Buy</option>
                <option value="sell">I want to Sell</option>
                <option value="both">Both Buying and Selling</option>
              </select>
            </div>

            <FormField
              id="zip-code"
              label="Where are you buying or selling?"
              icon={MapPinIcon}
              placeholder="Enter ZIP code"
            />

            <FormField id="full-name" label="Full Name" icon={UserIcon} />
            <FormField id="email" label="Email" type="email" icon={MailIcon} />
            <FormField id="phone" label="Phone" type="tel" icon={PhoneIcon} />

            <button className="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition shadow-md">
              Connect with an Agent
            </button>

            <p className="text-xs text-black pt-4 leading-relaxed">
              By proceeding, you consent to receive calls and texts at the number you provided,
              including marketing by autodialer and prerecorded voice, and email from Realtor.com and{" "}
              <a href="#" className="underline hover:text-gray-700">
                others
              </a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactAgentForm;
