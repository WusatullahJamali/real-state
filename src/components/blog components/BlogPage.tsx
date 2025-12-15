"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  snippet: string;
  image: string;
  tag: string;
  author: string;
  readTime: string;
}

// Blog Data — 4 Cards With Authors + Read Time
const blogs = [
  {
    id: 1,
    title: "Real Estate Market Trends in Baghdad 2025",
    snippet:
      "Baghdad’s real estate market continues to grow due to infrastructure development, commercial expansion, and rising residential demand in prime districts...",
    image: "/blog2.jpg",
    tag: "Baghdad",
    author: "Wusat",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "Top Investment Opportunities in Erbil Real Estate",
    snippet:
      "Erbil has become one of Iraq’s strongest property markets, attracting investors due to stability, modern housing projects, and high rental demand...",
    image: "/blog3.jpg",
    tag: "Erbil",
    author: "Sahil",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Basra Property Market: Residential & Commercial Growth",
    snippet:
      "Basra’s oil economy is driving demand for apartments, offices, and commercial properties, making it a key investment hub in southern Iraq...",
    image: "/blog4.jpg",
    tag: "Basra",
    author: "Shahzaib",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Najaf & Karbala: High-Demand Cities for Property Investment",
    snippet:
      "Religious tourism continues to fuel strong rental and hotel apartment demand in Najaf and Karbala, offering consistent long-term returns...",
    image: "/blog5.jpg",
    tag: "Najaf & Karbala",
    author: "Shoaib (Senior Developer)",
    readTime: "6 min read",
  },
];


// BLOG CARD
type BlogCardProps = {
  post: BlogPost;
};

const BlogCard = ({ post }: BlogCardProps) => {

  return (
    <Link
      href={`/blog/${post.id}`}
      className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={500}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <span className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 text-xs rounded-full">
          {post.tag}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 group-hover:text-yellow-600 transition line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-gray-700 text-sm leading-tight line-clamp-3">
          {post.snippet}
        </p>
      </div>

      {/* Updated Footer */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
        <div className="w-full flex justify-between items-center text-xs text-gray-600 font-medium 
                        border-l-4 border-yellow-400 pl-3 pr-1 py-1 rounded-sm">
          <span className="font-semibold text-gray-900">{post.author}</span>
          <span className="text-gray-700">{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
};


// HERO BANNER
const FeaturedArticleBanner = () => {
  const BANNER_IMAGE = "/b2.avif";

  return (
    <section className="relative w-full h-[45vh] md:h-[70vh] overflow-hidden bg-gray-900">
      <Image
        src={BANNER_IMAGE}
        alt="Featured Article"
        fill
        className="object-cover brightness-75 hover:scale-105 transition duration-700"
        priority
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-sm text-yellow-300 font-semibold tracking-widest uppercase">
          Featured Story
        </p>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl leading-tight mt-3">
  Inside Iraq’s Fastest Growing Real Estate Cities
</h1>


        <Link href="/article/featured">
          <button className="mt-6 px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 shadow-lg transition">
            Read Article
          </button>
        </Link>
      </div>
    </section>
  );
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* HERO SECTION */}
      <FeaturedArticleBanner />

      {/* BLOG CARDS */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
