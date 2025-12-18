"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  onClose: () => void;
  openLogin: () => void;
};

export default function SignupModal({ onClose, openLogin }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl min-h-[450px] shadow-xl w-full max-w-3xl overflow-hidden z-10">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 cursor-pointer hover:text-black text-2xl"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row h-full">

          {/* Left Image */}
          <div className="hidden md:block w-1/2 relative">
            <Image
              src="/apart2.avif"
              alt="apartment"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">

            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Sign Up
            </h2>

            <p className="text-sm text-gray-600 text-center mb-6">
              Already have an account?{" "}
              <button
                onClick={() => {
                  onClose();
                  openLogin();
                }}
                className="text-[#efb93f] hover:underline font-medium"
              >
                Log In
              </button>
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Type your full name"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Type your email"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Type your password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#efb93f] text-white py-2.5 rounded-lg font-semibold hover:opacity-90"
              >
                Sign Up
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm mb-3">Or continue with</p>

              <div className="flex justify-center gap-4">
                {/* Google */}
                <Link
                  href="https://accounts.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg hover:scale-105 transition-transform"
                >
                  <Image
                    src="/google-icon.png"
                    alt="Google"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </Link>

                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg hover:scale-105 transition-transform"
                >
                  <Image
                    src="/facebook-logo.webp"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
