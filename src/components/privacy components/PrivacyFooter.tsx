"use client"
import React from 'react';
import { FiMail, FiPhone, FiShield } from 'react-icons/fi';

const PrivacyFooter = () => {
  // Privacy rights data
  const rights = [
    { title: "Access Your Data", desc: "Request a copy of all personal information we hold.", icon: "📋" },
    { title: "Correct Information", desc: "Update or correct any inaccurate personal data.", icon: "✏️" },
    { title: "Delete Your Data", desc: "Request deletion of your personal information.", icon: "🗑️" },
    { title: "Opt-Out", desc: "Unsubscribe from marketing communications anytime.", icon: "🔕" }
  ];

  return (
    <section className="mt-16 space-y-16">
      <div className="grid lg:grid-cols-2 gap-8 px-4 md:px-0">

        {/* Your Privacy Rights */}
        <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 rounded-3xl p-8 md:p-10 border-2 border-yellow-300">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8 flex items-center gap-3">
            <FiShield className="text-yellow-600 text-4xl" /> 
            Your Privacy Rights
          </h2>
          <div className="space-y-6">
            {rights.map((item, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-5 md:p-6 transition-all border border-yellow-100 hover:shadow-lg hover:scale-105">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-500 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-[500px]">
          {/* Floating background blobs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-40"></div>

          <div className="relative z-10 max-w-lg">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
              Questions About Your Privacy?
            </h2>
            <p className="text-black/90 font-medium text-lg md:text-xl mb-8">
              Our privacy team is here to help. Reach out with any concerns or requests regarding your personal data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@realchoice.com"
                className="bg-black hover:bg-gray-900 text-white font-bold text-lg md:text-xl px-8 py-5 rounded-2xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 transform-gpu flex items-center justify-center gap-3"
              >
                <FiMail className="text-2xl md:text-3xl" /> 
                privacy@realchoice.com
              </a>
              <a
                href="tel:+1234567890"
                className="bg-white hover:bg-gray-100 text-black font-bold text-lg md:text-xl px-8 py-5 rounded-2xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 transform-gpu flex items-center justify-center gap-3"
              >
                <FiPhone className="text-2xl md:text-3xl" /> 
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 text-center px-4 md:px-0">
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6"></div>
        <p className="text-gray-600 text-base md:text-lg font-medium mb-2">
          This privacy policy is effective as of <strong className="text-gray-900">December 9, 2025</strong>
        </p>
        <p className="text-gray-500 text-sm md:text-base">
          RealChoice™ | Professional Real Estate Platform
        </p>
      </footer>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(40px, 40px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default PrivacyFooter;
