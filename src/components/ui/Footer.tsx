"use client";

import React from "react";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("footer");
  const locale = useLocale();
  const langPrefix = `/${locale}`;

  const footerSections = [
    {
      id: "realEstate",
      links: ["buy", "rent", "sell", "agents"],
      paths: ["/buy", "/rent", "/sell", "/find-agent"],
    },
    {
      id: "services",
      links: ["all", "plumbing", "electrical", "cleaning"],
      paths: ["/service", "/service/4", "/service/1", "/service/2"],
    },
    {
      id: "company",
      links: ["about", "careers", "blog", "contact"],
      paths: ["/about", "/careers", "/blog", "/contact"],
    },
    {
      id: "support",
      links: ["faq", "privacy", "terms"],
      paths: ["/faq", "/privacy-policy", "/terms-of-service"],
    },
  ];

  const anim = {
    container: { visible: { transition: { staggerChildren: 0.05 } } },
    item: {
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    },
  };

  return (
    <footer className="bg-[#1B3A57] text-white pt-14 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={anim.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {/* Brand */}
          <motion.div
            variants={anim.item}
            className="col-span-2 md:col-span-1 space-y-4"
          >
            <Link href={langPrefix} className="inline-block -mt-2">
              <Image
                src="/albasync-01.png"
                width={140}
                height={50}
                alt="Logo"
                priority
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3 }}
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Nav Links */}
          {footerSections.map((sec) => (
            <motion.div key={sec.id} variants={anim.item}>
              <h4 className="font-bold mb-4">
                {t(`sections.${sec.id}.title`)}
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {sec.links.map((link, i) => (
                  <li key={link}>
                    <Link
                      href={`${langPrefix}${sec.paths[i]}`}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {t(`sections.${sec.id}.links.${link}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>{t("copyright", { year: 2026 })}</p>
          <div className="flex gap-6">
            <Link
              href={`${langPrefix}/privacy-policy`}
              className="hover:text-white"
            >
              {t("sections.support.links.privacy")}
            </Link>
            <Link
              href={`${langPrefix}/terms-of-service`}
              className="hover:text-white"
            >
              {t("sections.support.links.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
