"use client";

import Image from "next/image";
import Link from "next/link";

/* ---------------- TYPES ---------------- */

interface BlogPost {
  id: number;
  title: string;
  snippet: string;
  image: string;
  tag: string;
  author: string;
  readTime: string;
}

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

/* ---------------- BLOG CARD ---------------- */

interface BlogCardProps {
  post: BlogPost;
}
const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-shadow duration-300"
    >
      {/* IMAGE */}
      <div className="relative h-36 md:h-40 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Tag */}
        <span className="absolute top-3 left-3 bg-yellow-500 text-gray-900 px-3 py-1 text-xs font-semibold rounded-full shadow-md">
          {post.tag}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-yellow-600 transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {post.snippet}
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
          <span className="font-medium text-gray-800">{post.author}</span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md font-medium">
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Hover underline below the card */}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
    </Link>
  );
};

/* ---------------- HERO BANNER ---------------- */

const FeaturedArticleBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[45vh] md:h-[70vh] overflow-hidden bg-gray-900">
      <Image
        src="/blog7.avif"
        alt="Featured Article"
        fill
        className="object-cover brightness-75 hover:scale-105 transition duration-700"
        priority
      />

      <div className="absolute inset-0 bg-black/30" />

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

/* ---------------- PAGE ---------------- */

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* MOBILE BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:hidden">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <FeaturedArticleBanner />

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
