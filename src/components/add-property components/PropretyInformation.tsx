"use client";

import React, { useState } from "react";
import { HousePlus, FileImage, FileVideo, FileText, X } from "lucide-react";

const PropretyInformation = () => {
  // --- PREVIEWS ---
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [floorPlanPreview, setFloorPlanPreview] = useState<string | null>(null);
  const [pdfFileName, setPdfFileName] = useState<string | null>(null);

  // --- HANDLERS ---
  const handleImageUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleVideoUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) setVideoPreview(URL.createObjectURL(file));
  };

  const handleFloorPlanUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) setFloorPlanPreview(URL.createObjectURL(file));
  };

  const handlePdfUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) setPdfFileName(file.name);
  };

  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* LEFT — ICON */}
        <div className="flex justify-center md:justify-start items-start pt-10">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-7 rounded-full shadow-xl">
             <HousePlus size={80} />
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Property Information</h2>
            <p className="text-gray-500 mt-1">All Information</p>
          </div>

          {/* CARD 1: BASIC DETAILS */}
          <div className="p-6 border rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Details</h3>

            {/* Property Name */}
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-gray-700">Property Name*</label>
              <input
                type="text"
                placeholder="Type property name"
                className="mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Description*</label>
              <textarea
                placeholder="Write description here"
                rows={4}
                className="mt-1 px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* CARD 2: IMAGE UPLOAD */}
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Image</h3>

            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-700 file:bg-yellow-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none file:cursor-pointer"
            />

            <p className="text-xs text-gray-500 mt-2">Max 4 MB — JPG or PNG</p>

            {/* IMAGE PREVIEW */}
            {imagePreview && (
              <div className="relative mt-4">
                <img
                  src={imagePreview}
                  className="w-40 h-40 rounded-xl object-cover border shadow"
                />
                <button
                  onClick={() => setImagePreview(null)}
                  className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>

          {/* CARD 3: VIDEO UPLOAD */}
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Video</h3>

            <input
              type="file"
              accept="video/mp4, video/webm"
              onChange={handleVideoUpload}
              className="block w-full text-sm text-gray-700 file:bg-yellow-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none file:cursor-pointer"
            />

            <p className="text-xs text-gray-500 mt-2">Max 10 MB — MP4 or WEBM</p>

            {/* VIDEO PREVIEW */}
            {videoPreview && (
              <div className="relative mt-4">
                <video
                  src={videoPreview}
                  controls
                  className="w-60 rounded-xl border shadow"
                />
                <button
                  onClick={() => setVideoPreview(null)}
                  className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>

          {/* CARD 4: FLOOR PLAN */}
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Floor Plan</h3>

            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFloorPlanUpload}
              className="block w-full text-sm text-gray-700 file:bg-yellow-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none file:cursor-pointer"
            />

            {/* FLOOR PLAN PREVIEW */}
            {floorPlanPreview && (
              <div className="relative mt-4">
                <img
                  src={floorPlanPreview}
                  className="w-40 h-40 object-cover border rounded-xl shadow"
                />
                <button
                  onClick={() => setFloorPlanPreview(null)}
                  className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>

          {/* CARD 5: PDF UPLOAD */}
          <div className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload PDF</h3>

            <input
              type="file"
              accept="application/pdf"
              onChange={handlePdfUpload}
              className="block w-full text-sm text-gray-700 file:bg-yellow-600 file:text-white file:px-4 file:py-2 file:rounded-md file:border-none file:cursor-pointer"
            />

            {/* PDF PREVIEW */}
            {pdfFileName && (
              <div className="flex items-center gap-3 mt-4 bg-gray-100 p-3 rounded-xl border">
                <FileText className="text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">{pdfFileName}</span>
                <button
                  onClick={() => setPdfFileName(null)}
                  className="ml-auto bg-black/60 text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropretyInformation;
