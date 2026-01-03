"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

type Props = {
  onClose: () => void;
  openSignup: () => void;
};

export default function LoginModal({ onClose, openSignup }: Props) {
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir={isRtl ? "rtl" : "ltr"}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl min-h-[475px] overflow-hidden z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 end-4 text-gray-400 cursor-pointer hover:text-black text-2xl z-20 transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Left Image Section */}
          <div className="hidden md:block w-1/2 relative">
            <Image
              src="/apart2.avif"
              alt="apartment"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Log In</h2>
            <p className="text-sm text-gray-500 text-center mb-8">
              Don’t have an account?{" "}
              <button
                onClick={() => { onClose(); openSignup(); }}
                className="text-[#efb93f] cursor-pointer hover:underline font-semibold"
              >
                Sign Up
              </button>
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 border rounded-xl border-gray-300 text-black focus:ring-2 focus:ring-[#efb93f]/20 focus:border-[#efb93f] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-black focus:ring-2 focus:ring-[#efb93f]/20 focus:border-[#efb93f] outline-none transition-all"
                />
              </div>

              <div className="flex items-center justify-between text-xs font-medium">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded accent-[#efb93f]" />
                  <span className="text-gray-600">Remember Me</span>
                </label>
                <a href="#" className="text-gray-500 hover:text-black transition-colors">Forgot Password?</a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#efb93f] cursor-pointer text-white py-3 rounded-xl font-bold shadow-lg shadow-yellow-600/10 hover:shadow-yellow-600/20 hover:opacity-95 transition-all"
              >
                Log In
              </button>
            </form>

            {/* Social - IMPROVED IMG PART */}
            <div className="mt-8">
              <div className="relative flex py-3 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase tracking-widest font-bold">Or</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
              
              <div className="flex justify-center gap-4 mt-4">
                {/* Google Button */}
                <Link
                  href="https://accounts.google.com"
                  target="_blank"
                  className="flex-1 max-w-[120px] h-14 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-2xl hover:bg-white hover:border-[#efb93f] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative w-6 h-6 group-hover:scale-110 transition-transform">
                    <Image src="/google-icon.png" alt="Google" fill className="object-contain" />
                  </div>
                </Link>

                {/* Facebook Button */}
                <Link
                  href="https://www.facebook.com/login"
                  target="_blank"
                  className="flex-1 max-w-[120px] h-14 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-2xl hover:bg-white hover:border-[#efb93f] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="relative w-6 h-6 group-hover:scale-110 transition-transform">
                    <Image src="/facebook-logo.webp" alt="Facebook" fill className="object-contain" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}