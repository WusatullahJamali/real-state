"use client"
import React from "react"

const terms = [
  {
    title: "Assumable mortgage",
    description: "Unlike a traditional mortgage, an assumable mortgage is passed directly from seller to buyer, bringing its remaining balance and interest rate with it. Only FHA, VA, and USDA mortgages can be assumed. Some eligibility requirements may apply, and down payments can often exceed 20% if a property has appreciated in value since the start of its mortgage."
  },
  {
    title: "Bi-weekly mortgage",
    description: "A bi-weekly mortgage is a mortgage in which the borrower makes half of their monthly mortgage payment every two weeks, rather than paying the full payment amount once every month. This can help the borrower pay off their mortgage loan sooner and reduces the total amount of interest paid over the life of the loan."
  },
  {
    title: "Borrower",
    description: "A borrower is a person who takes out a loan from a lender. For a mortgage loan, the borrower often is also referred to as the mortgagor (and the bank or lender the mortgagee)."
  },
  {
    title: "Conventional loan",
    description: "A conventional loan is a type of mortgage that is not insured or guaranteed by the government."
  },
  {
    title: "Debt-to-income ratio",
    description: "A debt-to-income ratio is a factor looked at by lenders when qualifying a borrower for a mortgage loan. The DTI is a number that lenders use to determine how well a borrower can handle their monthly debts. Many lenders will want to see that your DTI is 36% or lower."
  },
  {
    title: "Down payment",
    description: "A down payment is that portion of the purchase price of a home that the buyer pays upfront; usually the balance of the purchase price that is needed to buy the home is borrowed from a lender by way of a mortgage loan."
  },
  {
    title: "Homeowners insurance",
    description: "Homeowners insurance is a type of property insurance. It protects you from damage (for example, from fire) to your home or possessions. It also provides liability insurance against claims by people who might be injured due to accidents in your home or on the property."
  },
  {
    title: "Interest-only mortgage",
    description: "An interest-only mortgage is a type of loan in which the borrower only pays interest on the principal balance for a set time, usually five to seven years. After that, payments include both principal and interest."
  },
  {
    title: "Loan, and Mortgage Loan",
    description: "A loan is money borrowed by one person or company from another, under an agreement to repay the loan plus interest. A mortgage loan is a type of loan for buying or financing real estate, where the lender may foreclose if payments are missed."
  },
  {
    title: "Loan-to-value ratio (LTV)",
    description: "The LTV compares the amount of a loan to the value of the asset being financed: amount borrowed divided by property price. Lower LTV makes it easier to qualify."
  },
  {
    title: "Payment",
    description: "A payment is an action that transfers money from one person or entity to another. Payments can be made via cash, check, or electronic transfer."
  },
  {
    title: "Real estate",
    description: "Real estate is land, either vacant or improved with structures, and can serve as a place of business or residence."
  },
  {
    title: "Reverse mortgage",
    description: "A reverse mortgage allows seniors to borrow against the value of their homes. It doesn’t need to be repaid until the borrower moves, sells, or dies."
  },
  {
    title: "Step-by-step Guide",
    description: "A step-by-step guide takes you through a process in a series of easy-to-follow steps."
  },
  {
    title: "The Federal Housing Administration (FHA), FHA Loan",
    description: "FHA is a U.S. government agency. FHA loans are guaranteed by FHA and allow low down payments, lower credit score requirements, and limited closing costs."
  },
  {
    title: "Veterans Affairs Department (VA), VA loan",
    description: "VA loans are available to military members and spouses, guaranteed by the VA, often requiring no down payment and lower interest rates."
  }
]

const Comon = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-12">Common Mortgage Terms</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {terms.map((term, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">{term.title}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{term.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Comon
