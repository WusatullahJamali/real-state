"use client";
import React from "react";
import { Calculator } from "lucide-react";

const Resources = () => {
  return (
    <div className="w-full py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Resources</h1>

      <div className="flex items-center gap-3 text-gray-700">
        <Calculator className="w-7 h-7 text-blue-600" />
        <p className="text-lg font-medium">
          How much can I make selling my house?
        </p>
      </div>
    </div>
  );
};

export default Resources;
