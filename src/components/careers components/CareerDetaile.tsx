"use client";

import React, { useState, useMemo } from "react";
import { FaUser, FaEnvelope, FaPhone, FaUpload, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

// --- Validation Utilities ---
const validateField = (name: string, value: string) => {
  if (!value.trim()) return "This field is required.";
  
  switch (name) {
    case 'email':
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(value) ? "" : "Please enter a valid email address.";
    case 'phone':
      // Allows for various formats including + and spaces
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
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6 animate-bounce" />
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

  // State to track individual field errors for inline feedback
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
      
      // Real-time validation for non-file inputs
      const error = validateField(name, value);
      setFieldErrors({ ...fieldErrors, [name]: error });
    }
  };

  const handleNext = () => {
    // Check all fields for Step 1
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
    
    // Validate Resume
    if (!formData.resume) {
        newErrors.resume = "Please upload your resume (PDF/DOCX).";
        hasError = true;
    } else if (formData.resume.size > 10 * 1024 * 1024) { // Max 10MB
        newErrors.resume = "File size exceeds the 10MB limit.";
        hasError = true;
    } else {
        newErrors.resume = "";
    }

    setFieldErrors(newErrors);

    if (!hasError) {
      // Simulate API submission
      setIsSubmitted(true);
      // Reset form (optional, could be done after closing modal)
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
    
    // Base classes
    let classes = "w-full pl-12 pr-4 py-4 rounded-2xl border-2 outline-none text-lg transition-all duration-300 shadow-sm focus:shadow-md";

    if (error) {
        // Error state
        classes += " border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100";
    } else if (value && value !== null && value !== "") {
        // Valid/Filled state
        classes += " border-green-500 focus:border-green-500 focus:ring-4 focus:ring-green-100";
    } else {
        // Default state
        classes += " border-gray-300 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100";
    }
    return classes;
  };
  
  const renderIcon = (name: string) => {
      const error = fieldErrors[name as keyof typeof fieldErrors];
      const value = formData[name as keyof typeof formData];
      
      if (error) {
          return <FaTimesCircle className="text-red-500 text-xl" />;
      }
      if (value && value !== null && value !== "") {
          return <FaCheckCircle className="text-green-500 text-xl" />;
      }
      
      switch(name) {
          case 'firstName':
          case 'lastName':
              return <FaUser className="text-yellow-500 text-xl" />;
          case 'email':
              return <FaEnvelope className="text-yellow-500 text-xl" />;
          case 'phone':
              return <FaPhone className="text-yellow-500 text-xl" />;
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
                  onBlur={handleChange} // Re-validate on blur for better UX
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
          
          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-10">
            <div className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-1 
                                ${step === 1 ? 'bg-yellow-500 text-gray-900' : 'bg-green-500 text-white'}`}>
                    1
                </div>
                <p className={`text-sm font-semibold ${step === 1 ? 'text-yellow-700' : 'text-gray-500'}`}>Contact Info</p>
            </div>
            <div className={`flex-grow h-1 mx-4 ${step >= 2 ? "bg-yellow-500" : "bg-gray-300"} transition-all duration-300`} />
            <div className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-1 
                                ${step === 2 ? 'bg-yellow-500 text-gray-900' : 'bg-gray-300 text-gray-500'}`}>
                    2
                </div>
                <p className={`text-sm font-semibold ${step === 2 ? 'text-yellow-700' : 'text-gray-500'}`}>Resume</p>
            </div>
          </div>
          
          {/* --- STEP 1: CONTACT INFORMATION --- */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-black border-b pb-4 mb-4">Personal Details</h3>
              
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                <InputField label="First Name" name="firstName" type="text" placeholder="John" />
                <InputField label="Last Name" name="lastName" type="text" placeholder="Doe" />
              </div>

              {/* Email */}
              <InputField label="Email Address" name="email" type="email" placeholder="john.doe@example.com" />

              {/* Phone */}
              <InputField label="Phone Number" name="phone" type="tel" placeholder="+92 300 1234567" />

              <button
                onClick={handleNext}
                disabled={!allFieldsValid}
                className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-black py-4 rounded-2xl shadow-2xl transition-all duration-300 transform text-xl tracking-wide cursor-pointer mt-4 flex items-center justify-center gap-3 group
                          ${allFieldsValid ? "hover:from-yellow-500 hover:to-yellow-600 hover:scale-[1.01] hover:shadow-3xl" : "opacity-60 cursor-not-allowed"}`}
              >
                NEXT STEP <IoArrowForward className="text-2xl transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}

          {/* --- STEP 2: RESUME UPLOAD --- */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-black border-b pb-4 mb-4">Upload Resume / CV</h3>
              
              {/* Resume Upload */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-sm">Resume / CV</label>
                
                <div 
                    className={`relative border-2 border-dashed rounded-2xl p-8 bg-yellow-50 hover:bg-yellow-100 transition-all duration-300 cursor-pointer group 
                                ${fieldErrors.resume ? 'border-red-500' : 'border-yellow-400'}`}
                >
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-center pointer-events-none">
                    <FaUpload className="text-5xl mb-3 text-yellow-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <p className={`text-gray-900 font-bold text-lg mb-1 ${formData.resume ? 'text-green-700' : ''}`}>
                      {formData.resume ? formData.resume.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-gray-600 text-sm font-semibold">PDF, DOC, DOCX (Max 10MB)</p>
                  </div>
                </div>
                
                {/* File Management */}
                {formData.resume && (
                    <div className="flex justify-between items-center mt-2 p-3 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-sm font-medium text-green-800 flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" /> Uploaded: **{formData.resume.name}**
                        </p>
                        <button
                            onClick={() => {
                                setFormData({ ...formData, resume: null });
                                setFieldErrors({ ...fieldErrors, resume: "Resume upload is required." });
                            }}
                            type="button"
                            className="text-xs text-red-500 hover:text-red-700 font-bold transition-colors"
                        >
                            Clear File
                        </button>
                    </div>
                )}
                
                {fieldErrors.resume && (
                    <p className="text-red-500 text-xs mt-1 font-semibold pl-2">
                        {fieldErrors.resume}
                    </p>
                )}
                
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] text-lg shadow-md"
                >
                  <IoArrowBack /> Back
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={!formData.resume || fieldErrors.resume !== ""}
                  className={`flex items-center gap-3 bg-yellow-500 text-black font-black px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 transform text-lg 
                            ${(!formData.resume || fieldErrors.resume !== "") 
                              ? "opacity-60 cursor-not-allowed" 
                              : "hover:from-green-600 hover:to-green-700 hover:scale-[1.05] hover:shadow-green-300/50"}`}
                >
                  SUBMIT APPLICATION <IoArrowForward />
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
          className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.05] text-sm border border-gray-300"
        >
          <IoArrowBack className="text-base" />
          BACK TO CAREERS
        </button>
      </div>
    </div>
  );
}