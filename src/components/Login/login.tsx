"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white text-black w-full max-w-md rounded-xl shadow-lg p-6 relative">

        {/* Header */}
        <h2 className="text-xl font-semibold mb-6 text-center">
          Log in or create an account
        </h2>

        {/* Email + Name + Password Form */}
        <form className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
              className="border border-gray-300 text-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="border border-gray-300 text-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="border border-gray-300 text-gray-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Continue
          </button>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm my-2">
            <span className="border-b border-gray-400 w-1/3"></span>
            <span>or</span>
            <span className="border-b border-gray-400 w-1/3"></span>
          </div>
        </form>

        {/* Social Login */}
        <div className="flex flex-col gap-3 mt-4">
          <a
            href="https://accounts.google.com/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
          >
            <span aria-hidden className="text-xl font-semibold text-[#4285F4]">G</span>
            Continue with Google
          </a>
          <a
            href="https://www.facebook.com/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
          >
            <span aria-hidden className="text-xl font-semibold text-[#1877F2]">f</span>
            Continue with Facebook
          </a>
          <a
            href="https://appleid.apple.com/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
          >
            <span aria-hidden className="text-xl font-semibold">A</span>
            Continue with Apple
          </a>
        </div>

        {/* Real Estate Agent / Account Links */}
        <div className="text-center mt-6 space-y-2">
          <p>Are you a real estate agent?</p>
          <div className="flex justify-center gap-2 flex-wrap">
            <a href="/login" className="text-blue-600 hover:underline">Log in</a>
            <span>or</span>
            <a href="/register" className="text-blue-600 hover:underline">Create an account</a>
          </div>
          <div>
            <a href="/purchase-products" className="text-blue-600 hover:underline mt-2 inline-block">Purchase products</a>
          </div>
        </div>

        {/* Terms & Privacy */}
        <div className="text-center text-sm mt-6 space-y-1">
          <p>By creating an account you agree to Samarix.com</p>
          <div className="flex justify-center gap-1 flex-wrap">
            <a href="/terms" className="text-blue-600 hover:underline">Terms of Use</a>
            <span>and</span>
            <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
