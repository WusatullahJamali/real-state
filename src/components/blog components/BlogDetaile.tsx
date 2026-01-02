"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"; // To get the blog ID from URL
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
  Calendar,
  User,
  Clock,
} from "lucide-react";

export default function BlogDetails() {
  const t = useTranslations("home.blog");
  const locale = useLocale();
  const params = useParams();
  const isRtl = locale === "ar";

  // 1. Get all posts from JSON
  const posts = t.raw("posts") as any[];

  // 2. Find the specific post based on the ID in the URL
  // (Assuming your URL is /blog/[id])
  const post = posts.find((p) => p.id.toString() === params.id) || posts[0];

  return (
    <div className="bg-white text-slate-900" dir={isRtl ? "rtl" : "ltr"}>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src={post.image || "/blog[1].jpg"}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 text-center"
        >
          <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {post.tag}
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex justify-center gap-6 text-white/80 text-sm flex-wrap">
            <span className="flex items-center gap-2">
              <Calendar size={16} /> {post.date || "Dec 15, 2024"}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> {post.readTime}
            </span>
          </div>
        </motion.div>
      </section>

      {/* CONTENT */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 py-20 space-y-12"
      >
        {/* Intro - Using snippet or a specific 'content' field from your JSON */}
        <p className="text-xl leading-9 text-slate-700">
          {post.fullContent?.intro || post.snippet}
        </p>

        {/* Sections - Dynamically mapping from JSON if they exist */}
        {post.fullContent?.sections ? (
          post.fullContent.sections.map((section: any, i: number) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-slate-900">
                {section.title}
              </h2>
              <p className="text-lg leading-8 text-slate-700">{section.text}</p>
            </motion.section>
          ))
        ) : (
          /* Fallback content if JSON doesn't have sections yet */
          <p className="text-lg leading-8 text-slate-700">{post.snippet}</p>
        )}

        {/* Quote Highlight */}
        {post.fullContent?.quote && (
          <blockquote className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-yellow-400 pl-6 rtl:pl-0 rtl:pr-6 italic text-xl text-slate-800 bg-yellow-50 py-6 rounded-r-xl rtl:rounded-r-none rtl:rounded-l-xl">
            “{post.fullContent.quote}”
          </blockquote>
        )}

        {/* Share */}
        <div className="pt-10 border-t">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-800"></span>
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <button
                key={i}
                className="p-3 rounded-full border hover:bg-yellow-400 hover:text-white transition-all"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Back */}
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:underline pt-6"
        >
          <ArrowLeft size={18} className="rtl:rotate-180" />
          {t("back")}
        </Link>
      </motion.article>
    </div>
  );
}
