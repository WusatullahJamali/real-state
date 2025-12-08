"use client";

import React, { useState } from "react";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });

  const [errors, setErrors] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateStep1 = () => {
    const { firstName, lastName, email, phone } = formData;
    if (!firstName || !lastName || !email || !phone) {
      setErrors("All fields are required.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrors("Please enter a valid email address.");
      return false;
    }
    const phonePattern = /^[+0-9\s()-]{7,20}$/;
    if (!phonePattern.test(phone)) {
      setErrors("Please enter a valid phone number.");
      return false;
    }
    setErrors("");
    return true;
  };

  const validateStep2 = () => {
    if (!formData.resume) {
      setErrors("Please upload your resume.");
      return false;
    }
    setErrors("");
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    if (validateStep2()) {
      alert("Application submitted successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", resume: null });
      setStep(1);
    }
  };

  return (
    <div className="bg-amber-50 min-h-screen font-sans">

      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 text-center shadow-xl">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Apply for Position</h1>
          <p className="text-xl text-gray-900 font-semibold">Join our team and make a difference</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-t-8 border-yellow-500">
          
          {/* Progress Bar */}
          <div className="flex mb-8">
            <div className={`flex-1 h-2 rounded-full ${step >= 1 ? "bg-yellow-500" : "bg-gray-300"} transition-all duration-300`} />
            <div className="mx-2"></div>
            <div className={`flex-1 h-2 rounded-full ${step >= 2 ? "bg-yellow-500" : "bg-gray-300"} transition-all duration-300`} />
          </div>

          {errors && (
            <div className="mb-6 text-center text-red-600 font-semibold bg-red-100 rounded-xl py-2">
              {errors}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["firstName", "lastName"].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-900 font-bold mb-2 text-sm">
                      {field === "firstName" ? "First Name" : "Last Name"}
                    </label>
                    <div className="relative">
                      <span className="absolute top-4 left-4 text-yellow-500 text-xl">👤</span>
                      <input
                        type="text"
                        name={field}
                        placeholder={field === "firstName" ? "John" : "Doe"}
                        value={formData[field as "firstName" | "lastName"]}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 outline-none text-lg transition-all duration-300 shadow-sm focus:shadow-md"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm">Email Address</label>
                <div className="relative">
                  <span className="absolute top-4 left-4 text-yellow-500 text-xl">📧</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 outline-none text-lg transition-all duration-300 shadow-sm focus:shadow-md"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm">Phone Number</label>
                <div className="relative">
                  <span className="absolute top-4 left-4 text-yellow-500 text-xl">📱</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 outline-none text-lg transition-all duration-300 shadow-sm focus:shadow-md"
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-black py-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl text-xl tracking-wide cursor-pointer mt-4 flex items-center justify-center gap-3 group"
              >
                NEXT <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              {/* Resume Upload */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm">Resume / CV</label>
                <div className="relative border-2 border-dashed border-yellow-400 rounded-2xl p-8 bg-yellow-50 hover:bg-yellow-100 transition-all duration-300 cursor-pointer group">
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-center pointer-events-none">
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">📎</div>
                    <p className="text-gray-900 font-bold text-lg mb-1">
                      {formData.resume ? formData.resume.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-gray-600 text-sm font-semibold">PDF, DOC, DOCX (Max 10MB)</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
                >
                  ← Back
                </button>

                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-black px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl text-lg"
                >
                  SUBMIT → 
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Back to Careers */}
      <div className="text-center pb-20 px-6">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
        >
          <span className="text-xl transition-transform group-hover:-translate-x-1">←</span>
          <span className="text-lg">BACK TO CAREERS</span>
        </button>
      </div>
    </div>
  );
}
