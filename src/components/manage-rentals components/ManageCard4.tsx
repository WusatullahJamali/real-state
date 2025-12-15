import React from 'react'
import Image from 'next/image'

const ManageCard4 = () => {
  return (
   <div className="w-full bg-white text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-3 items-center">

        {/* IMAGE LEFT */}
        <div className="order-1 flex justify-center">
          <Image
            src="/m4.png"
            alt="rent"
            width={200}
            height={200}
            className="w-full h-[350px] object-cover rounded-xl"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="order-2 space-y-4">
          

          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
           Lawyer-Reviewed Leases
          </h1>

          <p className="text-gray-600 text-lg">
           Customize the state-specific, lawyer-reviewed lease templates on Avail and seamlessly collect signatures from renters using built-in eSign options.
          </p>

          <button className="border bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 rounded-lg w-fit mt-5">
            Learn more
          </button>
        </div>

      </div>
    </div>
  )
}

export default ManageCard4
