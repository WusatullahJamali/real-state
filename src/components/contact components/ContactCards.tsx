"use client";

import { MapPin, Phone, Home } from "lucide-react";
import React from "react";

const contactData = [
  {
    city: "Baghdad, Iraq",
    map: "View on Google Maps",
    phone1: "+964 770 123 4567",
    phone2: "+964 781 987 6543",
    address: "Al-Karrada District, Near Jadriya Bridge",
  },
  {
    city: "Erbil, Kurdistan Region",
    map: "View on Google Maps",
    phone1: "+964 750 222 3344",
    phone2: "+964 751 555 8899",
    address: "Gulan Street, Empire World Building",
  },
  {
    city: "Basra, Iraq",
    map: "View on Google Maps",
    phone1: "+964 780 444 2211",
    phone2: "+964 783 990 6677",
    address: "Ashar District, Near Corniche Road",
  },
];

const ContactCards = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Offices in Iraq
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Visit or contact our regional offices across Iraq for trusted real estate
            services and local support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl p-6
                border border-gray-200
                shadow-sm hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* City */}
              <h3 className="text-xl font-semibold text-gray-900">
                {item.city}
              </h3>

              {/* Map */}
              <button className="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 text-sm font-medium mt-1">
                <MapPin size={15} />
                {item.map}
              </button>

              {/* Info */}
              <div className="mt-5 space-y-4 text-gray-700">
                
                {/* Phones */}
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-yellow-600" />
                  <span>{item.phone1}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-yellow-600" />
                  <span>{item.phone2}</span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <Home size={18} className="text-yellow-600 mt-1" />
                  <span className="text-sm leading-relaxed">
                    {item.address}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactCards;
