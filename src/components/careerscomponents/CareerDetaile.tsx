"use client";

import React, { useState, useMemo } from "react";
import {
  User,
  Mail,
  Phone,
  Upload,
  CheckCircle,
  XCircle,
  ArrowLeft,
  ArrowRight,
  FileText,
  Sparkles,
} from "lucide-react";

// --- Validation Utilities ---
const validateField = (name: string, value: string) => {
  if (!value.trim()) return "This field is required.";
  switch (name) {
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Please enter a valid email address.";
    case "phone":
      return /^[+0-9\s()-]{7,20}$/.test(value) ? "" : "Invalid phone number.";
    default:
      return "";
  }
};

// --- Success Modal ---
const SuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white p-12 rounded-[40px] shadow-2xl max-w-md w-full text-center border border-slate-100">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-emerald-500 w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-3">All Set!</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Your application has been received. Our team typically reviews
          submissions within 48 hours.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95"
        >
          Return to Careers
        </button>
      </div>
    </div>
  );
};

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });
  const [fieldErrors, setFieldErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: "",
  });
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      setFieldErrors({
        ...fieldErrors,
        [name]: file ? "" : "Resume upload is required.",
      });
    } else {
      setFormData({ ...formData, [name]: value });
      setFieldErrors({ ...fieldErrors, [name]: validateField(name, value) });
    }
  };

  const handleNext = () => {
    const errors = {
      firstName: validateField("firstName", formData.firstName),
      lastName: validateField("lastName", formData.lastName),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      resume: "",
    };
    setFieldErrors(errors);
    if (!Object.values(errors).some((e) => e !== "")) setStep(2);
  };

  const getInputFieldClasses = (fieldName: string) => {
    const error = fieldErrors[fieldName as keyof typeof fieldErrors];
    const value = formData[fieldName as keyof typeof formData];
    let base =
      "w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none text-base transition-all duration-300 ";
    if (error)
      return (
        base +
        "border-red-100 bg-red-50/30 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
      );
    if (value)
      return (
        base +
        "border-emerald-100 bg-emerald-50/30 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
      );
    return (
      base +
      "border-slate-100 bg-slate-50/50 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
    );
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <SuccessModal
        isOpen={isSubmitted}
        onClose={() => setIsSubmitted(false)}
      />

      {/* Hero Header */}
      <div className="pt-20 pb-12 text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles size={14} /> Join the Evolution
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
          Apply for Position
        </h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          Fill in your details below to start your journey with us.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-24">
        {/* Progress Tracker */}
        <div className="flex items-center justify-between mb-12 px-4">
          {[1, 2].map((i) => (
            <React.Fragment key={i}>
              <div
                className={`flex items-center gap-3 ${
                  step === i ? "opacity-100" : "opacity-40"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= i
                      ? "bg-slate-900 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step > i ? <CheckCircle size={18} /> : i}
                </div>
                <span className="font-bold text-sm uppercase tracking-widest">
                  {i === 1 ? "Personal" : "Documents"}
                </span>
              </div>
              {i === 1 && <div className="h-0.5 grow mx-6 bg-slate-100" />}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] border border-slate-50">
          {step === 1 ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">
                    First Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      name="firstName"
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={getInputFieldClasses("firstName")}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">
                    Last Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={getInputFieldClasses("lastName")}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={getInputFieldClasses("email")}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={getInputFieldClasses("phone")}
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-black transition-all group"
              >
                Continue to Documents{" "}
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="text-center pb-4">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-slate-100">
                  <FileText className="text-slate-400" size={32} />
                </div>
                <h3 className="text-xl font-bold">Upload your Resume</h3>
                <p className="text-slate-500 text-sm">PDF, DOCX up to 10MB</p>
              </div>

              <label className="relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-200 rounded-4xl bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer overflow-hidden">
                <input
                  type="file"
                  name="resume"
                  className="hidden"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />
                <Upload className="text-slate-400 mb-2" size={32} />
                <span className="text-sm font-bold text-slate-600">
                  {formData.resume
                    ? formData.resume.name
                    : "Click to select or drag and drop"}
                </span>
                {fieldErrors.resume && (
                  <p className="text-red-500 text-xs mt-2">
                    {fieldErrors.resume}
                  </p>
                )}
              </label>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-600 font-bold py-5 rounded-2xl hover:bg-slate-200 transition-all"
                >
                  <ArrowLeft size={20} /> Back
                </button>
                <button
                  onClick={() => setIsSubmitted(true)}
                  className="flex-2 bg-slate-900 text-white font-bold py-5 rounded-2xl hover:bg-black transition-all shadow-xl shadow-slate-200"
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
