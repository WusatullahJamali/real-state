"use client"
import React from "react"
import { motion, Variants, easeOut } from "framer-motion";

const terms = [
  {
    title: "Assumable mortgage",
    description:
      "Unlike a traditional mortgage, an assumable mortgage is passed directly from seller to buyer, bringing its remaining balance and interest rate with it. Only FHA, VA, and USDA mortgages can be assumed. Some eligibility requirements may apply, and down payments can often exceed 20% if a property has appreciated in value since the start of its mortgage.",
  },
  {
    title: "Bi-weekly mortgage",
    description:
      "A bi-weekly mortgage is a mortgage in which the borrower makes half of their monthly mortgage payment every two weeks, rather than paying the full payment amount once every month. This can help the borrower pay off their mortgage loan sooner and reduces the total amount of interest paid over the life of the loan.",
  },
  {
    title: "Borrower",
    description:
      "A borrower is a person who takes out a loan from a lender. For a mortgage loan, the borrower often is also referred to as the mortgagor (and the bank or lender the mortgagee).",
  },
  {
    title: "Conventional loan",
    description: "A conventional loan is a type of mortgage that is not insured or guaranteed by the government.",
  },
  {
    title: "Debt-to-income ratio",
    description:
      "A debt-to-income ratio is a factor looked at by lenders when qualifying a borrower for a mortgage loan. The DTI is a number that lenders use to determine how well a borrower can handle their monthly debts. Many lenders will want to see that your DTI is 36% or lower.",
  },
  {
    title: "Down payment",
    description:
      "A down payment is that portion of the purchase price of a home that the buyer pays upfront; usually the balance of the purchase price that is needed to buy the home is borrowed from a lender by way of a mortgage loan.",
  },
  {
    title: "Homeowners insurance",
    description:
      "Homeowners insurance is a type of property insurance. It protects you from damage (for example, from fire) to your home or possessions. It also provides liability insurance against claims by people who might be injured due to accidents in your home or on the property.",
  },
  {
    title: "Interest-only mortgage",
    description:
      "An interest-only mortgage is a type of loan in which the borrower only pays interest on the principal balance for a set time, usually five to seven years. After that, payments include both principal and interest.",
  },
  {
    title: "Loan, and Mortgage Loan",
    description:
      "A loan is money borrowed by one person or company from another, under an agreement to repay the loan plus interest. A mortgage loan is a type of loan for buying or financing real estate, where the lender may foreclose if payments are missed.",
  },
  {
    title: "Loan-to-value ratio (LTV)",
    description:
      "The LTV compares the amount of a loan to the value of the asset being financed: amount borrowed divided by property price. Lower LTV makes it easier to qualify.",
  },
  {
    title: "Payment",
    description:
      "A payment is an action that transfers money from one person or entity to another. Payments can be made via cash, check, or electronic transfer.",
  },
  {
    title: "Real estate",
    description:
      "Real estate is land, either vacant or improved with structures, and can serve as a place of business or residence.",
  },
  {
    title: "Reverse mortgage",
    description:
      "A reverse mortgage allows seniors to borrow against the value of their homes. It doesn't need to be repaid until the borrower moves, sells, or dies.",
  },
  {
    title: "Step-by-step Guide",
    description: "A step-by-step guide takes you through a process in a series of easy-to-follow steps.",
  },
  {
    title: "The Federal Housing Administration (FHA), FHA Loan",
    description:
      "FHA is a U.S. government agency. FHA loans are guaranteed by FHA and allow low down payments, lower credit score requirements, and limited closing costs.",
  },
  {
    title: "Veterans Affairs Department (VA), VA loan",
    description:
      "VA loans are available to military members and spouses, guaranteed by the VA, often requiring no down payment and lower interest rates.",
  },
]

const Comon = () => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Card animation
  const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut", // ✅ string works in v10+
    },
  },
};


  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Common Mortgage Terms
          </h1>
          <p className="text-gray-600 text-lg">
            Understanding the language of home financing
          </p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {terms.map((term, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white border border-yellow-300 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow overflow-hidden cursor-pointer"
            >
              {/* Animated Background Accent */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -mr-16 -mt-16"
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.h2 
                  className="text-xl font-semibold mb-3 text-yellow-700 group-hover:text-yellow-600 transition-colors"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {term.title}
                </motion.h2>
                
                <motion.p 
                  className="text-gray-700 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  {term.description}
                </motion.p>
              </div>

              {/* Hover Indicator */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Comon