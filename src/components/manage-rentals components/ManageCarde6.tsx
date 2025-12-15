import React from 'react'
import Image from 'next/image'

const ManageCarde6 = () => {
  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-3 items-center">

        {/* IMAGE LEFT */}
        <div className="order-1 flex justify-center">
          <Image
            src="/m6.png"
            alt="rent"
            height={200}
            width={200}
            className="w-full h-[350px] object-cover rounded-xl"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="order-2 space-y-4">
         

          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
           Discover all the tools available on Avail
          </h1>

          <p className="text-gray-600 text-lg">
           Avail includes everything you need to manage your rentals effortlessly and professionally. Uncover the full suite of Avail features to simplify your day-to-day operations while maximizing your profit.
          </p>

          <button className="border bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 rounded-lg w-fit mt-5">
            Learn more
          </button>
        </div>

      </div>
    </div>
  )
}

export default ManageCarde6
