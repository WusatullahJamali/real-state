// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";

// export default function LoginPopup() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       {show && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-85 p-4">
//           <div className="bg-white rounded-2xl min-h-[480px] shadow-xl w-full max-w-3xl relative overflow-hidden">

//             {/* Close Button */}
//             <button
//               onClick={() => setShow(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
//             >
//               ×
//             </button>

//             <div className="flex flex-col md:flex-row">

//               {/* Left Image */}
//               <div className="hidden md:block w-1/2 relative">
//              <Image
//                 src="/apart2.avif"
//                   alt="apartment"
//                 fill
//                      className="object-cover"
//                   />
//           </div>


//               {/* Right Login Form */}
//               <div className="w-full md:w-1/2 p-6">

//                 <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
//                   Log In
//                 </h2>
               

//                <p className="text-sm text-gray-600 text-center mb-6">
//              Don’t have an account?{" "}
//                      <Link href="/SignUp" className="text-[#efb93f] cursor-pointer hover:underline">
//               Sign Up
//                   </Link>
//                  </p>


//                 {/* Form */}
//                 <form className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-black">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="Type email"
//                       className="w-full mt-1 text-black px-4 py-2 border rounded-lg  "
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-black">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       placeholder="Type password"
//                       className="w-full mt-1 px-4 py-2 text-black border rounded-lg  "
//                     />
//                   </div>

//                   <div className="flex items-center justify-between text-sm">
//                     <label className="flex items-center gap-2">
//                       <input type="checkbox" />
//                       <span className="text-black">Remember Me</span>
//                     </label>
//                     <a href="#" className="text-gray-600 hover:underline">
//                       Forgot Password?
//                     </a>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-[#efb93f] cursor-pointer  text-white py-2.5 rounded-lg font-medium"
//                   >
//                     Log In
//                   </button>
//                 </form>

//                 {/* Social Icons */}
//                <div className="mt-6 text-center">
//   <p className="text-gray-500 text-sm">Or continue with</p>
//   <div className="flex justify-center gap-4 mt-3">
    
//     {/* Google */}
//     <a
//       href="https://accounts.google.com/signin"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         className="cursor-pointer"
//         src="/google-logo2.png"
//         alt="google"
//         width={50}
//         height={50}
//       />
//     </a>

//     {/* Facebook */}
//     <a
//       href="https://www.facebook.com/login/"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Image
//         className="cursor-pointer pt-1.5"
//         src="/facebook.png"
//         alt="facebook"
//         width={40}
//         height={44}
//       />
//     </a>

//   </div>




//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}
//     </>
//   );
// }








"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  onClose: () => void;
  openSignup: () => void;
};

export default function LoginModal({ onClose, openSignup }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl min-h-[475px] overflow-hidden z-10">

        {/* Close Button */}
        <button
          onClick={onClose}
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
              Log In
            </h2>

            <p className="text-sm text-gray-600 text-center mb-6">
              Don’t have an account?{" "}
              <button
                onClick={() => {
                  onClose();
                  openSignup();
                }}
                className="text-[#efb93f] hover:underline font-medium"
              >
                Sign Up
              </button>
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Type email"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#efb93f]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Type password"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#efb93f]"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-black">Remember Me</span>
                </label>
                <a href="#" className="text-gray-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#efb93f] text-white py-2.5 rounded-lg font-semibold hover:opacity-90"
              >
                Log In
              </button>
            </form>

            {/* Social */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">Or continue with</p>
              <div className="flex justify-center gap-4 mt-3">
                <Image src="/google-logo2.png" alt="google" width={45} height={45} />
                <Image src="/facebook.png" alt="facebook" width={38} height={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
