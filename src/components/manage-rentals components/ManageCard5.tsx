import React from 'react'

const ManageCard5 = () => {
  return (
   <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md h-full flex items-center justify-center bg-white rounded-2xl p-4">
            <img
              src="/m5.png" 
              alt="Rental Management Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
           Secure Online Rent Collection
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
         Simplify payment collection by managing all rental payments, deposits, and fees through a single site. Feel secure knowing your payments are secure within Avail with our Plaid and Stripe partnership, while also enabling you to stay tax compliant.
          </p>
          <button className="mt-4 bg-yellow-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-yellow-700 transition w-max shadow-lg">
            Learn More
          </button>
        </div>

      </div>
    </div>
  )
}

export default ManageCard5
