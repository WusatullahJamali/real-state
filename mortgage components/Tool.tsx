"use client"

import React from 'react'
import { Calculator, Home, DollarSign, RefreshCcw } from "lucide-react"

const Tool = () => {
  const tools = [
    {
      title: "Mortgage Calculator",
      description: "Calculate your monthly mortgage payment.",
      icon: <Calculator className="w-10 h-10 text-yellow-500" />
    },
    {
      title: "Affordability Calculator",
      description: "Calculate the price of a home you can afford.",
      icon: <Home className="w-10 h-10 text-yellow-500" />
    },
    {
      title: "Rent or Buy Calculator",
      description: "Estimate when it makes sense to buy or rent.",
      icon: <DollarSign className="w-10 h-10 text-yellow-500" />
    },
    {
      title: "Refinance Calculator",
      description: "Decide if mortgage refinancing is right for you.",
      icon: <RefreshCcw className="w-10 h-10 text-yellow-500" />
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Tools</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-start"
            >
              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{tool.title}</h3>
              <p className="text-black">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tool
