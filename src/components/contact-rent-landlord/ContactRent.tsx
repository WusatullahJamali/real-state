"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, ChevronRight, CheckCircle2 } from "lucide-react";

// Property Image Component with Hover Effect
const PropertyImage = () => (
  <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
    <img
      src="/l1.jpg"
      alt="Property"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    <span className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
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
    { value: "scheduleViewing", label: "Schedule a Viewing" },
    { value: "askQuestion", label: "Ask a Question" },
    { value: "requestApplication", label: "Request Application Form" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const propertyDetails = {
    address: "123 Main St, Anytown, USA",
    price: "$1,500",
    period: "/ month",
    details: "2 Beds • 1 Bath • 1,050 sqft",
  };

  return (
    <section className="bg-gray-50/50 py-16 lg:py-24 px-4 min-h-screen text-black">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-12 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact the Landlord
          </h1>
          <div className="h-1.5 w-20 bg-yellow-500 mt-4 mb-6 mx-auto lg:mx-0 rounded-full" />
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Ready to make a move? Fill out the form below and the landlord will 
            get back to you, usually within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: FORM COLUMN */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Message Sent!</h2>
                <p className="text-slate-600 mb-8 max-w-xs">
                  Your inquiry has been delivered. Keep an eye on your inbox!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NAME */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full rounded-xl border-slate-200 border-2 px-4 py-3 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all placeholder:text-slate-400"
                      required
                    />
                  </div>

                  {/* PHONE */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full rounded-xl border-slate-200 border-2 px-4 py-3 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border-slate-200 border-2 px-4 py-3 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all"
                    required
                  />
                </div>

                {/* INQUIRY TYPE */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Inquiry Type</label>
                  <div className="relative">
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border-slate-200 border-2 px-4 py-3 bg-white focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all cursor-pointer"
                    >
                      {inquiryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronRight className="rotate-90 w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Your Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'm interested in this property because..."
                    className="w-full rounded-xl border-slate-200 border-2 px-4 py-3 focus:ring-4 focus:ring-yellow-500/10 focus:border-yellow-500 outline-none transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                >
                  Send Inquiry Now
                </button>

                <p className="text-[12px] text-slate-400 text-center leading-relaxed">
                  By clicking "Send Inquiry Now", you agree to our 
                  <a href="#" className="text-yellow-600 font-medium hover:underline ml-1">Terms of Service</a> and 
                  <a href="#" className="text-yellow-600 font-medium hover:underline ml-1">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT: PROPERTY CARD COLUMN */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-6">
            <PropertyImage />

            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60 border border-slate-100">
              <div className="flex items-center gap-2 mb-3 text-yellow-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">Prime Location</span>
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-2">
                {propertyDetails.price}
                <span className="text-lg font-normal text-slate-400">{propertyDetails.period}</span>
              </h3>
              
              <p className="text-slate-600 font-medium mb-6 flex items-center gap-2">
                {propertyDetails.address}
              </p>

              <div className="grid grid-cols-1 gap-4 py-6 border-y border-slate-100 mb-6">
                <div className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{propertyDetails.details}</span>
                </div>
              </div>

              <a
                href="#"
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-yellow-500 hover:text-black transition-all"
              >
                View Property Details
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* QUICK TRUST BADGE */}
            <div className="flex items-center gap-4 px-6 py-4 bg-yellow-50/50 rounded-2xl border border-blue-100">
              <div className="bg-yellow-500 p-2 rounded-full text-white">
                <Mail className="w-4 h-4" />
              </div>
              <p className="text-xs text-yellow-800 font-medium leading-tight">
                Verified Listing: This property has been manually checked for accuracy.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactRent;