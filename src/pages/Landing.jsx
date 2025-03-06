import React from "react";
import { motion } from "framer-motion";
import Features from "../components/Features";
import AIInsights from "../components/AIInsights";
import InvestmentTrends from "../components/InvestmentTrends";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const Landing = () => {
  return (
    <div className="bg-gray-900 text-white pt-10">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Glowing Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-purple-700 to-pink-600 opacity-30 blur-3xl"></div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute w-32 h-32 bg-blue-400 rounded-full opacity-20"
          animate={{ x: [0, 100, -100, 0], y: [0, 50, -50, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 bg-pink-500 rounded-full opacity-25"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl px-10 py-16 text-center backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600"
          >
            Master Your Finances with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-5 text-lg text-gray-300"
          >
            Real-time analytics, AI-driven insights, and seamless investments for financial success.
          </motion.p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-lg bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600 transition-all"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-lg bg-gray-800 border border-gray-500 rounded-lg hover:bg-gray-700 transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </section>

      {/* Data-Driven Sections */}
      <Features />
      <AIInsights />
      <InvestmentTrends />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Landing;
