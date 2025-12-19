import { MapPin, Phone, Home } from "lucide-react";
import React from "react";

const contactData = [
  {
    country: "Hyderabad, Pakistan",
    map: "View Map",
    phone1: "+880 566 1111 985",
    phone2: "+880 657 1111 576",
    address: "Dawood Mart, Office-503-523, AutoBhan Road,",
  },
  {
    country: "Lahore, Pakistan",
    map: "View Map",
    phone1: "+880 566 1111 985",
    phone2: "+880 657 1111 576",
    address: "Dawood Mart, Office-503-523, AutoBhan Road,",
  },
  {
    country: "Karachi, Pakistan",
    map: "View Map",
    phone1: "+880 566 1111 985",
    phone2: "+880 657 1111 576",
    address: "Dawood Mart, Office-503-523, AutoBhan Road,",
  },
];

const ContactCards = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-yellow-300 hover:shadow-2xl transition-all duration-300"
          >
            {/* Country */}
            <h2 className="text-xl font-bold text-yellow-800">{item.country}</h2>

            {/* Map Link */}
            <button className="text-yellow-600 hover:underline font-medium text-sm mt-1">
              {item.map}
            </button>

            <div className="mt-4 space-y-3 text-gray-800">
              {/* Phone numbers */}
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-yellow-600" />
                <span>{item.phone1}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} className="text-yellow-600" />
                <span>{item.phone2}</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2">
                <Home size={18} className="mt-1 text-yellow-600" />
                <span className="text-sm">{item.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCards;
