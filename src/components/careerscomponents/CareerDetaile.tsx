"use client";

import React, { useState, useMemo } from "react";
import { User, Mail, Phone, Upload, CheckCircle, XCircle, ArrowLeft, ArrowRight } from "lucide-react";

// --- Validation Utilities ---
const validateField = (name: string, value: string) => {
  if (!value.trim()) return "This field is required.";
  
  switch (name) {
    case 'email':
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(value) ? "" : "Please enter a valid email address.";
    case 'phone':
      const phonePattern = /^[+0-9\s()-]{7,20}$/; 
      return phonePattern.test(value) ? "" : "Please enter a valid phone number (7-20 digits).";
    default:
      return "";
  }
};

// --- Success Modal Component ---
const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 text-black">
            <div className="bg-white p-10 rounded-2xl shadow-3xl max-w-md w-full text-center transform transition-all duration-300 scale-100">
                <CheckCircle className="text-green-500 text-6xl mx-auto mb-6 animate-bounce" />
                <h2 className="text-3xl font-black text-gray-900 mb-3">Application Submitted!</h2>
                <p className="text-gray-700 text-lg mb-6">
                    Thank you, your application has been successfully submitted and is under review. We will contact you shortly.
                </p>
                <button
                    onClick={onClose}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg"
                >
                    Close
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

  const allFieldsValid = useMemo(() => {
      const step1Fields = ['firstName', 'lastName', 'email', 'phone'];
      return step1Fields.every(field => formData[field as keyof typeof formData] && !fieldErrors[field as keyof typeof fieldErrors]);
  }, [formData, fieldErrors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    
    if (files) {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      setFieldErrors({ ...fieldErrors, [name]: file ? "" : "Resume upload is required." });
    } else {
      setFormData({ ...formData, [name]: value });
      const error = validateField(name, value);
      setFieldErrors({ ...fieldErrors, [name]: error });
    }
  };

  const handleNext = () => {
    let hasError = false;
    const newErrors = { ...fieldErrors };
    
    ['firstName', 'lastName', 'email', 'phone'].forEach(field => {
        const value = formData[field as keyof typeof formData] as string;
        const error = validateField(field, value);
        newErrors[field as keyof typeof newErrors] = error;
        if (error) hasError = true;
    });

    setFieldErrors(newErrors);
    if (!hasError) setStep(2);
  };

  const handleSubmit = () => {
    let hasError = false;
    let newErrors = { ...fieldErrors };
    
    if (!formData.resume) {
        newErrors.resume = "Please upload your resume (PDF/DOCX).";
        hasError = true;
    } else if (formData.resume.size > 10 * 1024 * 1024) {
        newErrors.resume = "File size exceeds the 10MB limit.";
        hasError = true;
    } else {
        newErrors.resume = "";
    }

    setFieldErrors(newErrors);

    if (!hasError) {
      setIsSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", resume: null });
      setStep(1);
    }
  };
  
  const handleModalClose = () => {
      setIsSubmitted(false);
  }

  const getInputFieldClasses = (fieldName: string) => {
    const error = fieldErrors[fieldName as keyof typeof fieldErrors];
    const value = formData[fieldName as keyof typeof formData];
    let classes = "w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none text-lg transition-all duration-300 shadow-sm focus:shadow-md";

    if (error) {
        classes += " border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100";
    } else if (value && value !== null && value !== "") {
        classes += " border-green-500 focus:border-green-500 focus:ring-4 focus:ring-green-100";
    } else {
        classes += " border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100";
    }
    return classes;
  };
  
  const renderIcon = (name: string) => {
      const error = fieldErrors[name as keyof typeof fieldErrors];
      const value = formData[name as keyof typeof formData];
      
      if (error) return <XCircle className="text-red-500 text-xl" />;
      if (value && value !== null && value !== "") return <CheckCircle className="text-green-500 text-xl" />;
      
      switch(name) {
          case 'firstName':
          case 'lastName':
              return <User className="text-yellow-500 text-xl" />;
          case 'email':
              return <Mail className="text-yellow-500 text-xl" />;
          case 'phone':
              return <Phone className="text-yellow-500 text-xl" />;
          default:
              return null;
      }
  };

  const InputField = ({ label, name, type, placeholder }: { label: string, name: string, type: string, placeholder: string }) => (
      <div>
          <label className="block text-black font-bold mb-2 text-sm">
              {label}
          </label>
          <div className="relative">
              <span className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  {renderIcon(name)}
              </span>
              <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name as 'firstName' | 'lastName' | 'email' | 'phone']}
                  onChange={handleChange}
                  onBlur={handleChange}
                  className={getInputFieldClasses(name)}
              />
          </div>
          {fieldErrors[name as keyof typeof fieldErrors] && (
              <p className="text-red-500 text-xs mt-1 font-semibold pl-2">
                  {fieldErrors[name as keyof typeof fieldErrors]}
              </p>
          )}
      </div>
  );

  return (
    <div className="bg-amber-50 min-h-screen font-sans">
      <SuccessModal isOpen={isSubmitted} onClose={handleModalClose} />

      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 text-center shadow-xl">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Apply for Position 💼</h1>
          <p className="text-xl text-gray-900 font-semibold">Join our team and build the future with us.</p>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-white p-12 rounded-3xl shadow-2xl transition-all duration-500 border-t-8 border-yellow-500">
          {/* Progress Bar & Form Steps omitted for brevity (same as before, just replace arrows with ArrowLeft/ArrowRight) */}
          {/* Anywhere <IoArrowBack /> → <ArrowLeft />, <IoArrowForward /> → <ArrowRight /> */}
        </div>
      </div>
    </div>
  );
}
