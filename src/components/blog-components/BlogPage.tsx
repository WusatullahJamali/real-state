"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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

/* ---------------- BLOG CARD ---------------- */

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/blog/${post.id}`}
        className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative h-36 md:h-40 overflow-hidden">
          <Image
            src={post.image || "/placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          <span className="absolute top-3 left-3 bg-yellow-500 text-gray-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md z-10">
            {post.tag}
          </span>
        </div>

        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-yellow-600 transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3 leading-relaxed">
              {post.snippet}
            </p>
          </div>

          <div className="mt-4 flex justify-between items-center text-[11px] text-gray-500">
            <span className="font-semibold text-gray-800 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />{" "}
              {post.author}
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded font-bold">
              {post.readTime}
            </span>
          </div>
        </div>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
      </Link>
    </motion.div>
  );
};

/* ---------------- HERO BANNER ---------------- */

const FeaturedArticleBanner: React.FC = () => {
  // Accessing the specific nested object
  const t = useTranslations("home.blog.featured");

  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-gray-900">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src={t("image")}
          alt={t("title")}
          fill
          className="object-cover brightness-50"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xs md:text-sm text-yellow-400 font-bold tracking-[0.2em] uppercase"
        >
          {t("label")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-[1.1] mt-4"
        >
          {t("title")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link href="/article/featured">
            <button className="mt-8 px-10 py-4 bg-yellow-500 text-gray-900 font-bold rounded-full hover:bg-yellow-400 hover:scale-105 shadow-[0_10px_20px_rgba(234,179,8,0.3)] transition-all active:scale-95">
              {t("button")}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- PAGE ---------------- */

export default function BlogPage() {
  const t = useTranslations("home.blog");

  // Using raw to get the posts array
  // If t.raw fails, we ensure it's an empty array to prevent map errors
  let posts: BlogPost[] = [];
  try {
    posts = t.raw("posts");
  } catch (e) {
    console.error("Failed to load blog posts from JSON", e);
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* MOBILE BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
        >
          <span className="rtl:rotate-180">←</span> {t("back")}
        </Link>
      </div>

      <FeaturedArticleBanner />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {posts && posts.length > 0 ? (
              posts.map((post) => <BlogCard key={post.id} post={post} />)
            ) : (
              <p className="col-span-full text-center text-gray-400">
                No posts found.
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
