// components/SellerGuides.jsx
import Link from 'next/link';
import { ArrowRight, ChevronRight, DollarSign, FileQuestionMark, House } from 'lucide-react';

const guides = [
 {
  title: "Should I sell my home now?",
  description: "Questions to ask to help you figure out if selling makes sense for you right now.",
  link: "/sell/seller-guides/should-i-sell-my-home-now",
  icon:<FileQuestionMark className='text-yellow-500' /> 
    
  
  
},
{
  title: "How much is my home worth?",
  description: "Tools and advice to help you understand your home's value.",
  link: "/sell/seller-guides/how-much-is-my-home-worth",
  icon: <House className='text-yellow-500' /> 
},
{
  title: "How should I sell my home?",
  description: "Steps and tips to make the selling process easier.",
  link: "/sell/seller-guides/how-should-i-sell-my-home",
  icon: <DollarSign className='text-yellow-500'/>
}
,
];

export default function SellerGuides() {
  return (
    <section className="bg-white py-12" data-testid="seller-guides-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Seller guides</h2>
          <Link href="/guides/home-selling-guide" className="flex items-center text-yellow-500 font-semibold hover:underline">
            Complete guide <ArrowRight className="ml-1 w-5 h-5"/>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Link
              key={index}
              href={guide.link}
              className="flex flex-col bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-200 relative group"
            >
              <div className="mb-4 ">{guide.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-600 flex-1">{guide.description}</p>
              <div className="absolute right-4 bottom-4 text-gray-400 group-hover:text-yellow-600">
                <ChevronRight className="w-6 h-6"/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
