"use client";

import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("footer");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-[#1B3A57] text-white pt-14 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8"
        >
          {/* ---------- BRAND ---------- */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 col-span-2 md:col-span-1"
          >
            <Link href="/" className="inline-flex items-center -mt-4">
              <Image
                src="/albasync-01.png"
                width={160}
                height={60}
                alt="Albasync Logo"
                priority
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed text-gray-200 max-w-sm">
              {t("description")}
            </p>

            {/* FIXED: Changed space-x-4 to gap-4 for RTL compatibility */}
            <div className="flex gap-4 pt-2">
              {[Facebook, Linkedin, Instagram, Youtube].map(
                (Icon: LucideIcon, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, color: "#fbbf24" }}
                    className="transition-colors cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* ---------- REAL ESTATE ---------- */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">
              {t("sections.realEstate.title")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                { key: "buy", href: "/buy" },
                { key: "rent", href: "/rent" },
                { key: "sell", href: "/sell" },
                { key: "agents", href: "/find-agent" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {t(`sections.realEstate.links.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ---------- HOME SERVICES ---------- */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">
              {t("sections.services.title")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                { key: "all", href: "/service" },
                { key: "plumbing", href: "/service/4" },
                { key: "electrical", href: "/service/1" },
                { key: "cleaning", href: "/service/2" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {t(`sections.services.links.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ---------- COMPANY ---------- */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">
              {t("sections.company.title")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                { key: "about", href: "/about" },
                { key: "careers", href: "/careers" },
                { key: "blog", href: "/blog" },
                { key: "contact", href: "/contact" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {t(`sections.company.links.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ---------- SUPPORT ---------- */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">
              {t("sections.support.title")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                { key: "faq", href: "/faq" },
                { key: "privacy", href: "/privacy-policy" },
                { key: "terms", href: "/terms-of-service" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {t(`sections.support.links.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-6"
        />

        {/* ---------- BOTTOM FOOTER ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-300 gap-4"
        >
          <p className="text-center sm:text-left">
            {t("copyright", { year: 2025 })}
          </p>

          {/* FIXED: Changed space-x-6 to gap-6 here as well */}
          <div className="flex gap-6">
            {[
              { key: "privacy", href: "/privacy-policy" },
              { key: "terms", href: "/terms-of-service" },
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="hover:text-yellow-400 transition-colors"
              >
                {t(`sections.support.links.${item.key}`)}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
