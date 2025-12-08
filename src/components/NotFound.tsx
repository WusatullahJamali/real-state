"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFoundClient() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-900 px-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center bg-red-100 p-6 rounded-full mb-6"
      >
        <AlertTriangle className="w-16 h-16 text-red-500" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl font-extrabold mb-3 text-center"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-lg text-gray-600 text-center max-w-md"
      >
         The page you're looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
