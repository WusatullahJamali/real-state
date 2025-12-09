// components/TermsOfServices.tsx (Headings Yellow)

"use client";

import { Shield, Phone, Home, MessageSquare } from "lucide-react"; 
import Link from "next/link"; 
import React from 'react';

const TermsOfServices = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      text: "By accessing and using this platform (website, app, and services), you acknowledge and agree to be legally bound by these comprehensive Terms & Conditions.",
    },
    {
      title: "Use of the Service",
      text: "You agree to use the service strictly for lawful, permitted purposes, following all local, national, and international laws, rules, and policies. Misuse or disruption is prohibited.",
    },
    {
      title: "Mobile and Device Usage",
      text: "The service is designed for optimal access on all devices, including desktop and mobile. Data and messaging rates may apply based on your carrier agreement.",
    },
    {
      title: "Intellectual Property",
      text: "All content, including text, graphics, logos, and code, is the exclusive property of Modern Living and protected by copyright and intellectual property laws. Unauthorized reproduction or reuse is strictly prohibited.",
    },
    {
      title: "Changes to These Terms",
      text: "We reserve the sole right to modify, replace, or update any part of these Terms at our discretion. We will notify users of significant changes. Continued use constitutes acceptance of the new terms.",
    },
    {
      title: "Governing Law",
      text: "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where the company is headquartered, without regard to its conflict of law provisions.",
      isSection: true,
    },
  ];

  return (
    // Outer section with clean white background
    <section className="bg-white min-h-screen pt-12 pb-20 text-black mt-8">
      
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* --- Primary Header (H1 is Yellow) --- */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-600 mb-2">
          Terms and Conditions
        </h1>
        <p className="text-xl font-semibold uppercase tracking-wider text-gray-700 mb-10 border-b border-gray-200 pb-2">
          MODERN LIVING WEBSITE AND MOBILE APPLICATION TERMS AND CONDITIONS
        </p>

        {/* --- Two-Column Layout (Swapped Order) --- */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* === COLUMN 1: Sidebar (Left, 25% Width) === */}
          <div className="lg:w-1/4 space-y-8 order-2 lg:order-1"> 

            {/* Have a Question / FAQ Panel */}
            <div className="bg-white p-6 border-l-4 border-yellow-500"> 
              <h3 className="text-2xl font-extrabold text-gray-800 mb-4 flex items-center gap-2">
                <MessageSquare className="text-yellow-500" size={24} /> Have a Question?
              </h3>
              
              <p className="text-gray-700 mb-4">
                Visit our dedicated **FAQ page** for information regarding:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Property Listings & Sales Process</li>
                <li>Agent Commission & Fees</li>
                <li>Mortgage and Financing Options</li>
                <li>Privacy and Data Usage</li>
                <li>Press contacts & more</li>
              </ul>
              
              <Link
                href="/faq"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold w-full text-center px-6 py-3 mt-6 rounded-md shadow-lg transition duration-300"
              >
                View Our FAQs &rarr;
              </Link>
            </div>

            {/* Footer Copyright */}
            <div className="text-center pt-4 text-gray-500 text-sm">
                <Home size={20} className="inline mr-2 text-gray-400" />
                © {new Date().getFullYear()} Modern Living Inc. All Rights Reserved.
            </div>

          </div> {/* End of Sidebar */}


          {/* === COLUMN 2: Main Terms Content (Right, 75% Width) === */}
          <div className="lg:w-3/4 order-1 lg:order-2"> 
            
            <p className="font-bold text-black text-sm mb-6">
              LAST UPDATED: December 9, {new Date().getFullYear()}
            </p>

            {/* Introductory Paragraphs */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              These terms and conditions (the **"Terms"**) govern your access to and use of the Modern Living platform ("Site"). By accessing or using the Site, you are agreeing to these Terms and entering into a legally binding contract with Modern Living Inc. ("us" or **"our"**). It is important that you read carefully and understand the Terms. Do not access or use the Site if you are unwilling or unable to be bound by the Terms.
            </p>
            <p className="text-gray-700 mb-10 leading-relaxed">
              Any references to **"you"** and **"your"** refer to you, as a user of the Site. References to **"we"**, **"us"** and **"our"** refer to Modern Living Inc.
            </p>
            
            {/* Terms List (Styled as Sections) */}
            <div className="space-y-8"> 
              {terms.map((item, i) => (
                <div key={i} className="group">
                  {/* H3 Heading is now text-yellow-700 */}
                  <h3 className="text-2xl font-bold text-yellow-700 mb-1">
                    {i + 1}. {item.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-700 mt-1 leading-relaxed pl-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Footer Contact Text */}
            <div className="pt-8 border-t border-gray-200 mt-10">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Contact Information</h4>
                <p className="text-gray-600">
                  For questions regarding these Terms, please contact us:
                  <br />
                  <span className="font-semibold">Email:</span> 
                  <a href="mailto:support@modernliving.com" className="text-yellow-600 hover:text-yellow-800 underline ml-1 transition">
                    support@modernliving.com
                  </a>
                </p>
            </div>

          </div> {/* End of Main Terms Content */}
        </div> {/* End of Two-Column Layout */}

      </div>
    </section>
  );
};

export default TermsOfServices;