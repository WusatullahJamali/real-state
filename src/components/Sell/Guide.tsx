// components/SellerGuides.jsx
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const guides = [
  {
    title: "Should I sell my home now?",
    description: "Questions to ask to help you figure out if selling makes sense for you right now.",
    link: "/sell/seller-guides/should-i-sell-my-home-now",
    icon: (
      <svg className="w-10 h-10 text-red-700" viewBox="0 0 48 48" fill="none">
        <path fill="#D92228" d="M5.585 30h36.83c1.428 0 2.585.215 2.585.48L44 35c0 .265-.157 1-1.585 1H29.71c-.435 2.535.174 5.465 2.29 8H17c2.11-2.535 2.725-5.465 2.29-8H5.585C4.157 36 3.5 35.265 3.5 35L3 30.48c0-.265 1.157-.48 2.585-.48Z"></path>
        <path fill="#fff" d="M42.415 4H5.585C4.157 4 3 4.93 3 6.077v21.846C3 29.07 4.157 30 5.585 30h36.83C43.843 30 45 29.07 45 27.923V6.077C45 4.93 43.843 4 42.415 4Z"></path>
      </svg>
    ),
  },
  {
    title: "How much is my home worth?",
    description: "Tools and advice to help you understand your home's value.",
    link: "/sell/seller-guides/how-much-is-my-home-worth",
    icon: (
      <svg className="w-10 h-10 text-red-700" viewBox="0 0 48 48" fill="none">
        <path fill="#D92228" d="M9.444 42h29.112c.797 0 1.444-.573 1.444-1.28V23L24 11 8 22.5v18.22c0 .707.647 1.28 1.444 1.28Z"></path>
        <path fill="#fff" d="m6.166 18.251 16.219-12.05a2.708 2.708 0 0 1 3.23 0L35 13.172v-5.25c0-.51.448-.923 1-.923h3c.552 0 1 .413 1 .923v8.966l1.834 1.362A2.889 2.889 0 0 1 43 20.571v2.44a1 1 0 0 1-1.596.803L24 10.882 6.596 23.814A1 1 0 0 1 5 23.01v-2.44c0-.915.432-1.775 1.166-2.32Z"></path>
      </svg>
    ),
  },
  {
    title: "How should I sell my home?",
    description: "Steps and tips to make the selling process easier.",
    link: "/sell/seller-guides/how-should-i-sell-my-home",
    icon: (
      <svg className="w-10 h-10 text-red-700" viewBox="0 0 48 48" fill="none">
        <path fill="#D92228" d="M10 39.95v-19.9c0-.58.47-1.05 1.05-1.05h34.9c.58 0 1.05.47 1.05 1.05v19.9c0 .58-.47 1.05-1.05 1.05h-34.9c-.58 0-1.05-.47-1.05-1.05Z"></path>
        <path fill="#fff" d="M35 30c0 4.418-2.91 8-6.5 8S22 34.418 22 30s2.91-8 6.5-8 6.5 3.582 6.5 8Z"></path>
      </svg>
    ),
  },
];

export default function SellerGuides() {
  return (
    <section className="bg-white py-12" data-testid="seller-guides-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Seller guides</h2>
          <Link href="/guides/home-selling-guide" className="flex items-center text-red-700 font-medium hover:underline">
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
              <div className="mb-4">{guide.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-600 flex-1">{guide.description}</p>
              <div className="absolute right-4 bottom-4 text-gray-400 group-hover:text-red-700">
                <ChevronRight className="w-6 h-6"/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
