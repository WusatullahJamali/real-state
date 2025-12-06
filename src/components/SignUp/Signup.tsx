"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPopup() {
  const [show, setShow] = useState(true);

  if (!show) return null; // hide popup after clicking cross

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl min-h-[450px] shadow-xl w-full max-w-3xl relative overflow-hidden">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
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
              <Link
                href="/login"
                className="text-[#efb93f] cursor-pointer hover:underline"
              >
                Log In
              </Link>
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
                className="w-full bg-[#efb93f] cursor-pointer text-white py-2.5 rounded-lg font-medium"
              >
                Sign Up
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">Or continue with</p>
              <div className="flex justify-center gap-4 mt-3">
                <a
                  href="https://accounts.google.com/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="cursor-pointer object-contain "
                    src="/google-logo2.png"
                    alt="google"
                    width={50}
                    height={50}
                  />
                </a>

                <a
                  href="https://www.facebook.com/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="cursor-pointer object-contain pt-1.5"
                    src="/facebook.png"
                    alt="facebook"
                    width={40}
                    height={44}
                  />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
