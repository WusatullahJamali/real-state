"use client"

import React from 'react'
import Link from 'next/link'

const Rate = () => {
  const ratePlans = [
    {
      title: "30-year fixed NMLS 2059741",
      apr: "5.833%",
      payment: "$1,868/mo",
      rate: "5.750%",
      fees: "Fees $2,909 Includes 0.909 points ($2,909)"
    },
    {
      title: "30-year fixed NMLS 2059741",
      apr: "5.833%",
      payment: "$1,868/mo",
      rate: "5.750%",
      fees: "Fees $2,909 Includes 0.909 points ($2,909)"
    },
    {
      title: "30-year fixed NMLS 2059741",
      apr: "5.833%",
      payment: "$1,868/mo",
      rate: "5.750%",
      fees: "Fees $2,909 Includes 0.909 points ($2,909)"
    }
  ]

  return (
    <section className="py-16 text-black bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Rates</h1>
          <p className="text-sm text-black">
            Data provided by 3rd party RateUpdate.com
          </p>
        </div>

        {/* Average Rate */}
        <div className="bg-white p-6 rounded-2xl shadow mb-12">
          <h2 className="text-xl font-semibold mb-2">30-year fixed average:</h2>
          <p className="text-lg font-bold">6.278% APR</p>
          <p className="text-lg font-bold mb-4">6.251% Rate</p>
          <p className="text-gray-500 text-sm mb-4">
            Averages are provided for informational purposes only and are based on averages for PA. Disclosures.
          </p>

          {/* Links */}
          <div className="flex gap-4 flex-wrap mb-6">
            <Link href="#" className="text-yellow-500 font-medium hover:underline">30-years fixed</Link>
            <Link href="#" className="text-yellow-500 font-medium hover:underline">15-years fixed</Link>
            <Link href="#" className="text-yellow-500 font-medium hover:underline">5-years fixed</Link>
          </div>

          {/* Rate Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ratePlans.map((plan, idx) => (
              <div key={idx} className="bg-gray-100 p-5 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
                <ul className="mb-4 space-y-1 text-sm">
                  <li className="font-semibold">{plan.title}</li>
                  <li>APR: {plan.apr}</li>
                  <li>Payment: {plan.payment}</li>
                  <li>Rate: {plan.rate}</li>
                  <li>{plan.fees}</li>
                </ul>
                <button className="mt-auto bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
                  Get your quote
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Shop around section */}
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl font-semibold mb-4">
            Shop around for providers based on your financial criteria
          </h2>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition mb-4">
            View more providers
          </button>
          <p className="text-gray-500 text-sm mb-2">Advertising disclosure</p>
          <p className="text-gray-500 text-sm">
            Payments do not include taxes or insurance premiums. Actual payments will be greater with taxes and insurance included. Rate and product details.{" "}
            <span className="font-medium">
              Rate data provided by RateUpdate.com. Displayed by ICB, a division of Mortgage Research Center, NMLS #1907, Equal Housing Opportunity.
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}

export default Rate
