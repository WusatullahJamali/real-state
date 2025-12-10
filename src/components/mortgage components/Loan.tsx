"use client"
import React from 'react'

const Loan = () => {
  return (
    <section className="py-16 text-black bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Home Loan Options</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead className="bg-yellow-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Loan type</th>
                <th className="py-3 px-4 text-left">Income requirements</th>
                <th className="py-3 px-4 text-left">Down payment</th>
                <th className="py-3 px-4 text-left">Credit score</th>
                <th className="py-3 px-4 text-left">Assumable mortgage</th>
              </tr>
            </thead>

            <tbody>
              {/* Row example */}
              <tr className="border-b hover:bg-gray-100 transition">
                <td className="py-4 px-4">
                  <div>
                    <b>30-year fixed</b>
                  </div>
                </td>
                <td className="py-4 px-4">Conventional loan income requirements vary by lender.</td>
                <td className="py-4 px-4">Min. 3%</td>
                <td className="py-4 px-4">650+</td>
                <td className="py-4 px-4">X</td>
              </tr>

              <tr className="border-b hover:bg-gray-100 transition">
                <td className="py-4 px-4">
                  <div>
                    <b>FHA 30-year fixed</b>
                  </div>
                </td>
                <td className="py-4 px-4">No minimum income is required. Needs proof of steady income for the past two years.</td>
                <td className="py-4 px-4">Min. 3.5% Min. 10%</td>
                <td className="py-4 px-4">580+ 500 to 579</td>
                <td className="py-4 px-4">X</td>
              </tr>

              <tr className="border-b hover:bg-gray-100 transition">
                <td className="py-4 px-4">
                  <div className="mb-2">
                    <b>USDA 30-year fixed</b>
                    <div className="text-sm text-gray-500">For homes located in a rural area.</div>
                  </div>
                  <button className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 transition text-sm">View guide</button>
                </td>
                <td className="py-4 px-4">
                  Requires an income of less than 115% of what's typical for the
                  area.
                </td>
                <td className="py-4 px-4">
                  Requires an income of less than 115% of what typical for the
                  area.
                </td>
                <td className="py-4 px-4">No down payment required.</td>
                <td className="py-4 px-4">
                  No minimum
                  <div className="text-sm text-gray-500 mt-1">Can be no minimum but it varies by lender.</div>
                </td>
                <td className="py-4 px-4">X</td>
              </tr>

              <tr className="border-b hover:bg-gray-100 transition">
                <td className="py-4 px-4">
                  <div className="mb-2">
                    <b>VA 30-year fixed</b>
                    <div className="text-sm text-gray-500">Only applies to Veterans or their spouses.</div>
                  </div>
                  <button className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 transition text-sm">View guide</button>
                </td>
                <td className="py-4 px-4">Income requirements vary by lender.</td>
                <td className="py-4 px-4">No down payment required.</td>
                <td className="py-4 px-4">No minimum</td>
                <td className="py-4 px-4">X</td>
              </tr>

              <tr className="border-b hover:bg-gray-100 transition">
                <td className="py-4 px-4">
                  <div>
                    <b>5/1 ARM</b>
                    <div className="text-sm text-gray-500">Fixed rate for the first five years, then adjustable once a year.</div>
                  </div>
                </td>
                <td className="py-4 px-4">Income requirements vary by lender.</td>
                <td className="py-4 px-4">Min. 5%</td>
                <td className="py-4 px-4">580 to 620</td>
                <td className="py-4 px-4">X</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Loan
