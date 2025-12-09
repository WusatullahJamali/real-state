// components/PropertyStatus.tsx (Add New Property Design - White/Yellow Theme)

"use client"
import React, { useState } from 'react';
import { Home, MapPin, Camera, DollarSign, Send, Zap } from 'lucide-react';

// --- 1. Define TypeScript Interfaces for Component Props ---

interface InputProps {
  label: string;
  placeholder: string;
  type?: string; // Optional, defaults to 'text'
  className?: string; // Optional
}

interface SelectProps {
  label: string;
  options: string[]; // Array of strings for dropdown options
  className?: string; // Optional
}

interface TextAreaProps {
  label: string;
  placeholder: string;
  className?: string; // Optional
}

// --- Main Component ---
const PropertyStatus = () => {
  // State to manage the current step in the multi-step form (optional, for demo)
  const [step, setStep] = useState(1);

  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Helper function to render the form content based on the current step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <Home className="text-yellow-600" size={30} /> 1. Basic Property Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Property Title" placeholder="e.g., Luxury 3-Bedroom Villa" />
              <Select label="Property Type" options={['House', 'Apartment', 'Land', 'Commercial']} />
              <Input label="Size (sq ft)" placeholder="e.g., 2500" type="number" />
              <Input label="Bedrooms" placeholder="e.g., 3" type="number" />
              <Input label="Bathrooms" placeholder="e.g., 2" type="number" />
              <Select label="Listing Type" options={['For Sale', 'For Rent']} />
              <Input label="Price (USD)" placeholder="e.g., 450000" type="number" className="md:col-span-2" />
            </div>
            <TextArea label="Description" placeholder="A detailed description of the property features, neighborhood, and amenities." />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <MapPin className="text-yellow-600" size={30} /> 2. Location & Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Street Address" placeholder="123 Main Street" />
              <Input label="City" placeholder="Karachi" />
              <Input label="State/Province" placeholder="Sindh" />
              <Input label="Zip/Postal Code" placeholder="75500" />
            </div>
            <TextArea label="Google Maps Link/Embed" placeholder="Paste the exact location link for better visibility." />
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <Camera className="text-yellow-600" size={30} /> 3. Media & Images
            </h3>
            <p className="text-gray-600">Upload high-resolution images to showcase your property. The first image will be used as the thumbnail.</p>
            <div className="border-4 border-dashed border-yellow-300 rounded-lg p-10 text-center bg-yellow-50 hover:bg-yellow-100 transition duration-300 cursor-pointer">
              <Camera size={48} className="text-yellow-500 mx-auto mb-3" />
              <p className="font-semibold text-yellow-600">Drag and drop images here, or click to upload (Max 10)</p>
              <input type="file" multiple className="hidden" />
            </div>
            <Input label="Video Tour Link (Optional)" placeholder="YouTube or Vimeo URL" />
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <DollarSign className="text-yellow-600" size={30} /> 4. Pricing & Submission
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select label="Payment Frequency (Rent only)" options={['Monthly', 'Quarterly', 'Yearly']} />
              <Input label="Agency Fee (%)" placeholder="e.g., 5" type="number" />
            </div>
            <div className="p-4 border border-yellow-400 bg-yellow-50/50 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2 flex items-center gap-2"><Zap className="text-yellow-600" size={20} /> Final Checklist</p>
                <ul className="list-disc list-inside text-gray-600 text-sm ml-4">
                    <li>I confirm the information is accurate.</li>
                    <li>I have the legal right to list this property.</li>
                    <li>I agree to the Listing Terms & Conditions.</li>
                </ul>
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-yellow-600 text-white text-xl font-bold rounded-lg hover:bg-yellow-700 transition duration-300 shadow-lg hover:shadow-yellow-400/50"
            >
              <Send size={24} /> Submit Property Listing
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  // --- Components for Form Elements (Now with Explicit Types) ---
  const Input: React.FC<InputProps> = ({ label, placeholder, type = 'text', className = '' }) => (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
      />
    </div>
  );

  const Select: React.FC<SelectProps> = ({ label, options, className = '' }) => (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 bg-white"
      >
        <option value="" disabled>Select {label}</option>
        {options.map(option => <option key={option} value={option.toLowerCase().replace(' ', '-')}>{option}</option>)}
      </select>
    </div>
  );

  const TextArea: React.FC<TextAreaProps> = ({ label, placeholder, className = '' }) => (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
      />
    </div>
  );

  return (
    <div className="bg-white min-h-screen p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Header --- */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
            List Your Property
          </h1>
          <p className="text-xl text-yellow-600 font-medium">
            Take the first step towards a successful listing.
          </p>
        </header>

        {/* --- Step Indicator (Progress Bar) --- */}
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            {['Basic Info', 'Location', 'Media', 'Finalize'].map((title, index) => (
              <span key={index} className={`text-sm font-semibold ${step >= index + 1 ? 'text-yellow-700' : 'text-gray-400'}`}>
                {title}
              </span>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-yellow-500 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* --- Form Content --- */}
        <form className="bg-white p-8 border border-gray-200 rounded-xl shadow-lg">
          {renderStepContent()}
          
          {/* --- Navigation Buttons --- */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-150"
              >
                &larr; Previous
              </button>
            )}
            {step < totalSteps && (
              <button
                type="button"
                onClick={nextStep}
                className={`px-6 py-2 text-white font-semibold rounded-lg transition duration-150 ${step > 1 ? 'bg-yellow-500 hover:bg-yellow-600' : 'ml-auto bg-yellow-600 hover:bg-yellow-700'}`}
              >
                Next Step &rarr;
              </button>
            )}
            {/* Space Filler for alignment when on Step 1 */}
            {step === 1 && <div />} 
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyStatus;